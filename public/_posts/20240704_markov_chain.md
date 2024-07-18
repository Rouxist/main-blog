---
title: 'Markov Chain'
excerpt: ''
coverImage: ''
date: '2024-07-04T04:58:58.000Z'
categories: [Mathematics, etc]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Markov Chain

---

2024.02.19

### Markov chain이란

: markov property를 가지는 discrete stochastic process를 말함.

### Markov matrix의 곱의 의미 (날씨)

$$
\begin{bmatrix}
   0.6 & 0.4 \\
   0.8 & 0.2 \\
\end{bmatrix}
=
\begin{bmatrix}
   (맑음→맑음) & (맑음→흐림) \\
   (흐림→맑음) & (흐림→흐림) \\
\end{bmatrix}

=

\begin{array}{|c|c|c|}
\hline
   &  & t+1 & t+1 \\
\hline
    &  & 맑음 & 흐림  \\
\hline
   t & 맑음 & 0.6 & 0.4 \\
\hline
   t & 흐림 & 0.8 & 0.2 \\
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
   (맑음→맑음) & (맑음→흐림) \\
   (흐림→맑음) & (흐림→흐림) \\
\end{bmatrix}
\begin{bmatrix}
   (맑음→맑음) & (맑음→흐림) \\
   (흐림→맑음) & (흐림→흐림) \\
\end{bmatrix}
$$

$$
= \begin{bmatrix}
   (맑음→맑음→맑음 + 맑음→흐림→맑음) & (맑음→맑음→흐림 + 맑음→흐림→흐림) \\
   (흐림→맑음→맑음 + 흐림→흐림→맑음) & (흐림→맑음→흐림 + 흐림→흐림→흐림) \\
\end{bmatrix}
$$

즉

$$
\begin{array}{|c|c|c|}
\hline
   &  & t+2 & t+2 \\
\hline
    &  & 맑음 & 흐림  \\
\hline
   t & 맑음 & 0.68 & 0.32 \\
\hline
   t & 흐림 & 0.64 & 0.36 \\
\hline
\end{array}
$$

와 같이 $$t, t+1$$ 일을 거쳐 $$t+2$$ 일의 날씨에 대한 정보를 담은 행렬의 의미를 가진다.

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

Transition matrix는 꼭 위와 같은 Markov matrix의 형태인 것은 아니고, 다양한 상태 변화를 표현할 수 있다.[^fn1]

## Hidden Markov Model

---

2024.

https://www.youtube.com/watch?v=HB9Nb0odPRs

## References

---

[^fn1]: [https://tsyang.tistory.com/134](https://tsyang.tistory.com/134){:target=”\_blank”}
