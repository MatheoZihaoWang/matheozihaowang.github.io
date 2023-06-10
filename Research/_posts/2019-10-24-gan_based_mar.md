---
layout: paper
category: papers
title: "Deep Learning based Metal Artifacts Reduction in post-operative Cochlear Implant CT Imaging"
image: /assets/images/papers/metal_artifacts_reduction.png
authors: Zihao Wang, Clair Vandersteen, Thomas Demarcy, Dan Gnansia, Charles Raffaelli, Nicolas Guevara, Hervé Delingette
year: 2019
shortref: Wang et al. (2019). MICCAI.
journal: "MICCAI."
pdf: "https://www.researchgate.net/profile/Zihao-Wang-39/publication/336470900_Deep_Learning_Based_Metal_Artifacts_Reduction_in_Post-operative_Cochlear_Implant_CT_Imaging/links/638a2b18ca2e4b239c814bf2/Deep-Learning-Based-Metal-Artifacts-Reduction-in-Post-operative-Cochlear-Implant-CT-Imaging.pdf"
slides: 
supplement: 
github: 
doi: 
external_link: https://www.researchgate.net/profile/Zihao-Wang-39/publication/336470900_Deep_Learning_Based_Metal_Artifacts_Reduction_in_Post-operative_Cochlear_Implant_CT_Imaging/links/638a2b18ca2e4b239c814bf2/Deep-Learning-Based-Metal-Artifacts-Reduction-in-Post-operative-Cochlear-Implant-CT-Imaging.pdf
type: substantive
---

# Abstract

To assess the quality of insertion of Cochlear Implants (CI) after surgery, it is important to analyze the positions of the electrodes with respect to the cochlea based on post-operative CT imaging. Yet, these images suffer from metal artifacts which often entail a difficulty to make any analysis. In this work, we propose a 3D metal artifact reduction method using convolutional neural networks for post-operative cochlear implant imaging. Our approach is based on a 3D generative adversarial network (MARGANs) to create an image with a reduction of metal artifacts. The generative model is trained on a large number of pre-operative ”artifact-free” images on which simulated metal artifacts are created. This simulation involves the segmentation of the scala tympani, the virtual insertion of electrode arrays and the simulation of beam hardening based on the Beer-Lambert law. Quantitative and qualitative evaluations compared with two classical metallic artifact reduction algorithms show the effectiveness of our method.

**Key Words**:  Deep Learning, Metal Artifacts Reduction, Cochlear Implant, CT Imaging, 3D Generative Adversarial Network, MARGANs

**Main points**

- Proposes a 3D metal artifact reduction method using convolutional neural networks for post-operative cochlear implant imaging.

- The approach is based on a 3D generative adversarial network (MARGANs) to create an image with a reduction of metal artifacts.

- The generative model is trained on a large number of pre-operative ”artifact-free” images on which simulated metal artifacts are created.

- Quantitative and qualitative evaluations compared with two classical metallic artifact reduction algorithms show the effectiveness of the method.

**Citaiton**

```
@inproceedings{10.1007/978-3-030-32226-7_14,
author = {Wang, Zihao and Vandersteen, Clair and Demarcy, Thomas and Gnansia, Dan and Raffaelli, Charles and Guevara, Nicolas and Delingette, Herv\'{e}},
title = {Deep Learning Based Metal Artifacts Reduction in Post-Operative Cochlear Implant CT Imaging},
year = {2019},
isbn = {978-3-030-32225-0},
publisher = {Springer-Verlag},
address = {Berlin, Heidelberg},
url = {https://doi.org/10.1007/978-3-030-32226-7_14},
doi = {10.1007/978-3-030-32226-7_14},
abstract = {To assess the quality of insertion of Cochlear Implants (CI) after surgery, it is important to analyze the positions of the electrodes with respect to the cochlea based on post-operative CT imaging. Yet, these images suffer from metal artifacts which often entail a difficulty to make any analysis. In this work, we propose a 3D metal artifact reduction method using convolutional neural networks for post-operative cochlear implant imaging. Our approach is based on a 3D generative adversarial network (MARGANs) to create an image with a reduction of metal artifacts. The generative model is trained on a large number of pre-operative “artifact-free” images on which simulated metal artifacts are created. This simulation involves the segmentation of the scala tympani, the virtual insertion of electrode arrays and the simulation of beam hardening based on the Beer-Lambert law.Quantitative and qualitative evaluations compared with two classical metallic artifact reduction algorithms show the effectiveness of our method.},
booktitle = {Medical Image Computing and Computer Assisted Intervention – MICCAI 2019: 22nd International Conference, Shenzhen, China, October 13–17, 2019, Proceedings, Part VI},
pages = {121–129},
numpages = {9},
keywords = {Generative adversarial networks, Metal artifacts reduction},
location = {Shenzhen, China}
}
```