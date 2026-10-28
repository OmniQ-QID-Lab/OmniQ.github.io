# OMNI — NTU QID Lab

Static site for the OMNI platform: **OmniQC** (open research challenges),
**OmniQEC** (autonomous quantum error correction) and **OmniQST** (trustworthy
quantum software).

Live site: https://omni-qid.github.io/

## What this repo is

Plain HTML, CSS and JavaScript. **No build step, no npm, no dependencies.**
Open `index.html` in a browser and it works. Push to `main` and GitHub Pages
publishes it — usually within a minute.

```
index.html                  home
omniqc.html                 OmniQC hub — the challenge list
omniqc-reproduction.html    one challenge page (the template for new ones)
omniqec.html                OmniQEC
omniqst.html                OmniQST
people.html                 people
assets/omni.css             the whole design system — colours, type, components
assets/omni.js              shared tab behaviour (panels switch in place)
.nojekyll                   tells GitHub Pages to serve the files as-is
```

## Editing

* **Colours and type** live in `assets/omni.css`, at the top. Change them once
  and every page follows.
* **Adding a challenge**: add one entry to the `CHALLENGES` array near the
  bottom of `omniqc.html`, then copy `omniqc-reproduction.html` as its page.
* **Numbers on the challenge pages** come from the `SYSTEMS` and `PROGRESS`
  arrays in `omniqc-reproduction.html`. The charts, the leaderboard and the
  frontier are all computed from those arrays — edit the array, not the chart.

All figures currently on the site are **placeholders** and are labelled as such.

## Previewing locally

Double-clicking the files works. To serve the folder over HTTP instead
(closer to how GitHub Pages behaves):

```
cd omni_platform_v6
python3 -m http.server 8000
```

then open http://localhost:8000

## Still to add

* `assets/ntu-logo.svg` — the official NTU mark, **dark-on-light** version.
  Until the file exists the footer just shows the text; nothing breaks.
