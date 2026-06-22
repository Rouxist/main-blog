---
title: 'Total derivative, Chain rule'
excerpt: ''
coverImage: ''
date: '2026-03-17T13:27:37.000Z'
categories: [Mathematics, Calculus]
tags: [Chain rule]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## Implicit Function

---

고등학교 미적분 교과서에서 처음 접했던 **음함수**이다. 정의를 찾아보면 relation으로(...) 정의된다.

$y=f(x_1, ...)$ 와 같이 <span style="color:gray">explicit하게</span> 하나의 변수가 다른 변수들로 표현되는 Explicit function과 달리, $F(x_1, x_2, ...)=0$ 처럼 특정한 하나의 변수가 그 외의 변수들로 표현되어있지 않은 형태의 함수를 Implicit function이라 한다.

### Implicit Function Theorem

<span style="color:gray">이변수함수의 경우만 살펴보면,</span> Implicit function $f(x,y)=0$ 가 정의되어 있고 $(x_0, y_0)$ 에서 미분 가능하며 $\frac{\partial f}{\partial y}(x_0, y_0) \ne 0$ 일 때, 다음을 만족하는 함수 $h$ 가 unique하게 존재한다.

- $h(x_0)=y_0$
- $x_0$ 의 neighborhood에서 $f(x, h(x))=0$

이변수함수이므로 그 의미는, 음함수에서 _기울기가 수직인 부분을 제외하고는_ $y$ 를 $x$ 에 대한 함수로 나타낼 수 있다고 생각해볼 수 있다.

- 예를 들어 $f(x, y)=x^2+y^2-1=0$ 에 대해 $h(x)=\sqrt{1-x^2}$ 를 사용해 <span style="color:gray">$y>0$ 에 대해</span> $f(x, h(x))=0$ 로 나타낼 수 있으나, $x=1,-1$ 에서는 $h(x)$ 가 정의되지 않는다.

- <span style="color:gray">무차별곡선의 MRS처럼</span> 함수의 기울기를 구해야 하는 경우라면

  $df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy= 0 \ \cdots \ \text{(*)}$

  $\Leftrightarrow \frac{dy}{dx} = -\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial y}}$

  $\Leftrightarrow \frac{dy}{dx} = - \frac{x}{y}$

  와 같이 $h'(x)$ 에 해당하는 함수를 구할 수 있다. (\*)와 같이 쓸 수 있는 이유는, $f(x,y)$ 의 값은 항상 0이니 $df=0$ 이라 둘 수 있기 때문이다.

  - 참고로 (\*)의 양변을 $dx$ 로 나누면 고등학교 미적분 교과서에서 나오던 **음함수의 미분법** 과 같은 계산이 된다.

(석사 첫 학기 미시경제 시간에) 이 음함수에 대해 배우다가, 다변수함수에 chain rule을 적용하는 계산에 대해 돌아보았다.

## Total derivative

---

<img src="/assets/blog/posts/20260317_total-derivative-and-chain-rule/total-derivative.png" alt="total-derivative" width=500>

<span style="color:gray">학부 전공을 바꾼 첫 해였던 2023년에 이런 내용을 정리했던 적이 있다.</span>

함수 $f(x_1, ...)$ 에 대해 total derivative $df$ 는 다변수함수의 변화량을 tangent plane으로 linear approximation한 값과 같다.

하나 더 나아가서 각 $x_i$ 가 다른 변수들의 함수인 경우로 넘어가면 chain rule이 필요해진다.

### Case 1: $f(x_1, x_2), \ x_1=g(t,s), \ x_2=h(t,s)$

<s>지금까지 본 것 중에는</s> 가장 general한 케이스이다. $f$ 를 $t, s$ 에 대하여 $df$ 를 구하면

$df = \frac{\partial f}{\partial t}dt + \frac{\partial f}{\partial s}ds \ \cdots \ \text{(*)}$

