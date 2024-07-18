---
title: 'Gauss-Markov Theorem of OLS estimator'
excerpt: ''
coverImage: ''
date: '2024-07-04T05:58:58.000Z'
categories: [Mathematics, Statistics]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Gauss-Markov theorem

---

2024.02.14

### 1. Linearity

### 2. Homoscedasticity

error term이 mean of zero, constant variance

유한한 등분산. 반대: heteroscedasticity

- Breusch-Pagan test, White's IM test (the white test)

### 3. Endogeneity

$$E(u_ix_i)=0$$

- OLS and 2SLS estimators should differ only by sampling error.
- Instrumental Variable estimator

### 4. No autocorrelation of the error terms

$$E(u_iu_j)=0$$

- Durbin-Watson test

### 5. No multicollinearity

### Optional: Normal error

- Anderson-Darling test

---

<https://jeffmacaluso.github.io/post/LinearRegressionAssumptions/>

<https://365datascience.com/tutorials/statistics-tutorials/ols-assumptions/>

<https://medium.com/analytics-vidhya/how-to-check-for-assumptions-in-a-linear-regression-a68116aef88a>
