"""Build the landing-page burst artwork from the APL brand icon.

The source is page 17 of APL_Icon_Squared_RGB.ai (from the brand assets'
"Extra" pack): a falling figure in front of 18 wavy rays, cropped to a
square artboard. This script extends every ray past the artboard edge so the
artwork can fill a window of any shape. It writes the rays (one <path> per
ray, for animating them individually) and the figure as two SVGs that line
up when stacked, so the figure can stay on screen while the rays scroll away,
plus each ray's centre line and width (JSON) for writing labels inside rays.

Usage:
    pdftocairo -svg -f 17 -l 17 APL_Icon_Squared_RGB.ai page17.svg
    python3 tools/landing-burst/extend_burst.py page17.svg \
        src/assets/landing-rays.svg src/assets/landing-figure.svg \
        src/assets/landing-rays.json src/assets/landing-figure-halo.json

How rays are extended: each ray side is modelled in a frame centred on the
burst as u(s) = k*s + w(s), a straight wedge edge through the centre plus a
wiggle w. Past the artboard the wiggle is continued by repeating the ray's own
last period (same period for both sides so they stay parallel), with its
end-to-start drift removed so the repeats join seamlessly. Rays too short to
show a full period borrow the wiggle of the longest ray.

It also writes the figure's outline grown by the artwork's gap around it
(JSON polygon), for page elements whose edges flow around the figure.

Requires numpy and Pillow.
"""
import json
import re
import sys

import numpy as np

SIZE = 2550.359375  # artboard size in the pdftocairo output
CENTER = np.array([1234.5, 1265.3])  # point the rays radiate from
EDGE = 6.0  # points this close to the artboard edge are where a ray was cut
TRIM = 40.0  # drop the rounded corners some rays have at the artboard edge
S_MAX = 5500.0  # how far from the centre rays are extended
STEP = 6.0  # resolution used to analyse and extend the wiggle
MIN_RUN = 420.0  # rays with less visible length than this borrow a wiggle
WARP_SPAN = 700.0  # how much of a side's outer end is checked for bumps
WARP_CURVATURE = 2.0  # clean wiggles stay below ~1; bumps around the hand reach ~10
TOLERANCE = 1.0  # polyline simplification tolerance (artboard units)
CENTERLINE_STEP = 30.0  # spacing of the exported ray centre-line points
HALO_GAP = 55.0  # gap kept around the figure by shapes cut around it
HALO_PX = 1.0  # artboard units per pixel when computing that outline
HALO_SMOOTHING = 4  # outline pixels averaged on each side to remove pixel steps
HALO_TOLERANCE = 0.75  # simplification of the outline (artboard units)
NAVY = "#012031"
PURPLE = "#a37ac9"


# --- reading the source -----------------------------------------------------

def parse_path(d):
    """Split an SVG path (M/L/C/Z only) into subpaths of sampled points."""
    toks = re.findall(r"[MLCZ]|-?\d+\.?\d*", d)
    subs, pos, i = [], None, 0
    while i < len(toks):
        t = toks[i]
        if t == "M":
            pos = np.array([float(toks[i + 1]), float(toks[i + 2])])
            subs.append([pos[None]])
            i += 3
        elif t == "L":
            p = np.array([float(toks[i + 1]), float(toks[i + 2])])
            subs[-1].append(p[None])
            pos = p
            i += 3
        elif t == "C":
            c1, c2, p1 = (np.array([float(toks[i + j]), float(toks[i + j + 1])]) for j in (1, 3, 5))
            t_ = np.linspace(0, 1, 40)[1:, None]
            subs[-1].append((1 - t_) ** 3 * pos + 3 * (1 - t_) ** 2 * t_ * c1
                            + 3 * (1 - t_) * t_ ** 2 * c2 + t_ ** 3 * p1)
            pos = p1
            i += 7
        elif t == "Z":
            i += 1
        else:
            raise ValueError(f"unexpected path token {t!r}")
    return [np.vstack(s) for s in subs]


def load(svg_path):
    """Return (figure path data, list of ray outlines) from the page-17 SVG."""
    svg = open(svg_path).read()
    purple = re.findall(r'<path fill-rule="nonzero" fill="rgb\(63[^"]*"[^>]* d="([^"]*)"', svg)
    figure, rays = purple
    return figure, parse_path(rays)


# --- splitting rays into sides ----------------------------------------------

def edge_distance(pts):
    return np.minimum.reduce([pts[:, 0], SIZE - pts[:, 0], pts[:, 1] - 4, SIZE - pts[:, 1]])


