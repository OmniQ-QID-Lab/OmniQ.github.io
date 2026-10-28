# OMNI

**An open research platform for quantum computing, built at the QID Lab, Nanyang Technological University.**

🌐 **[omni-qid.github.io](https://omni-qid.github.io/)**

Quantum computing has no shortage of open questions, or of claimed answers. What it lacks is a place where a claim is checked the same way for everyone. OMNI is an attempt at that place: open challenges with declared objectives, a verification harness that runs on our side, and public records that only move when somebody actually beats them.

This repository holds the platform's website. The research itself lives in the three directions below.

---

## Three directions, one stack

| | What it does | Status |
|---|---|---|
| **OmniQC** | Turns research questions into challenges anyone can enter — a reproduction benchmark for AI scientists, and open problems in quantum algorithm discovery. | Benchmark active; submissions opening |
| **OmniQEC** | Quantum error correction as a full-stack optimisation problem: code search, syndrome circuits, decoders, noise models, hardware targets — measured end to end rather than layer by layer. | Research preview |
| **OmniQST** | Autonomous testing, verification and diagnosis for quantum libraries, compilers and simulators. Built on KQFuzz, expanding toward self-improving verification. | KQFuzz released; platform expanding |

They are complementary rather than separate: discovery needs reproducible results (OmniQC), fault tolerance needs a stack you can measure (OmniQEC), and neither means anything if the software underneath silently lies (OmniQST).

---

## Who runs this

**QID Lab** (Quantum Intelligence Discovery Lab) at NTU, led by **Yuxuan Du**, Assistant Professor. The lab works across quantum intelligence, autonomous scientific discovery, quantum error correction and trustworthy quantum software — postdocs, PhD and research students. The full team is on the [People page](https://omni-qid.github.io/people.html).

Our own systems compete on OmniQC under the same rules as everyone else's. That is the point: a benchmark its authors are exempt from is not a benchmark.

---

## Taking part

The platform is in **research preview** — some channels below are open now, others are opening. Nothing here requires permission to try.

### Enter a challenge

Each OmniQC challenge has its own page with the objective, the validity checks, the metric and the current record. Start with the [Paper Reproduction Benchmark](https://omni-qid.github.io/omniqc-reproduction.html): an agent is handed a paper and a compute budget, and must return a run that a stranger can execute and that lands on the paper's reported numbers.

Any system qualifies — an agent framework, a fine-tuned model, a human-in-the-loop pipeline — as long as everything it spends is metered. The submission channel is not open yet; until it is, write to us and we will add you when the first split is released.

### Propose a paper for the benchmark

The benchmark is only as good as the papers in it. A paper qualifies if its numbers can be recovered from the text alone: no private data, no hardware nobody else can book, no step that exists only in a lab notebook. Send the paper plus the quantities a reproduction must recover and the tolerance each must land inside.

### Propose a challenge

If you have a question with a checkable objective — a resource count to minimise, a bound to tighten, a construction to find — it can run as an OmniQC challenge. You supply the objective and a scoring function; we supply the harness, the sandbox and the public frontier.

### Improve this site

Issues and pull requests are welcome: broken links, unclear wording, accessibility problems, rendering bugs on your browser. The site is plain HTML, CSS and JavaScript with no build step, so a fix is usually a one-file edit. See *Working on the site* below.

### Collaborate or join the lab

We are interested in collaborations across quantum error correction, quantum machine learning, AI for science, and software engineering for quantum systems. Prospective students and postdocs are welcome to get in touch.

**All of the above:** [yuxuan.du@ntu.edu.sg](mailto:yuxuan.du@ntu.edu.sg)

---

## A note on the numbers

**Every figure currently on this site is a placeholder**, and the pages say so where they appear. Leaderboards, frontier plots and records are wired to real data structures and will show real verified results once the harness is public — but nothing displayed today is a published result. Please do not cite it.

---

## Working on the site

Plain HTML, CSS and JavaScript. No build step, no npm, no dependencies — open `index.html` in a browser and it works. Pushing to `main` publishes it through GitHub Pages.

```
index.html                  home
omniqc.html                 OmniQC hub — the challenge list
omniqc-reproduction.html    one challenge page (the template for new ones)
omniqec.html                OmniQEC
omniqst.html                OmniQST
people.html                 the lab
assets/omni.css             the design system — colours, type, components
assets/omni.js              shared tab behaviour
```

To preview over HTTP, closer to how GitHub Pages serves it:

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

Three things worth knowing before editing:

- **Colours and type** are tokens at the top of `assets/omni.css`. Change them once and every page follows. The accents are derived for contrast against the paper background — if you change one, re-check it rather than eyeballing it.
- **Adding a challenge** is one entry in the `CHALLENGES` array in `omniqc.html`, plus a copy of `omniqc-reproduction.html` as its page.
- **Charts are computed, not drawn.** The frontier, the records and the leaderboards all derive from the `SYSTEMS` and `PROGRESS` arrays in the page script. Edit the arrays; never hand-place a point.

---

## Contact

**Yuxuan Du** — [yuxuan.du@ntu.edu.sg](mailto:yuxuan.du@ntu.edu.sg)
QID Lab, Nanyang Technological University, Singapore
