---
title: 'Markowitz Model'
excerpt: ''
coverImage: ''
date: '2026-02-06T15:55:41.000Z'
categories: [Finance]
tags: [Portfolio Optimization]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

2024년 1학기에 배웠고 대학원 첫 학기에 열심히 배운 그것

## Mean-Vairance Model (Markowitz Model)

---

### Setup

아무래도 주식 등을 거래하는 환경을 모두 수학 기호들로 표현해야 뭘 하든 할 수 있을 것이다.

- $N$ 개의 자산이 존재한다.

  - 1개는 risk-free asset이다. 이것의 수익률(스칼라 값, 상수)은 $R_f$ 라 하자.

    - <span style="color:red">risk-free asset을 여러 개 가정할 필요가 없다.</span>

  - 나머지 $N-1$ 개는 risky asset이다. 각각의 수익률은 $R_i$ 라 할 수 있다. ($i=2, \cdots, N-1$)

    - 이 $R_i$ 는 **확률변수**, 즉 스칼라 값이다.

- 둘을 합쳐 $R=(R_1, \cdots, R_{N-1})^\top$ 라는 벡터로 정의한다.

- 이 수익률 벡터의 mean을 $\mu=\mathbb{E}[R]=(\mathbb{E}[R_1], \cdots, \mathbb{E}[R_{N-1}])^\top$ 라고 정의할 수 있고, 나아가 Variance-Covariance matrix인 $\Sigma=\mathbb{E}[(R-\mu)(R-\mu)^\top]$ 역시 정의할 수 있다.

- 이쯤에서 보통 각 asset의 수익률을 이산확률변수로 둔 아래와 같은 예시가 자주 등장한다. ($N=3$)

  $$
  \begin{array}{|c|c|c|c|c|}
  \hline
      &  \text{Probability} & \text{Return on asset 1} & \text{Return on asset 2} & \text{Return on asset 3} \\
  \hline
    \text{Boom} & 0.1 & 3\% & 25\% & 30\% \\
  \hline
    \text{Neutral} & 0.7 & 3\% & 8\% & 10\% \\
  \hline
    \text{Bust} & 0.2 & 3\% & -5\% & -10\% \\
  \hline
  \end{array}
  $$

  - 이 경우 $\mu = (0.03, 0.071, 0.08)^\top$ 이고,
    $
    \Sigma =
    \begin{array}{|c|c|c|}
    \hline
    0 & 0 & 0 \\
    \hline
    0 & 0.006189 & 0.0842 \\
    \hline
    0 & 0.0842 & 0.0116 \\
    \hline
    \end{array}
    $
    &nbsp; 이다. <span style="color:gray">(계산 과정은 Appendix A1)</span>

  - <span style="color:red">Empirical하게는, 여러 시점의 데이터가 있으니 각 element $\Sigma_{ij}= \mathrm{Cov}(R_i,R_j)= \frac{1}{T}[(R_i-\mu_i)(R_j-\mu_j)] $ 와 같이 계산할 수 있지 않을까 ($R_i, R_j$ 각각이 확률변수라고 정의했지만, 데이터로 계산해볼 때는 저 각각이 여러 시점들의 그 asset의 수익률을 담은 벡터로부터 시작하지 않을까? 그러니 기댓값 계산도 가능하고)</span>

- 위와 같이 각 asset의 수익률을 이산확률변수로 정의해서 Boom/Neutral/Bust 나누기보다, 그냥 Asset $i$ 의 수익률이 확률변수 $R_i$ 이고 이 $R_i$ 의 기댓값이 $\mu_i$, 분산이 $\sigma_i^2$, $R_i$ 와 $R_j$ 의 공분산 $\sigma_{ij} = \text{Cov}(R_1, R_2)$ 라고 정의할 수도 있다.

- 이제 각 asset에 대해 budget을 얼마나 할당할지에 대한 가중치 $w=(w_1, \cdots w_N)^\top$ 벡터를 정의한다. ($\textbf{1}^\top w_i=1$).
  이 $w$ 를 결정하면, 이는 포트폴리오를 구성하는 것과 같고, 따라서 **포트폴리오의 수익률** $R_p = w^\top R$ 를 (여러 확률변수들의 linear combination 형태로) 구할 수 있다.

- 그리고 이 모든 것은 **한 timestep에 대한, 즉 cross-sectional한 얘기다.**

#### Quadratic form

최적화의 대상이 되는 식을 보기 전에...

