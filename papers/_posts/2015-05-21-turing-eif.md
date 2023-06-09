---
layout: paper
title: Deductive Derivation and Turing-Computerization of Semiparametric Efficient Estimation
image: /assets/images/papers/turing-eif.png
authors: Constantine Frangakis, Tianchen Qian, zihao wang, Ivan Diaz
year: 2015
shortref: Frangakis et al. (2015). Biometrics
journal: "Biometrics"
pdf: /assets/pdfs/papers/turing-eif.pdf
supplement: /assets/pdfs/papers/turing-eif-supp.pdf
slides: /assets/pdfs/slides/turing-eif.pdf
github: http://goo.gl/Pqw7GL
doi: 10.1111/biom.12362
type: statistical
---

# Abstract

Researchers often seek robust inference for a parameter through semiparametric estimation. Efficient semiparametric
estimation currently requires theoretical derivation of the efficient influence function (EIF), which can be a challenging
and time-consuming task. If this task can be computerized, it can save dramatic human effort, which can be transferred,
for example, to the design of new studies. Although the EIF is, in principle, a derivative, simple numerical differentiation
to calculate the EIF by a computer masks the EIF’s functional dependence on the parameter of interest. For this reason,
the standard approach to obtaining the EIF relies on the theoretical construction of the space of scores under all possible
parametric submodels. This process currently depends on the correctness of conjectures about these spaces, and the correct
verification of such conjectures. The correct guessing of such conjectures, though successful in some problems, is a nondeductive
process, i.e., is not guaranteed to succeed (e.g., is not computerizable), and the verification of conjectures is generally
susceptible to mistakes. We propose a method that can deductively produce semiparametric locally efficient estimators. The
proposed method is computerizable, meaning that it does not need either conjecturing, or otherwise theoretically deriving the
functional form of the EIF, and is guaranteed to produce the desired estimates even for complex parameters. The method is
demonstrated through an example.

**Keywords**  Compatibility; Deductive procedure; Gateaux derivative; Influence function; Semiparametric estimation;
Turing machine.

# Bibtex

```
@Article{Frangakis2015a,
  author          = {Frangakis, Constantine E and Qian, Tianchen and Wu, Zhenke and Diaz, Ivan},
  title           = {Deductive derivation and turing-computerization of semiparametric efficient estimation.},
  journal         = {Biometrics},
  year            = {2015},
  volume          = {71},
  pages           = {867--874},
  month           = dec,
  issn            = {1541-0420},
  citation-subset = {IM},
  completed       = {2016-10-17},
  country         = {United States},
  doi             = {10.1111/biom.12362},
  issn-linking    = {0006-341X},
  issue           = {4},
  mid             = {NIHMS724246},
  nlm-id          = {0370625},
  owner           = {NLM},
  pmc             = {PMC4715631},
  pmid            = {26237182},
  revised         = {2018-11-13},
}
```