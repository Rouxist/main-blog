---
title: 'Derivative vs Differential'
excerpt: ''
coverImage: ''
date: '2026-06-22T12:15:12.000Z'
categories: [Mathematics, Calculus]
tags: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## Derivative vs Differential

---

미시경제 수업의 마지막에서 세 번째 시간에 "$dF(x)=F'(x)dx$ 는 맞는 표현이다" 라는 교수님의 한 마디가 뇌리에 박혔다.

어쨌든 [dy/dx가 분수는 아니지만](20260104_leibniz-notation), 저런 표현은 쓸 수 있는 이유는?

### Derivative

Derivative는 다음의 **극한값**이고, 이때 사용되는 $dy$ 와 $dx$ 라는 건 분리해서 생각할 수 없다. $\frac{dy}{dx}$ << 이 자체를 그냥 하나의 기호처럼 다뤄야 한다.

$\frac{dy}{dx} = \lim_{h\to0}\frac{f(x+h)-f(x)}{h}$

### Differential

이건 생각해보면 대학교 1학년 때 들은 미적분1에서 나온 어휘인 게 생각나서 교재를 찾아보니 **Linear Approximation** 파트에서 본 그것이었다.

$y=f(x)$ 가 미분 가능한 함수일 때, differential $dx$ 는 임의의 실수값이 될 수 있는 독립변수이고, differential $dy$ 는 다음과 같이 정의된다 (Stewart, 2008, p. 250):

$dy=f'(x)dx$

여기에서는 $dx$ 와 $dy$ 를 분리해서 쓰게 된다. Derivative와는 아예 별개의 다른 개념이기 때문에 가능하다.

또한 [total derivative](20260317_total-derivative-and-chain-rule)는 이 differential을 다변수 함수에 대해 정의한 것이다.

즉 $df, dy, dx$ 등이 분수가 아닌 형태로 따로 쓰인다면 그것은 **differential**을 다루는 것이다.

## Integration by substitution (u-substitution)

---

대표적인 예시로 $\frac{\ln{x}}{x}$ 를 적분할 때 $u=\ln{x}$ 를 사용해서 $du=\frac{1}{x}dx$ 를 얻고 이를 사용해서 $\int{u \ du}$ 를 적분한 기억이 난다.

여기서 $du=\frac{1}{x}dx$ 라고 쓸 수 있는 것 또한 이를 **differential** 이라 생각하면 자연스럽고 ($\frac{du}{dx}$ 를 분리한 게 아니라),

나아가 아래와 같은 **Substutition Rule** (Stewart, 2008, p. 401)에서 $g'(x)dx$ 를 $du$ 로 바꾸는 부분에 differential을 이용한 표기가 사용된 것이다.

> **Statement**
> For a differentiable function $u=g(x)$, where $f$ is continuous on range of the $g(x)$,
>
> $\int{f(g(x))g'(x)dx} = \int{f(u)du}$

여기에 $f(x)=x, u=g(x)=\ln{x}$ 를 대입하면 $\frac{\ln{x}}{x}$ 을 적분하는 예시가 된다.

<br><br>

2026.06.22

## References

---

\[1\] Stewart, J. (2008). Calculus: Early transcendentals. Thomson Brooks/Cole.
