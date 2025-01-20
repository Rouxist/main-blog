---
title: 'Markov Chain'
excerpt: ''
coverImage: ''
date: '2025-01-20T17:19:32.000Z'
categories: [Mathematics, Probability]
tags: ['Markov Chain']
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Markov Chain

---

### Markov chain이란

: Markov property를 가지는 Discrete stochastic process

**Markov property**는 t 시점의 state는 직전 t-1 시점 state만의 영향을 받음을 의미하고, $\mathbb{P}(X_{t+1} \vert X_{t}, X_{t-1}, \cdots) = \mathbb{P}(X_{t+1} \vert X_{t})$ 와 같이 나타낸다.

### Markov matrix와 곱의 의미 (날씨 예시)

<img src="/assets/blog/posts/20250120_markov-chain/markov_chain.png" alt="markov_chain" width=600>

$$
\footnotesize

\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
=
\begin{bmatrix}
   p(\text{Sunny} \rightarrow \text{Sunny}) & p(\text{Sunny} \rightarrow \text{Rainy}) \\
   p(\text{Rainy} \rightarrow \text{Sunny}) & p(\text{Rainy} \rightarrow \text{Rainy}) \\
\end{bmatrix}

=

\begin{array}{|c|c|c|c|}
\hline
   &  & t+1 & t+1 \\
\hline
    &  & \text{Sunny} & \text{Rainy}  \\
\hline
   t & \text{Sunny} & 0.6 & 0.4 \\
\hline
   t & \text{Rainy} & 0.8 & 0.2 \\
\hline
\end{array}
$$

와 같은, $t$ 시점과 $$t+1$$ 시점의 날씨에 대한 확률을 의미를 가지는 **Transition matrix**가 있을 때,

$$
\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
=
\begin{bmatrix}
   0.68 & 0.32 \\
   0.64 & 0.36 \\
\end{bmatrix}
$$

와 같이 두 번 곱해준 것은

$$
\begin{bmatrix}
   p(\text{S} \rightarrow \text{S}) & p(\text{S} \rightarrow \text{R}) \\
   p(\text{R} \rightarrow \text{S}) & p(\text{R} \rightarrow \text{R}) \\
\end{bmatrix}
\begin{bmatrix}
   p(\text{S} \rightarrow \text{S}) & p(\text{S} \rightarrow \text{R}) \\
   p(\text{R} \rightarrow \text{S}) & p(\text{R} \rightarrow \text{R}) \\
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
   p(\text{S} \rightarrow \text{S} \rightarrow \text{S}) + p(\text{S} \rightarrow \text{R} \rightarrow \text{S}) & p(\text{S} \rightarrow \text{S} \rightarrow \text{R}) + p(\text{S} \rightarrow \text{R} \rightarrow \text{R}) \\
   p(\text{R} \rightarrow \text{S} \rightarrow \text{S}) + p(\text{R} \rightarrow \text{R} \rightarrow \text{S}) & p(\text{R} \rightarrow \text{S} \rightarrow \text{R}) + p(\text{R} \rightarrow \text{R} \rightarrow \text{R}) \\

\end{bmatrix}
$$

즉

$$
\begin{array}{|c|c|c|c|}
\hline
   &  & t+2 & t+2 \\
\hline
    &  & \text{Sunny} & \text{Rainy}  \\
\hline
   t & \text{Sunny} & 0.68 & 0.32 \\
\hline
   t & \text{Rainy} & 0.64 & 0.36 \\
\hline
\end{array}
$$

와 같이 $$t, t+1$$ 일을 거쳐 $$t+2$$ 일의 날씨에 대한 정보를 담은 행렬이 된다.

$t$ 시점의 날씨에 대한 확률이 맑음 0.3, 흐림 0.7의 확률이었을 때 위 행렬로 $$t+2$$ 시점의 날씨에 대한 확률을 구하려면

$$
[0.3, 0.7]
\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
=
[0.652, 0.348]
$$

와 같이 계산할 수 있다.

Transition matrix는 꼭 위와 같은 Markov matrix의 형태인 것은 아니고, 다양한 상태 변화를 표현할 수 있다. ([참고](https://tsyang.tistory.com/134))

## Hidden Markov Model

---

[참고](https://www.youtube.com/watch?v=HB9Nb0odPRs)

<br/><br/>

2024.02.19  
2024.07.04 (HMM)  
2025.01.20 (수식에 한글 표기 수정)
