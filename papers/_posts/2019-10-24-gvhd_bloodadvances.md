---
layout: paper
title: "Automated Left Atrial Segmentation in Cardiac Images Using Dual 3D U-Net and Contour Loss"
image: /assets/images/papers/la_segmentation.png
authors: Shuman Jia, Antoine Despinasse, Zihao Wang, Hervé Delingette, Xavier Pennec, Pierre Jaïs, Hubert Cochet, Maxime Sermesant
year: 2019
shortref: Jia et al. (2019). ArXiv.
journal: "ArXiv."
pdf: "https://arxiv.org/pdf/1812.02518.pdf"
slides: 
supplement: 
github: https://gitlab.inria.fr/sjia/unet3d_contour
doi: 
external_link: https://arxiv.org/pdf/1812.02518.pdf
type: substantive
---

# Abstract

The study proposes an automated, two-stage, three-dimensional U-Net with convolutional neural network for left atrial segmentation in cardiac images. The dual 3D U-Net structure consists of a first U-Net to coarsely segment and locate the left atrium, and a second U-Net to accurately segment the left atrium under higher resolution. The study introduces a Contour loss based on additional distance information to adjust the final segmentation. We randomly split the data into training datasets (80 subjects) and validation datasets (20 subjects) to train multiple models, with different augmentation setting. Experiments show that the average Dice coefficients for validation datasets are around 0.91 - 0.92, the sensitivity around 0.90-0.94 and the specificity 0.99. Compared with traditional Dice loss, models trained with Contour loss in general offer smaller Hausdorff distance with similar Dice coefficient, and have less connected components in predictions. Finally, we integrate several trained models in an ensemble prediction to segment testing datasets.

**Key Words**:  automated segmentation, left atrial segmentation, cardiac images, 3D U-Net, convolutional neural network, Contour loss

**Main points**

- Proposes an automated, two-stage, three-dimensional U-Net with convolutional neural network for left atrial segmentation in cardiac images.

- Introduces a Contour loss based on additional distance information to adjust the final segmentation.

- Shows that models trained with Contour loss offer smaller Hausdorff distance with similar Dice coefficient and have less connected components in predictions.

- Integrates several trained models in an ensemble prediction to segment testing datasets.

**Citation**

```
@InProceedings{10.1007/978-3-030-12029-0_24,
author="Jia, Shuman
and Despinasse, Antoine
and Wang, Zihao
and Delingette, Herv{\'e}
and Pennec, Xavier
and Ja{\"i}s, Pierre
and Cochet, Hubert
and Sermesant, Maxime",
title="Automatically Segmenting the Left Atrium from Cardiac Images Using Successive 3D U-Nets and a Contour Loss",
booktitle="Statistical Atlases and Computational Models of the Heart. Atrial Segmentation and LV Quantification Challenges",
year="2019",
publisher="Springer International Publishing",
address="Cham",
pages="221--229",
abstract="Radiological imaging offers effective measurement of anatomy, which is useful in disease diagnosis and assessment. Previous study [1] has shown that the left atrial wall remodeling can provide information to predict treatment outcome in atrial fibrillation. Nevertheless, the segmentation of the left atrial structures from medical images is still very time-consuming. Current advances in neural network may help creating automatic segmentation models that reduce the workload for clinicians. In this preliminary study, we propose automated, two-stage, three-dimensional U-Nets with convolutional neural network, for the challenging task of left atrial segmentation. Unlike previous two-dimensional image segmentation methods, we use 3D U-Nets to obtain the heart cavity directly in 3D. The dual 3D U-Net structure consists of, a first U-Net to coarsely segment and locate the left atrium, and a second U-Net to accurately segment the left atrium under higher resolution. In addition, we introduce a Contour loss based on additional distance information to adjust the final segmentation. We randomly split the data into training datasets (80 subjects) and validation datasets (20 subjects) to train multiple models, with different augmentation setting. Experiments show that the average Dice coefficients for validation datasets are around 0.91--0.92, the sensitivity around 0.90--0.94 and the specificity 0.99. Compared with traditional Dice loss, models trained with Contour loss in general offer smaller Hausdorff distance with similar Dice coefficient, and have less connected components in predictions. Finally, we integrate several trained models in an ensemble prediction to segment testing datasets.",
isbn="978-3-030-12029-0"
}
```