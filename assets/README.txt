Put the official NTU logo here as:

    ntu-logo.svg

All six pages reference it from their footer as assets/ntu-logo.svg.
Until the file exists the <img> removes itself, so the footer just shows
the text with no broken-image icon.

Notes
- SVG is preferred (sharp at any size). A transparent PNG at 2x also works —
  if you use PNG, change src="assets/ntu-logo.svg" to .png in all six pages.
- The site is now on a light paper background (#eeece7), so use the standard
  DARK-ON-LIGHT version of the mark, not the white / reversed one.
  (This note previously said white; that was for the old dark theme.)
- It is rendered at height:20px (CSS class .ntu, in assets/omni.css).
- Official files come from NTU's brand / corporate communications portal.
