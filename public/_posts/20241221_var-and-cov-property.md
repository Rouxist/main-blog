---
title: '분산과 공분산의 여러 성질'
excerpt: ''
coverImage: ''
date: '2024-12-21T00:35:07.000Z'
categories: [Mathematics, Probabilities]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 2024.11.13

---

$Cov(a \cdot X + c, b \cdot Y + d) = a \cdot b \cdot Cov(X, Y)$ 같은

https://zief0002.github.io/urban-memory/handouts/01-sums-expectations-covariance.pdf

그리고 GPT가 말해준, Random Vector $X$ 에 대해
$Var[a^T X] = a^T \cdot \ Cov(X) \cdot a$ 인 이유

Certainly! The expression $\text{Var}(a^T X) = a^T \cdot \text{Cov}(X) \cdot a$ is a fundamental result in statistics and linear algebra. It provides the variance of a linear transformation of a random vector $X$ by a constant vector $a$ . Here’s a detailed explanation of why this holds:

1. Linear Transformation of a Random Vector

Let’s consider a random vector $X$ with mean $\mathbb{E}[X] = \mu$ and covariance matrix $\text{Cov}(X)$ . Suppose we’re interested in the linear transformation of $X$ by a constant vector $a$ , specifically:

$Y = a^T X$,

where $Y$ is now a scalar random variable (since $a^T X$ is a scalar). We want to find the variance of $Y$ , denoted $\text{Var}(Y)$ or $\text{Var}(a^T X)$.

2. Expanding the Variance of $Y$

The variance of $Y = a^T X$ is defined as:

$\text{Var}(Y) = \mathbb{E}[(Y - \mathbb{E}[Y])^2]$.

Since $Y = a^T X$ , we can rewrite this as:

$\text{Var}(a^T X) = \mathbb{E}[(a^T X - \mathbb{E}[a^T X])^2]$.

Because a is a constant vector, we can factor it out of the expectation:

$= \mathbb{E}[(a^T (X - \mathbb{E}[X]))^2]$.

3. Using Properties of Expectation and Covariance

We can now further expand this expression:

$= \mathbb{E}[(a^T (X - \mu)) (a^T (X - \mu))]$.

This can be rewritten using matrix notation as:

$= \mathbb{E}[(a^T (X - \mu)) ((X - \mu)^T a)]$.

Since $(a^T (X - \mu))((X - \mu)^T a) = a^T (X - \mu)(X - \mu)^T a$, we have:

$\text{Var}(a^T X) = \mathbb{E}[a^T (X - \mu)(X - \mu)^T a]$.

Now, we can use the linearity of expectation. The expectation of $(X - \mu)(X - \mu)^T$ is the covariance matrix of X, \text{Cov}(X). So:

$\text{Var}(a^T X) = a^T \mathbb{E}[(X - \mu)(X - \mu)^T] a = a^T \text{Cov}(X) a$.

4. Intuitive Interpretation

Intuitively, the result tells us how the variance of each component of $X$ (and the covariances between them) contribute to the variance of the linear combination $a^T$ $X$ . The vector a scales each component of $X$ , and the covariance matrix $\text{Cov}(X)$ encodes the relationships (variances and covariances) among those components. Multiplying by $a^T$ on the left and a on the right applies this scaling appropriately.

Summary

In summary:

$\text{Var}(a^T X) = a^T \cdot \text{Cov}(X) \cdot a$

because we’re calculating the variance of a linear transformation, and the covariance matrix $\text{Cov}(X)$ captures how each component of $X$ varies and co-varies with the others. The constant vector a weights these variances and covariances accordingly to give us the total variance of $a^T X$ .

&nbsp;

2024.11.13
