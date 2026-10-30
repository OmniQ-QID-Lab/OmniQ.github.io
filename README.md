# OMNI

**The autonomous quantum stack: a unified AI-scientist platform for quantum computing, built at the QID Lab, Nanyang Technological University.**

🌐 **[omniq-qid-lab.github.io](https://omniq-qid-lab.github.io/)**

Whether quantum computing becomes useful is decided in three layers: the algorithms it runs, the error correction that protects them, and the software everything passes through. OMNI brings autonomous discovery to all three. Its AI scientists reproduce published results, discover codes and algorithms, build decoders and test the software stack.

This repository holds the platform's website.

---

## Three directions, one stack

| | What it does | On the site |
|---|---|---|
| **[OmniQC](https://omniq-qid-lab.github.io/omniqc.html)**<br>Algorithms · *Discover* | AI scientists for computational quantum science. They begin by reproducing published results, where every outcome can be checked, and carry that experience into open problems. | [Paper-to-result reproduction](https://omniq-qid-lab.github.io/omniqc-reproduction.html). Circuit resource frontier and quantum algorithm discovery are coming soon. |
| **[OmniQEC](https://omniq-qid-lab.github.io/omniqec.html)**<br>Error correction · *Protect* | A framework for autonomous quantum error correction. AI agents discover codes that suit real processors, build decoders accurate and fast enough to run in real time, and deploy the stack on hardware. | **Discover:** OmniQEC. **Decoders:** NTU decoder and Rethink (ICML 2026). **Deploy:** coming soon. |
| **[OmniQST](https://omniq-qid-lab.github.io/omniqst.html)**<br>Software · *Trust* | AI agents for autonomous quantum software engineering. | KQFuzz (ASE 2026, ACM SIGSOFT Distinguished Paper Award) and QuSema. |

---

## Papers

| | Paper | Venue and links |
|---|---|---|
| OmniQC | Reimagining computational quantum research with AI scientists | Manuscript, 2026. Preprint coming soon. |
| OmniQEC | OmniQEC: discovering practical quantum error-correcting codes by an AI scientist | [arXiv:2607.25865](https://arxiv.org/abs/2607.25865) |
| OmniQEC | Efficient foundation decoders for fault-tolerant quantum computing (NTU decoder) | [arXiv:2606.27119](https://arxiv.org/abs/2606.27119) · [project page](https://grahamyan.github.io/ntu-decoder/) · [code](https://github.com/GrahamYan/ntu-decoder) |
| OmniQEC | Rethink the Role of Neural Decoders in Quantum Error Correction | ICML 2026 · [arXiv:2605.12046](https://arxiv.org/abs/2605.12046) |
| OmniQST | KQFuzz: Knowledge-Guided Fuzzing for Quantum Libraries via Large Language Models | ASE 2026, ACM SIGSOFT Distinguished Paper Award · [arXiv:2607.25647](https://arxiv.org/abs/2607.25647) |
| OmniQST | QuSema: Detecting Silent Bugs in Quantum Libraries via Quantum-knowledge-enhanced Agents | [arXiv:2610.10258](https://arxiv.org/abs/2610.10258) |

### BibTeX

```bibtex
% ---------- OmniQC ----------
@unpublished{du2026reimagining,
  title  = {Reimagining computational quantum research with {AI} scientists},
  author = {Du, Yuxuan and Zhao, Hanqing and Wang, Xinbiao and Lu, Yiming and Zhang, Kaining and Tao, Dacheng},
  year   = {2026},
  note   = {Manuscript; preprint coming soon}
}

% ---------- OmniQEC ----------
@misc{yan2026omniqec,
  title         = {{OmniQEC}: discovering practical quantum error-correcting codes by an {AI} scientist},
  author        = {Yan, Ge and Li, Shanchuan and Ma, Pengyue and Zhang, Qixin and Ma, Pingchuan and Wang, Jianping and Hsieh, Min-Hsiu and Du, Yuxuan},
  year          = {2026},
  eprint        = {2607.25865},
  archivePrefix = {arXiv},
  primaryClass  = {quant-ph},
  url           = {https://arxiv.org/abs/2607.25865}
}

@misc{yan2026ntu,
  title         = {Efficient foundation decoders for fault-tolerant quantum computing},
  author        = {Yan, Ge and Li, Shanchuan and Xiao, Shiyi and Ma, Pengyue and Cao, Hanyan and Pan, Feng and Du, Yuxuan},
  year          = {2026},
  eprint        = {2606.27119},
  archivePrefix = {arXiv},
  primaryClass  = {quant-ph},
  url           = {https://arxiv.org/abs/2606.27119}
}

@inproceedings{yan2026rethink,
  title         = {Rethink the Role of Neural Decoders in Quantum Error Correction},
  author        = {Yan, Ge and Li, Shanchuan and Du, Yuxuan},
  booktitle     = {Proceedings of the 43rd International Conference on Machine Learning (ICML)},
  year          = {2026},
  eprint        = {2605.12046},
  archivePrefix = {arXiv},
  primaryClass  = {quant-ph},
  url           = {https://arxiv.org/abs/2605.12046}
}

% ---------- OmniQST ----------
@inproceedings{xia2026kqfuzz,
  title         = {{KQFuzz}: Knowledge-Guided Fuzzing for Quantum Libraries via Large Language Models},
  author        = {Xia, Fuyuan and Zhang, Qixin and Ying, Chenhao and Zhu, Haojin and Wang, Shuai and Luo, Yuan and Ma, Pingchuan and Du, Yuxuan},
  booktitle     = {Proceedings of the 41st IEEE/ACM International Conference on Automated Software Engineering (ASE)},
  year          = {2026},
  note          = {ACM SIGSOFT Distinguished Paper Award},
  eprint        = {2607.25647},
  archivePrefix = {arXiv},
  primaryClass  = {cs.SE},
  url           = {https://arxiv.org/abs/2607.25647}
}

@misc{song2026qusema,
  title         = {{QuSema}: Detecting Silent Bugs in Quantum Libraries via Quantum-knowledge-enhanced Agents},
  author        = {Song, Yujin and Zhang, Kaining and Zhang, Qixin and Wang, Shuai and Ma, Pingchuan and Du, Yuxuan},
  year          = {2026},
  eprint        = {2610.10258},
  archivePrefix = {arXiv},
  primaryClass  = {cs.SE},
  url           = {https://arxiv.org/abs/2610.10258}
}
```

---

## Who we are

OMNI is built by the **QID Lab** (Quantum Intelligence & Discovery Lab) at Nanyang Technological University, led by **Yuxuan Du**, Assistant Professor. The people behind it are on the [About us](https://omniq-qid-lab.github.io/people.html) page.

OMNI welcomes contributions from researchers at any career stage and from any institution; enquiries may be addressed to [yuxuan.du@ntu.edu.sg](mailto:yuxuan.du@ntu.edu.sg).

---

## Working on the site

Plain HTML, CSS and JavaScript. No build step, no npm, no dependencies: open `index.html` in a browser and it works. Pushing to `main` publishes it through GitHub Pages.

```
index.html                  home: the three directions
omniqc.html                 OmniQC: the fronts (one FRONTS array in the page script draws the boxes)
omniqc-reproduction.html    OmniQC: paper-to-result reproduction, the paper behind it
omniqec.html                OmniQEC: Overview · Discover · Decoders · Deploy
omniqst.html                OmniQST: Overview · KQFuzz · QuSema
people.html                 About us
assets/omni.css             the design system: tokens, type, components, motif primitives
assets/omni.js              shared tab panels; motifs run only while on screen
assets/qid-lab-*.png        lab logo and mark
assets/kqfuzz-ase2026-award.jpg
```

To preview over HTTP, closer to how GitHub Pages serves it:

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

Things worth knowing before editing:

- **Colours and type** are tokens at the top of `assets/omni.css`, so every page follows a change. Each direction has its own accent (OmniQC blue, OmniQEC olive, OmniQST magenta), derived for contrast against the paper background. If you change one, re-check its contrast rather than eyeballing it.
- **Tabs switch panels in place.** A link such as `omniqec.html#decoders` opens that panel directly.
- **Motifs are schematics, not data.** They carry no axes or numbers, and each shows one still frame under reduced motion.
- **Adding a paper** means one more panel (`<section class="platform pp">`) and tab button on its direction's page, plus its entry in the BibTeX above.
- **The two figures in OmniQEC → Decoders** (NTU decoder, Rethink) are isometric SVG generated with the Anatomy kit and pasted inline with their small live scripts.

---

## Credits

The decoder figures are drawn with the [Anatomy](https://github.com/wheresryan22/anatomy) kit, and part of its projection code is inlined in `omniqec.html`. It is used under the MIT License:

<details>
<summary>MIT License, Copyright (c) 2026 Ryan</summary>

```
MIT License

Copyright (c) 2026 Ryan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

---

## Contact

**Yuxuan Du**: [yuxuan.du@ntu.edu.sg](mailto:yuxuan.du@ntu.edu.sg)\
QID Lab, Nanyang Technological University, Singapore
