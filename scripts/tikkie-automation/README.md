# tikkie-automation

Creates a [Tikkie](https://www.tikkie.me) payment request by driving the
**consumer Tikkie app on an Android phone** over `adb`, then saves the request's
QR code (PNG) and payment link. No Tikkie Business contract or API access is
needed: the script does what a person would do in the app, only automated.

It supports the two kinds of Tikkie:

- **fixed amount**: the payer pays a specific amount
- **open**: the payer chooses the amount

```bash
./.venv/bin/python tikkie.py 12.50 "Leg 7 2026"            # fixed amount
./.venv/bin/python tikkie.py open  "Pauperformance Market" # payer chooses
```

This creates a **real** Tikkie in the phone owner's Tikkie account each time it
runs. Nothing is sent to anyone; the QR/link is only produced.

Used by the `/tikkie` Claude Code skill (`~/.claude/skills/tikkie/SKILL.md`),
which calls this script with `--out /tmp/tikkie --clipboard`.

## Usage

```
tikkie.py <amount|open> "<description>" [--out DIR] [--clipboard]
```

| Argument | Meaning |
|---|---|
| `amount` | Amount in EUR (`13`, `12.50`, `12,50`), or the word `open` |
| `description` | What the Tikkie is for (see limits below) |
| `--out DIR` | Where to write the files (default: `out/` next to the script) |
| `--clipboard` | Also copy the link, then the QR image, to the Wayland clipboard |

It prints a JSON object to stdout:

```json
{
  "png": "/tmp/tikkie/20260919_163231_open_Pauperformance_Market.png",
  "link_file": "/tmp/tikkie/20260919_163231_open_Pauperformance_Market.txt",
  "link": "https://tikkie.me/pay/7edcvqsd36lofdlb0mul",
  "amount": null,
  "description": "Pauperformance Market",
  "clipboard": true
}
```

`amount` is `null` for open Tikkies, `clipboard` only appears with
`--clipboard`, and `link` is `null` if the QR could not be decoded (the PNG is
still saved). A run takes about 50 seconds.

Files written to `--out`:

- `<YYYYMMDD_HHMMSS>_<kind>_<description>.png`: the QR code image exactly as the
  Tikkie app exports it (722x722, rounded frame, Tikkie logo). `<kind>` is `open`
  or e.g. `13eur`.
- `<same name>.txt`: the link, plus a trailing newline.

## Setup

Requirements on the PC:

- `adb` (Android platform tools)
- Python 3 with the packages in the local venv: `zxing-cpp` and `pillow`
- optional, for `--clipboard`: a Wayland session with `wl-copy` (`wl-clipboard`)

```bash
python3 -m venv .venv
./.venv/bin/pip install zxing-cpp pillow
```

Requirements on the phone:

- **Developer options on and USB debugging enabled**, and this PC authorised
  ("Allow USB debugging?", "Always allow"). A phone that shows up as MTP/PTP
  only (USB id `18d1:4ee1`) has debugging switched off.
- The **Tikkie app** (`com.abnamro.nl.tikkie`) installed and **already logged
  in**.
- The screen **unlocked** while the script runs.

Check the connection with `adb devices`: the phone must be listed as `device`.

## How it works

`adb shell uiautomator dump` returns the current screen's view hierarchy as XML.
The Tikkie app uses native Android views with stable resource IDs, so the script
finds each element by ID (or text/description), taps the centre of its bounds
with `adb shell input tap`, and dumps again to see the next screen. There are
no hard-coded coordinates, which matters because the layout shifts when the
keyboard opens.

The flow in `create_tikkie(amount, description, out_dir)`:

1. **`go_home()`**: wake the screen, fail if the lock screen is showing,
   launch Tikkie, and press Back until the dashboard's `createTikkieFAB`
   ("Create new Tikkie") button is visible. Falls back to force-stopping and
   relaunching the app.
2. Tap `createTikkieFAB`.
3. **Amount**:
   - fixed: `type_amount()` types the digits one `input keyevent` at a time and
     verifies the field afterwards. `input text` drops characters in this
     masked field; key events do not.
   - open: tap the `Switch` ("Payer may choose amount") and wait for the field
     to read "Open amount".
4. Tap `NextButton`.
5. **Description**: `type_description()` types it with `input text` and verifies
   the field.
6. Tap `QrShareButton` ("Share via QR code") and wait for the QR sheet.
7. **Export the image**: note the files in `/sdcard/DCIM/Tikkie`, tap
   "Print or share", then "Save to photos", and take the one *new* file (an
   old-file list is diffed, since the folder already holds earlier exports).
   `adb pull` copies it to `--out`. This gives the app's own clean image
   instead of a screenshot.
8. **Decode the link** from the PNG with `zxing-cpp` (`decode()`). The image is
   first composited onto white because it has a transparent background. The
   QR encodes the payment link, so the image and the link always match
   (apart from the tracking parameter, which is then removed).
   OpenCV's QR detector could not read this styled QR (dot modules and logo
   in the middle); zxing-cpp can.
