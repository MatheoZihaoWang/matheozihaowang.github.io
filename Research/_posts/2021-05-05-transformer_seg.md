---
layout: paper
category: papers
title: "Attention for Image Registration (AiR): an unsupervised Transformer approach"
image: /assets/images/papers/air_transformer.png
authors: Zihao Wang, Hervé Delingette
year: 2023
shortref: Wang and Delingette (2023). arXiv.
journal: "arXiv."
pdf: "https://arxiv.org/pdf/2105.02282.pdf"
slides: 
supplement: 
github: "https://github.com/MatheoZihaoWang/AIR_Transformer_Image_Registration"
doi: 
external_link: "https://arxiv.org/pdf/2105.02282.pdf"
type: substantive
---

# Abstract

Image registration, a crucial task in signal processing, often encounters issues with stability and efficiency. Non-learning registration approaches rely on optimizing similarity metrics between fixed and moving images, which can be expensive in terms of time and space complexity. This problem can be exacerbated when the images are large or there are significant deformations between them. Recently, deep learning, specifically convolutional neural network (CNN)-based methods, have been explored as an effective solution to the weaknesses of non-learning approaches. To further advance learning approaches in image registration, we introduce an attention mechanism in the deformable image registration problem. Our proposed approach is based on a Transformer framework called AiR, which can be efficiently trained on GPGPU devices. We treat the image registration problem as a language translation task and use the Transformer to learn the deformation field. The method learns an unsupervised generated deformation map and is tested on two benchmark datasets. In summary, our approach shows promising effectiveness in addressing stability and efficiency issues in image registration tasks.

**Key Words**: Transformer, Images Registration, Deep Learning

**Main points**

- Introduces an attention mechanism in the deformable image registration problem.

- The proposed approach is based on a Transformer framework called AiR, which can be efficiently trained on GPGPU devices.

- The method learns an unsupervised generated deformation map and is tested on two benchmark datasets.

- Shows promising effectiveness in addressing stability and efficiency issues in image registration tasks.

**Citation**

```
@misc{wang2023attention,
      title={Attention for Image Registration (AiR): an unsupervised Transformer approach}, 
      author={Zihao Wang and Hervé Delingette},
      year={2023},
      eprint={2105.02282},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}
```