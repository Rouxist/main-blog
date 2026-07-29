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

---

## 2024.10.30

- Classical assumptions란? (https://m.blog.naver.com/dhkdwnddml/221478201526?recommendTrackingCode=2)
  1. X is nonstochastic n×k full-rank matrix.
  2. E(u)=0.
  3. E(uu')= \sigma^2I
- unbiasedness를 따질 때 time series는 어떻게든 E[u|x] != 0 을 뽑아내는 걸 보고 생각한 건데, cross-sectional은 weak exogeneity, time-series는 strict exogeneity인 이유 (이건 GPT가 그랬음)
