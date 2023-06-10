---
layout: paper
title: "Quasi-Symplectic Langevin Variational Autoencoder"
image: /assets/images/papers/LVAE.png
authors: Zihao WANG, Hervé Delingette
year: 2020
shortref: Wang et al. (2020). arXiv.
journal: "arXiv."
pdf: "https://arxiv.org/pdf/2009.01675.pdf"
slides: 
supplement: 
github: 
doi: 
external_link: https://arxiv.org/pdf/2009.01675.pdf
type: statistical
---

## Abstract

The paper proposes a new inference framework called quasi-symplectic Langevin variational auto-encoder (Langevin-VAE) for improving the performance of Variational Autoencoders (VAE) in dealing with large datasets. The framework incorporates the gradients information in the inference process through the Langevin dynamic, which is a kind of Markov Chain Monte Carlo (MCMC) based method similar to Hamiltonian Variational Autoencoder (HVAE). The proposed framework uses a quasi-symplectic integrator to cope with the prohibit problem of the Hessian computing in naive Langevin flow. The paper shows the theoretical and practical effectiveness of the proposed framework with other gradient flow-based methods.

## Link to Paper

[Quasi-Symplectic Langevin Variational Autoencoder](https://arxiv.org/pdf/2009.01675.pdf)

## Citation

```
@article{wang2021quasisymplectic,
title={Quasi-Symplectic Langevin Variational Autoencoder},
author={Wang, Zihao and Delingette, Herv{'e}},
journal={arXiv preprint arXiv:2009.01675},
year={2021}
}

```