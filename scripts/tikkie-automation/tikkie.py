#!/usr/bin/env python3
"""Create a Tikkie in the consumer Android app over adb; save the QR code and link.

usage: tikkie.py <amount|open> "<description>" [--out DIR] [--clipboard]
"""
import argparse, json, re, subprocess, sys, time, datetime, pathlib
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode
import xml.etree.ElementTree as ET
import zxingcpp
from PIL import Image

PKG = "com.abnamro.nl.tikkie"
PHONE_DIR = "/sdcard/DCIM/Tikkie"


def adb(*a):
    r = subprocess.run(["adb", *a], capture_output=True, text=True)
    if r.returncode:
        raise RuntimeError(f"adb {' '.join(a)}: {r.stderr.strip() or r.stdout.strip()}")
    return r.stdout


def dump():
    for _ in range(3):  # uiautomator dump occasionally fails mid-animation
        try:
            adb("shell", "uiautomator dump /sdcard/tk.xml >/dev/null")
            x = adb("shell", "cat /sdcard/tk.xml")
            return ET.fromstring(x[x.index("<"):])
        except (RuntimeError, ET.ParseError, ValueError):
            time.sleep(0.5)
    raise RuntimeError("uiautomator dump failed")


def nodes(root):
    for n in root.iter("node"):
        l, t, r, b = map(int, re.findall(r"\d+", n.get("bounds")))
        yield dict(id=n.get("resource-id").split("/")[-1], text=n.get("text"),
                   desc=n.get("content-desc"), cx=(l + r) // 2, cy=(t + b) // 2)


def find(root, id=None, desc=None, text=None):
    for n in nodes(root):
        if (id and n["id"] != id) or (desc and desc not in n["desc"]) or (text and text not in n["text"]):
            continue
        return n


def wait(timeout=10, **q):
    end = time.time() + timeout
    while time.time() < end:
        n = find(dump(), **q)
        if n:
            return n
        time.sleep(0.4)
    raise TimeoutError(f"UI element not found: {q}")


def tap(n):
    adb("shell", f"input tap {n['cx']} {n['cy']}")


def go_home():
    """Get Tikkie to its dashboard (the one with the 'Create new Tikkie' button)."""
    adb("shell", "input keyevent KEYCODE_WAKEUP")
    if "isKeyguardShowing=true" in adb("shell", "dumpsys window | grep isKeyguardShowing"):
        raise RuntimeError("phone is locked; unlock it (or disable the lock screen while plugged in)")
    adb("shell", f"monkey -p {PKG} -c android.intent.category.LAUNCHER 1 >/dev/null")
    for _ in range(6):
        if find(dump(), id="createTikkieFAB"):
            return
        adb("shell", "input keyevent KEYCODE_BACK")
        time.sleep(0.8)
    adb("shell", f"am force-stop {PKG}")
    adb("shell", f"monkey -p {PKG} -c android.intent.category.LAUNCHER 1 >/dev/null")
    wait(timeout=15, id="createTikkieFAB")


def type_amount(amount):
    s = f"{amount:.2f}".rstrip("0").rstrip(".") if amount != int(amount) else str(int(amount))
    tap(wait(id="AmountInputField"))
    time.sleep(0.5)
    for ch in s:  # per-key events: `input text` drops characters in this masked field
        adb("shell", "input keyevent " + ("KEYCODE_PERIOD" if ch == "." else f"KEYCODE_{ch}"))
        time.sleep(0.25)
    got = wait(id="AmountInputField")["text"]
    if float(got or 0) != float(amount):
        raise RuntimeError(f"amount field shows {got!r}, wanted {amount}")


def type_description(desc):
    if len(desc) > 35:
        raise ValueError("description max 35 characters")
    if not re.fullmatch(r"[A-Za-z0-9 .,_\-!?]+", desc):
        raise ValueError("description: only ASCII letters/digits/space and .,_-!? supported")
    tap(wait(id="DescriptionInputField"))
    time.sleep(0.5)
    adb("shell", "input text " + desc.replace(" ", "%s"))
    time.sleep(0.5)
    got = wait(id="DescriptionInputField")["text"]
    if got != desc:
        raise RuntimeError(f"description field shows {got!r}, wanted {desc!r}")


def decode(png):
    im = Image.open(png).convert("RGBA")
    bg = Image.new("RGBA", im.size, "white")
    bg.alpha_composite(im)
    res = zxingcpp.read_barcodes(bg.convert("RGB"), formats=zxingcpp.BarcodeFormat.QRCode)
    return res[0].text if res else None


def strip_tracking(link):
    """Drop the utm_medium=qr tracking parameter the QR adds to the link."""
    if not link:
        return link
    u = urlsplit(link)
    q = [(k, v) for k, v in parse_qsl(u.query, keep_blank_values=True) if k != "utm_medium"]
    return urlunsplit(u._replace(query=urlencode(q)))


def create_tikkie(amount, description, out_dir="out"):
    """amount: float (fixed) or None (payer chooses). Returns dict(png, link, ...)."""
    out = pathlib.Path(out_dir); out.mkdir(parents=True, exist_ok=True)
    go_home()
    tap(wait(id="createTikkieFAB"))
    if amount is None:
        tap(wait(id="Switch"))
        wait(text="Open amount")
    else:
        type_amount(amount)
    tap(wait(id="NextButton"))
    type_description(description)
    tap(wait(id="QrShareButton"))
    wait(desc="QR code", timeout=15)
    time.sleep(1)
    before = set(adb("shell", f"ls {PHONE_DIR}").split())
    tap(wait(text="Print or share"))
    tap(wait(text="Save to photos"))
    new = set()
    for _ in range(20):
        time.sleep(0.5)
        new = set(adb("shell", f"ls {PHONE_DIR}").split()) - before
        if new:
            break
    if len(new) != 1:
        raise RuntimeError(f"expected 1 new exported image on phone, got {new}")
    f = new.pop()
    slug = re.sub(r"\W+", "_", description).strip("_")
    stamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    kind = "open" if amount is None else f"{amount:g}eur"
    png = out / f"{stamp}_{kind}_{slug}.png"
    adb("pull", f"{PHONE_DIR}/{f}", str(png))
    link = strip_tracking(decode(png))
    link_file = png.with_suffix(".txt")
    link_file.write_text((link or "") + "\n")
    # tidy the phone: remove the exported file and its gallery entry
    adb("shell", f"rm {PHONE_DIR}/{f}")
    subprocess.run(["adb", "shell", "content", "delete", "--uri", "content://media/external/images/media",
                    "--where", f"\"_display_name='{f}'\""], capture_output=True)
    go_home()
    return dict(png=str(png), link_file=str(link_file), link=link, amount=amount, description=description)


def copy_to_clipboard(link, png, gap=1.5):
    """Wayland: copy the link (text), then the PNG (image/png), so a clipboard
    history (GPaste, ...) ends up with the image as its newest entry.
    Never raises: the Tikkie already exists by the time this runs."""
    def wl_copy(*args, data):
        subprocess.run(["wl-copy", *args], input=data, stdout=subprocess.DEVNULL,
                       stderr=subprocess.DEVNULL, timeout=10, check=True)
    try:
        if link:
            wl_copy(data=link.encode())  # no trailing newline
            time.sleep(gap)  # let the history tool register the first item
        wl_copy("--type", "image/png", data=pathlib.Path(png).read_bytes())
        return True
    except (OSError, subprocess.SubprocessError) as e:
        print(f"warning: clipboard copy failed: {e}", file=sys.stderr)
        return False


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("amount", help="amount in EUR, or 'open' for payer-chooses")
    ap.add_argument("description")
    ap.add_argument("--clipboard", action="store_true",
                    help="copy the link, then the QR image, to the Wayland clipboard (wl-copy)")
    ap.add_argument("--out", default=str(pathlib.Path(__file__).parent / "out"))
    a = ap.parse_args()
    amt = None if a.amount.lower() == "open" else float(a.amount.replace(",", "."))
    res = create_tikkie(amt, a.description, a.out)
    if a.clipboard:
        res["clipboard"] = copy_to_clipboard(res["link"], res["png"])
    print(json.dumps(res, indent=2))