`Quadratic form`은 모든 term의 degree가 2인 다항식. [위키](https://en.wikipedia.org/wiki/Quadratic_form)는 form이라는 어휘가 homongeenous plynomial의 다른 표현이라고 한다.

이런 2차식은 $n$ 차원의 벡터와 $n \times n$ 행렬로 표현할 수 있다.

나아가서 이를, $n$ 차원의 벡터 $\textbf{x} \in \mathbb{R}^n$ 를 입력으로 받고 실수값을 내놓는 함수 $Q: \mathbb{R}^n \rightarrow \mathbb{R}$ 와 같이 생각할 수도 있다.

예를 들어 ($N=2$ 일 때) Portfolio return의 분산은 $\sigma_p^2 = w_1^2 \sigma_1^2 + w_2^2 \sigma_2^2 + 2 w_1 w_2 \sigma_{12} = \mathbb{w}^\top \Sigma \mathbb{w}$ 로 나타낼 수 있다. ($\mathbb{w} = (w_1, w_2)^\top, \Sigma = ((\sigma_1^2, \sigma_{12}),(\sigma_{12}, \sigma_2^2))$)

### Mean-Vairance Model

처음은 가장 간단한 예시로 $N=2$, 즉 두 개의 asset이 있는 경우를 다룬다. 위의 셋업에 기초해서, 중요한 효용함수 비슷한 무언가가 나온다.

- $\max_w \mathbb{E}[R_p] - \frac{\gamma}{2} Var[R_p]$
- $\max_w \mathbb{E}[R_p] \quad \text{s.t.} \ \ \text{Var}[R_p] = \overline{\sigma}^2$
- $\min_w \text{Var}[R_p] \quad \text{s.t.} \ \ \mathbb{E}[R_p] = \overline{r}$

놀랍게도 이 셋은 결국 같은 결론으로 이어진다.

$E[R_p]$는 $\mu^\top w$ 와 같고...

### Efficient Frontier

### Capital Allocation Line

<br><br>

2026.02.06

## References

---

Bodie, Z., Kane, A. and Marcus, A.J. (2021) Investments. New York, NY: McGraw-Hill Education.

## Appendix

---

### A1. $\mu, \Sigma$ 계산

$$
\begin{aligned}
  \mu & = (0.1 \cdot 0.03 + 0.7 \cdot 0.03 + 0.2 \cdot 0.03, \ 0.1 \cdot 0.25 + 0.7 \cdot 0.08 + 0.2 \cdot (-0.05), \ 0.1 \cdot 0.3 + 0.7 \cdot 0.1 + 0.2 \cdot (-0.1) )^\top \\
  & = (0.03, 0.071, 0.08)^\top \\
\end{aligned}
$$

$\Sigma = \mathbb{E}[(R-\mu)(R-\mu)^\top] = 0.1 \cdot M_1 + 0.7 \cdot M_2 + 0.2 \cdot M_3$ 이고,

$$
\begin{aligned}
  M_1 & = (0.03 - 0.03, 0.25 - 0.071, 0.3 - 0.08)^\top(0.03 - 0.03, 0.25 - 0.071, 0.3 - 0.08) \\
  & = (0, 0.179, 0.22)^\top(0, 0.179, 0.22) \\
  & = \begin{array}{|c|c|c|}
      \hline
        0 & 0 & 0 \\
      \hline
        0 & 0.032041 & 0.03938 \\
      \hline
        0 & 0.03938 & 0.0484 \\
      \hline
      \end{array}
\end{aligned}
$$

$$
\begin{aligned}
  M_2 & = (0.03 - 0.03, 0.08 - 0.071, 0.1 - 0.08)^\top(0.03 - 0.03, 0.08 - 0.071, 0.1 - 0.08) \\
  & = (0, 0.009, 0.02)^\top(0, 0.009, 0.02) \\
  & = \begin{array}{|c|c|c|}
      \hline
        0 & 0 & 0 \\
      \hline
        0 & 0.000081 & 0.00018 \\
      \hline
        0 & 0.00018 & 0.0004 \\
      \hline
      \end{array}
\end{aligned}
$$

$$
\begin{aligned}
  M_3 & = (0.03 - 0.03, -0.05 - 0.071, -0.1 - 0.08)^\top(0.03 - 0.03, -0.05 - 0.071, -0.1 - 0.08) \\
  & = (0, -0.121, -0.18)^\top(0, -0.121, -0.18) \\
  & = \begin{array}{|c|c|c|}
      \hline
        0 & 0 & 0 \\
      \hline
        0 & 0.014641 & 0.02178 \\
      \hline
        0 & 0.02178 & 0.0324 \\
      \hline
      \end{array}
\end{aligned}
$$

따라서 계산하면,

$$
\Sigma =
\begin{array}{|c|c|c|}
\hline
  0 & 0 & 0 \\
\hline
  0 & 0.006189 & 0.0842 \\
\hline
  0 & 0.0842 & 0.0116 \\
\hline
\end{array}
$$

물론 이런 짓을 할 필요 없이 코드 딸깍으로 다 계산할 수 있다.

```Python
import numpy as np

R = np.array([
    [0.03,  0.25,  0.30],   # Boom
    [0.03,  0.08,  0.10],   # Neutral
    [0.03, -0.05, -0.10]    # Bust
])

probs = np.array([0.1, 0.7, 0.2])

mu = np.average(R, axis=0, weights=probs)
print(mu)

# Deviations from the mean
R_centered = R - mu

# Covariance matrix
Sigma = (probs[:, None] * R_centered).T @ R_centered
print(Sigma)
```

### A2.