이다. 이중 $\frac{\partial f}{\partial t}$ 에 먼저 chain rule을 적용하여 풀어쓰려면, $f(x_1, x_2)$ 의 독립변수인 $x_1$ 과 $x_2$ 가 모두 $t$ 를 독립변수로 가지는 함수이니

$\frac{\partial f}{\partial t} = \frac{\partial f}{\partial x_1}\frac{\partial g}{\partial t} + \frac{\partial f}{\partial x_2}\frac{\partial h}{\partial t}$

와 같이 정리할 수 있다. $\frac{\partial f}{\partial s}$ 에도 동일하게 적용할 수 있고, 이를 모두 정리하여 (\*)에 대입하면

$df = (\frac{\partial f}{\partial x_1}\frac{\partial g}{\partial t} + \frac{\partial f}{\partial x_2}\frac{\partial h}{\partial t})dt + (\frac{\partial f}{\partial x_1}\frac{\partial g}{\partial s} + \frac{\partial f}{\partial x_2}\frac{\partial h}{\partial s})ds$

이다.

### Case 2: $f(x_1, x_2), \ x_1=g(t), \ x_2=h(t)$

이번에는 $x_1, x_2$ 모두 동일한 하나의 독립변수를 가지는 경우이다. 따라서 $\frac{\partial g}{\partial s} = \frac{\partial h}{\partial s} =0$ 가 되므로

$df = (\frac{\partial f}{\partial x_1}\frac{\partial g}{\partial t} + \frac{\partial f}{\partial x_2}\frac{\partial h}{\partial t})dt$

이다. 양변을 $dt$ 로 나누면 $\frac{df}{dt}$ 를 간편히 구할 수 있다. 이를 사용해서 미시경제 수업에서 나온 예시가

#### Example: Directional derivative

이변수함수 $f(x_1, x_2)$ 의 방향도함수를 구하는 것이다.

방향도함수를 구할 point $\textbf{a}=(a_1, a_2)$, 방향을 나타내는 벡터 $\textbf{v}=(v_1, v_2)$ 가 주어졌을 때, 함수 $h(t) = f(\textbf{a} + t \textbf{v})$ 를 정의하여 방향도함수를 구할 수 있다.

$h(t) = f(a_1 + t v_1, a_2 + t v_2)$ 와 같은데, 이때 $x_i = a_i + t v_i \ (i=1,2)$ 이다. 이제 $h'(t)$ 를 구하면

$$
\begin{aligned}
  dh &= (\frac{\partial f}{\partial x_1}\frac{\partial g}{\partial t} + \frac{\partial f}{\partial x_2}\frac{\partial h}{\partial t})dt \\
  \frac{dh}{dt} &= \frac{\partial f}{\partial x_1}\frac{\partial x_1}{\partial t} + \frac{\partial f}{\partial x_2}\frac{\partial x_2}{\partial t} \\
  &= \frac{\partial f}{\partial x_1} v_1 + \frac{\partial f}{\partial x_2} v_2 \\
\end{aligned}
$$

이고, 이는 방향도함수를 구하는 공식인 $\nabla f \cdot \textbf{v}$ 와 같다.

### Case 3: $f(x_1, x_2)$

$x_1=g(t)=t, x_2=h(s)=s$ 인 것이라고 생각하면, $\frac{\partial g}{\partial s}=\frac{\partial h}{\partial t}=0$ 이므로

$df = (\frac{\partial f}{\partial x_1}\frac{\partial g}{\partial t})dt + (\frac{\partial f}{\partial x_2}\frac{\partial h}{\partial s})ds$

이다. $\ \frac{\partial g}{\partial t}=\frac{\partial h}{\partial s}=1$ 이고, $\ dx_1=dt, \ dx_2=s$ 이니 모두 바꿔주면

$df = \frac{\partial f}{\partial x_1} dx_1 + \frac{\partial f}{x_2} dx_2$

이 된다.

재무론 수업에서는 $x_1, x_2$ 가 각각 risky asset에 투자하는 비중, endowment를 의미하는 예시를 보았다.

<br><br>

2026.03.17

## References

---
