---
layout: paper
category: papers
title: "Patch-based Registration with Pure MLP and Transformer"
image: /assets/images/papers/patch_based_registration.png
authors: Zihao Wang, Yutong Yang, Shuman Jia, Hervé Delingette, Nicholas Ayache, Xavier Pennec
year: 2023
shortref: Wang et al. (2023). ArXiv.
journal: "ArXiv."
pdf: "https://arxiv.org/pdf/2105.01601.pdf"
slides: 
supplement: 
github: 
doi: 
external_link: "https://arxiv.org/pdf/2105.01601.pdf"
type: substantive
---

# Abstract

We propose three novel patch-based registration architectures using only MLPs and Transformers. The authors demonstrate that their single and multi-scale models perform similarly and even better to CNN-based registration frameworks on a large echocardiography dataset. The three proposed models demonstrate similar performance among themselves. The experiments show that patch-based models using MLP/Transformer can perform 2D medical image registration. The authors conclude that the success of Transformer in vision tasks cannot be simply attributed to the attention mechanism, at least in image registration tasks. Future works will concentrate on the application of MLP/Transformer in time-series motion tracking.

**Key Words**:  Patch-based registration, MLP, Transformer, Image registration, Echocardiography dataset

**Main points**

- Proposes three novel patch-based registration architectures using only MLPs and Transformers.

- Demonstrates that their single and multi-scale models perform similarly and even better to CNN-based registration frameworks on a large echocardiography dataset.

- Shows that patch-based models using MLP/Transformer can perform 2D medical image registration.

- Concludes that the success of Transformer in vision tasks cannot be simply attributed to the attention mechanism, at least in image registration tasks.

**Citation**

```
@ARTICLE{Wang2022-zk,
  title     = "Unsupervised echocardiography registration through patch-based
               {MLPs} and transformers",
  booktitle = "Statistical Atlases and Computational Models of the Heart.
               Regular and {CMRxMotion} Challenge Papers",
  author    = "Wang, Zihao and Yang, Yingyu and Sermesant, Maxime and
               Delingette, Herv{\'e}",
  publisher = "Springer Nature Switzerland",
  pages     = "168--178",
  series    = "Lecture notes in computer science",
  year      =  2022,
  address   = "Cham",
}
```