9. **Clean up the phone**: delete the exported file and its gallery
   (MediaStore) entry, then return to the dashboard.
10. Optional `copy_to_clipboard()` (`--clipboard`): `wl-copy` the link as text,
    wait 1.5 s, then `wl-copy --type image/png` the file. With a clipboard
    manager such as GPaste, the image is then the newest history entry and the
    link is right below it. The link is copied without a trailing newline.
    A failed copy only prints a warning and reports `"clipboard": false`, since
    by then the Tikkie already exists.

## Assumptions and limitations

- **One phone attached.** With several devices `adb` refuses to pick one
  (`more than one device`); set `ANDROID_SERIAL=<serial>` to choose.
- **The app language must be English.** Resource IDs are language-independent,
  but the script also matches visible strings: "Open amount", "QR code",
  "Print or share", "Save to photos" (the last two come from the Tikkie app and
  the Android share sheet). With a Dutch UI these lookups will time out.
- **Descriptions**: max 35 characters (the app's limit), restricted to ASCII
  letters, digits, space and `.,_-!?`. Other characters (emoji, accents,
  quotes) are rejected up front, because `adb shell input text` cannot type
  them reliably. The script never rewrites a description silently.
- **Amounts** are limited by the app (the form says a maximum of EUR 950). The
  script does not validate the range, and what the app does above that limit
  (or below EUR 0.01) has not been tested.
- **The phone must stay unlocked.** The script cannot enter a PIN or use
  biometrics. It also assumes Tikkie doesn't ask for a login or biometric check
  during the run; this hasn't happened so far, but it might after a long idle
  time or an app update.
- **The screen is scraped.** A Tikkie update that renames screens or resource
  IDs (`createTikkieFAB`, `AmountInputField`, `Switch`, `NextButton`,
  `DescriptionInputField`, `QrShareButton`) breaks the script. Re-dump a screen
  with `adb shell uiautomator dump` and adjust the IDs.
- **Failure after creation.** If the run fails after "Share via QR code", a
  Tikkie may already exist in the app even though no files were saved. Look at
  the Tikkie dashboard before retrying, or you may create a duplicate.
- **Leftovers on the phone.** The script leaves `/sdcard/tk.xml` (the last UI
  dump) on the phone. It deletes its own exported image from the Tikkie folder
  but never touches other files there.
- **The link** is what the QR encodes minus the `?utm_medium=qr` tracking
  parameter (`strip_tracking()`; other query parameters, if any, are kept).
  Only the bare URL loading (HTTP 200) was checked; whether the payment request
  opens correctly for a payer without the parameter has not been tested with a
  real payment. The QR image itself still encodes the original link.
- **Clipboard** support is Wayland-only (`wl-copy`).
- **Terms of use.** The official Tikkie API is business-only and prohibits
  consumer-to-consumer use. Automating the consumer app is a grey area and
  could conflict with Tikkie's terms; use it sparingly, for your own account.
- Safety: `adb` debugging with an unlocked phone that has a banking-adjacent app
  is powerful. Keep the phone's adb access to this PC, and don't expose adb over
  the network.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `adb devices` is empty | USB debugging off, bad/charge-only cable, or authorisation prompt not accepted |
| `phone is locked` | Unlock the screen and re-run |
| `UI element not found: {...}` | Tikkie is on an unexpected screen, the app is in another language, or the UI changed |
| `amount field shows ...` / `description field shows ...` | Typing was garbled; re-run, and check the description characters |
| `expected 1 new exported image on phone` | "Save to photos" didn't produce exactly one new file (share sheet layout changed) |
| `link` is `null` | The QR decoded to nothing; the PNG is still saved, open it and scan it manually |
| `"clipboard": false` | `wl-copy` missing or no Wayland session; the files were still saved |

Note for GPaste users: `gpaste-client history` can hang on this machine; read the
history over D-Bus instead:

```bash
busctl --user call org.gnome.GPaste /org/gnome/GPaste org.gnome.GPaste2 GetElementAtIndex t 0
```

## Files

```
tikkie.py    the script (create_tikkie, copy_to_clipboard, CLI)
.venv/       Python venv with zxing-cpp and pillow (git-ignored)
out/         default output directory for QR images and links (git-ignored)
.gitignore
```
