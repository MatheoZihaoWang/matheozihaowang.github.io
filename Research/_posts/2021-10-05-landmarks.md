---
layout: paper
category: papers
title: "One-shot Learning Landmarks Detection"
image: /assets/images/papers/one_shot_learning.png
authors: Zihao Wang, Clair Vandersteen, Charles Raffaelli, Nicolas Guevara, François Patou, Hervé Delingette
year: 2021
shortref: Wang et al. (2021). MICCAI DALI.
journal: "MICCAI."
pdf: "https://inria.hal.science/hal-03024759v2/file/Camera_Ready__MICCAI2021_Workshop_Landmarks_Detection.pdf"
slides: 
supplement: 
github: 
doi: 
external_link: "https://inria.hal.science/hal-03024759v2/file/Camera_Ready__MICCAI2021_Workshop_Landmarks_Detection.pdf"
type: substantive
---

# Abstract

The paper presents a one-shot learning approach for automatic determination of 3D landmarks in a volumetric image from a single example consisting of a reference image with its landmarks. The approach first localizes a Structure Of Interest (SOI) (e.g. the cochlea in a CT image of the inner ear) which lies next to the landmarks. A 2D CNN is trained offline by generating arbitrary oriented slices of a reference image with the binary mask of the SOI. Given a target image, the location of the SOI is iteratively estimated by applying the 2D CNN on 3 orthogonal sets of slices. After aligning the orientations of the two SOI on the target and reference images, a non-rigid registration algorithm is applied to propagate the landmarks to the target image. The approach is applied on 200 CT images of the temporal bone to locate 3 cochlear landmarks and show that the positioning error is within acceptable limits.

**Key Words**: One-shot Learning, Landmarks Detection, 3D Landmarks, Volumetric Image, CNN

**Main points**

- Proposes a one-shot learning approach for automatic determination of 3D landmarks in a volumetric image from a single example.

- The approach first localizes a Structure Of Interest (SOI) which lies next to the landmarks.

- A 2D CNN is trained offline by generating arbitrary oriented slices of a reference image with the binary mask of the SOI.

- The approach is applied on 200 CT images of the temporal bone to locate 3 cochlear landmarks and show that the positioning error is within acceptable limits.