def split_sides(pts):
    """Return (axis, a, b): the ray's outward direction and its two side
    outlines, each ordered from the outer (artboard edge) end to the tip."""
    edge = edge_distance(pts) < EDGE
    n = len(pts)
    # rotate so the outline starts right after the cut along the artboard edge
    k = next(i for i in range(n) if edge[i] and not edge[(i + 1) % n])
    pts, edge = np.roll(pts, -(k + 1), axis=0), np.roll(edge, -(k + 1))
    run = pts[: np.argmax(edge)]
    cut = pts[edge].mean(0)
    axis = (cut - CENTER) / np.linalg.norm(cut - CENTER)
    tip = int(np.argmin((run - CENTER) @ axis))
    return axis, trim(run[: tip + 1]), trim(run[tip:][::-1])


def trim(side):
    return side[np.argmax(edge_distance(side) >= TRIM):]


def to_local(axis, pts):
    rel = pts - CENTER
    return rel @ axis, rel @ np.array([-axis[1], axis[0]])


def from_local(axis, s, u):
    return CENTER + np.outer(s, axis) + np.outer(u, np.array([-axis[1], axis[0]]))


# --- extending ----------------------------------------------------------------

def resample(s, u):
    order = np.argsort(s)
    s, u = s[order], u[order]
    s, idx = np.unique(s, return_index=True)
    grid = np.arange(s[0], s[-1], STEP)
    return grid, np.interp(grid, s, u[idx])


def wedge_slope(s, u):
    """Slope of the straight edge through the centre, weighted outward."""
    w = s - s.min() + 1
    return np.sum(w * s * u) / np.sum(w * s * s)


def best_period(wiggles):
    """Period (in samples) whose repeat best matches value and slope at the
    end of every wiggle."""
    best = None
    for n in range(int(220 / STEP), int(700 / STEP)):
        if any(n + 3 >= len(w) for w in wiggles):
            break
        cost = sum((w[-1] - w[-1 - n]) ** 2
                   + (8 * ((w[-1] - w[-3]) - (w[-1 - n] - w[-3 - n]))) ** 2 for w in wiggles)
        if best is None or cost < best[0]:
            best = (cost, n)
    return None if best is None else best[1]


def warped(w):
    """True if the outer end of a wiggle has sharp bends (clean wiggles are
    smooth; sides bent around the figure have bumps)."""
    tail = w[-int(WARP_SPAN / STEP):]
    return np.abs(np.diff(tail, 2)).max() > WARP_CURVATURE


def seamless_period(w, n):
    drift = w[-1] - w[-1 - n]
    return w[-n:] - drift * np.arange(1, n + 1) / n


def extend_ray(axis, a, b, donor):
    sides = []
    for side in (a, b):
        g, u = resample(*to_local(axis, side))
        k = wedge_slope(g, u)
        sides.append((g, u - k * g, k))
    short = min(g[-1] - g[0] for g, _, _ in sides) < MIN_RUN
    # a side that hugs the figure's outline near its end is not a clean wiggle;
    # it continues with its sibling's wiggle (the two sides run parallel)
    clean = [w for _, w, _ in sides if not warped(w)]
    n = None if short or not clean else best_period(clean)
    exts, curves = [], []
    for g, w, k in sides:
        if n is None:
            period = donor
        else:
            period = seamless_period(w if not warped(w) else clean[0], n)
        ext_s = g[-1] + STEP * np.arange(1, int((S_MAX - g[-1]) / STEP) + 1)
        idx = np.arange(len(ext_s))
        # shift so the first repeated sample continues the curve
        ext_w = period[idx % len(period)] + (2 * w[-1] - w[-2] - period[0])
        exts.append(from_local(axis, ext_s, ext_w + k * ext_s))
        curves.append((np.r_[g, ext_s], np.r_[w + k * g, ext_w + k * ext_s]))
    ea, eb = exts
    # the drawn outline is kept as is; extensions are attached at its outer ends
    return np.vstack([ea[::-1], a, b[::-1], eb]), centerline(axis, curves)


def centerline(axis, curves):
    """Points along the middle of a ray, from its tip outward, with the ray's
    width there: [[x, y, width], ...] in artboard units (for placing labels)."""
    (sa, ua), (sb, ub) = curves
    s = np.arange(max(sa[0], sb[0]), S_MAX, CENTERLINE_STEP)
    ua, ub = np.interp(s, sa, ua), np.interp(s, sb, ub)
    xy = from_local(axis, s, (ua + ub) / 2)
    return [[round(x), round(y), round(abs(a - b))] for (x, y), a, b in zip(xy, ua, ub)]


# --- output ---------------------------------------------------------------------

def simplify(pts, tol=TOLERANCE):
    """Ramer-Douglas-Peucker polyline simplification."""
    keep = np.zeros(len(pts), bool)
    keep[[0, -1]] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        i, j = stack.pop()
        if j <= i + 1:
            continue
        a, b = pts[i], pts[j]
        ab = b - a
        seg = pts[i + 1:j] - a
        norm = np.hypot(*ab)
        d = np.abs(ab[0] * seg[:, 1] - ab[1] * seg[:, 0]) / norm if norm else np.hypot(seg[:, 0], seg[:, 1])
        m = int(np.argmax(d))
        if d[m] > tol:
            keep[i + 1 + m] = True
            stack += [(i, i + 1 + m), (i + 1 + m, j)]
    return pts[keep]


def to_d(poly):
    return "M" + "L".join(f"{x:.0f} {y:.0f}" for x, y in poly) + "Z"


def build(svg_in):
    figure, rays = load(svg_in)
    parts = [split_sides(r) for r in rays]
    longest = max(parts, key=lambda p: np.ptp(to_local(p[0], p[1])[0]))
    g, u = resample(*to_local(longest[0], longest[1]))
    w = u - wedge_slope(g, u) * g
    donor = seamless_period(w, best_period([w]))
    rays = [extend_ray(ax, a, b, donor) for ax, a, b in parts]
    return figure, [to_d(simplify(poly)) for poly, _ in rays], [line for _, line in rays]


def write_svg(path, body):
    # the viewBox frames the original artboard; rays reach far outside it and
    # show wherever the window is wider or taller than a square. Both files
    # share it, so the figure lines up with the rays when drawn on top.
    lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE:.0f} {SIZE:.0f}" '
        f'preserveAspectRatio="xMidYMid meet" overflow="visible">',
        *body,
        "</svg>",
    ]
    with open(path, "w") as f:
        f.write("\n".join(lines) + "\n")


def figure_halo(figure_d):
    """Outline of the figure grown by HALO_GAP (the navy gap the artwork keeps
    around it), as one polygon in artboard units. Used to cut shapes out of
    page elements so their edges flow around the figure.

    Done on a raster: draw the figure with a round-jointed outline as wide as
    twice the gap (an exact round offset, like the artwork's), trace the outer
    boundary, then smooth away the pixel steps."""
    from PIL import Image, ImageDraw

    pad = int(HALO_GAP / HALO_PX) + 4
    n = int(SIZE / HALO_PX) + 2 * pad
    img = Image.new("1", (n, n), 0)
    draw = ImageDraw.Draw(img)
    for pts in parse_path(figure_d):
        ring = [(x / HALO_PX + pad, y / HALO_PX + pad) for x, y in pts]
        draw.polygon(ring, fill=1)
        draw.line(ring + ring[:1], fill=1, width=round(2 * HALO_GAP / HALO_PX), joint="curve")
        r = HALO_GAP / HALO_PX
        for x, y in ring:  # round caps everywhere, so no corner is left square
            draw.ellipse([x - r, y - r, x + r, y + r], fill=1)
    grid = np.array(img, dtype=bool)

    outline = np.array(trace_outer_boundary(grid), dtype=float)[:, ::-1]  # (row, col) -> (x, y)
    # moving average along the closed outline removes the pixel staircase
    k = HALO_SMOOTHING
    padded = np.vstack([outline[-k:], outline, outline[:k]])
    kernel = np.ones(2 * k + 1) / (2 * k + 1)
    smooth = np.column_stack([np.convolve(padded[:, i], kernel, mode="valid") for i in (0, 1)])
    pts = (smooth - pad) * HALO_PX
    return [[round(x, 1), round(y, 1)] for x, y in simplify(pts, HALO_TOLERANCE)]


def trace_outer_boundary(grid):
    """Moore-neighbour tracing of the outer boundary of the first blob found
    scanning row by row; returns (row, col) pixels in order."""
    rows, cols = np.nonzero(grid)
    start = (rows[0], cols[0])  # topmost, then leftmost: its west neighbour is empty
    # neighbours clockwise, starting west
    ring = [(0, -1), (-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1)]
    path = [start]
    current, came_from = start, 0  # index in ring of the empty pixel we came from
    while True:
        for k in range(1, 9):
            d = (came_from + k) % 8
            r, c = current[0] + ring[d][0], current[1] + ring[d][1]
            if grid[r, c]:
                # next search starts from the neighbour before this one
                prev = ring[(d + 7) % 8]
                back = (current[0] + prev[0] - r, current[1] + prev[1] - c)
                came_from = ring.index(back)
                current = (r, c)
                break
        if current == start:
            return path
        path.append(current)


def main(svg_in, rays_out, figure_out, centerlines_out, halo_out):
    figure, rays, centerlines = build(svg_in)
    write_svg(rays_out, [f'<g fill="{PURPLE}">', *(f'<path d="{d}"/>' for d in rays), "</g>"])
    write_svg(figure_out, [f'<path fill="{PURPLE}" d="{figure.strip()}"/>'])
    # same order as the paths in rays_out
    with open(centerlines_out, "w") as f:
        json.dump(centerlines, f, separators=(",", ":"))
        f.write("\n")
    with open(halo_out, "w") as f:
        json.dump(figure_halo(figure), f, separators=(",", ":"))
        f.write("\n")


if __name__ == "__main__":
    main(*sys.argv[1:6])
