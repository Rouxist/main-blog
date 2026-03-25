---
title: 'UMP, Langragian multiplier, KKT Conditions'
excerpt: ''
coverImage: ''
date: '2026-03-25T15:00:12.000Z'
categories: [Economics, Microeconomics]
tags: [Maximization, Concavity, Hessian matrix, Bordered hessian matrix]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

미시경제 과목의 첫 3주 정도는 사실상 Optimization만 다뤄졌다. 전반적으로 처음 들어보는 내용은 아니었는데, 세세하게 보면 헷갈리는 지점들이 자주 생겨서 ([다변수 함수의 chain rule](20260317_total-derivative-and-chain-rule)도 그중 하나였고) 한 번에 정리했다.

(Local max / Local constrained max / Global max / Global constrained max가 혼재되니까 좀 힘들었다.)

## Utility Maximization Problem (UMP)

---

일관성을 위해 모두 Maximization을 기준으로 살펴본다.

### Necessary / Sufficient condition

일단 univariate 함수 $f(x)$ 와 어떤 point $x_0$ 에 대해

- FOC $f'(x_0)=0$ 를 만족하는 것은, &nbsp; $x_0$ 가 local max가 되는 것의 **Necessary condition**이다.

  - <span style="color:gray">기울기가 0이어도 그게 local min일 수도 있다.</span>

- FOC와 SOC $f''(x_0)<0$ 까지 _모두_ 만족하면 이것은, &nbsp; $x_0$ 가 local max가 되는 것의 **Sufficient conditon**이다.

### Local / Global max

- 최댓값이 나올 것 같은 어떤 point $x_0$ 를 선택한 후 이 point가 FOC ($f'(x_0)=0$), SOC ($f''(x_0)<0$)을 잘 만족하면, 그건 일단 **Local max** 라고 한다.

  - $x_0$ _주변_ 에 대하여 검증한 것이기 때문이다.

- $x_0$ 가 **Global max** 가 되려면 일단 FOC $f'(x_0)=0$ 와 함께, $f''(x_0) \leq 0 \quad \forall \ x$ 도 만족해야 한다.

  - 이 부등호는 strict 하지 않다.

  - 둘을 모두 만족하면 이건 Sufficient condition이다.

### Strict max

- **Strict** local max 여부는 그 최댓값의 _uniqueness_ 에 따라 달라진다. 함수 $f(x)$ 에 그 최댓값이 나타나는 지점이 오직 $x=x_0$ 뿐이라면 Strict local max라고 할 수 있다.

### Concavity of fucntion

Concavity에 대해 따지게 되는 대상이 세 가지가 나오는데 <span style="color:gray">(function, set, preference)</span> 그중 함수의 concavity에 대한 정의들이다.

#### Concave function

수업에서 사용한 정의는, $C^2$ 인 함수 $f:\mathbb{R}^2 \rightarrow \mathbb{R}$ 에 대해

$f(x)$ 가 concave $\Leftrightarrow$ Hessian matrix $D^2 f(x)$ 가 모든 $x \in X$ 에 대해 **negative semi definite**

이라는 것이다. 또한 후자는

$\det\bigl(f_{11}(x)\bigr) \leq 0 \quad \forall x \;\land\;
\det\bigl(f_{22}(x)\bigr) \leq 0 \quad \forall x \;\land\;
\det\bigl(D^2 f(x)\bigr) \geq 0 \quad \forall x$

와 동치이다.

그 외의 정의로는 $f(tx + (1-t)y) \ \geq \ t f(x) + (1-t) f(y) \ \text{for any} \ t \in (0,1)$ 도 있다.

#### Strictly Concave function

위 정의에서 부등호에 등호를 제외하면 Strictly concave한 함수가 된다.

#### Quasi-concave function

수업에서는

$f(x)$ 가 quasi-concave $\Leftrightarrow$ $\{x: f(x) \geq c\} \text{(upper contour set) is convex for all} \ c$

로 정의했다.

<span style="color:gray">이러면 이제 set $S \subseteq \mathbb{R}^n$이 convex하다는 건 또 뭐냐:

<span style="color:gray">임의의 두 point $x, y \in S$ 와 임의이 $\lambda \in [0,1]$ 에 대해 $\lambda x + (1-\lambda)y \in S$ 임을 말한다.</span>

그 외의 정의로는 $f(tx + (1-t)y) \ \geq \ \text{min} \{ f(x), f(y) \} \ \text{for any} \ t \in (0,1)$ 도 있다.

이를 만족하는 효용함수로는 **Leontief utility function** $u(x_1, x_2) = \text{min}\{x_1, x_2\}$ 을 예로 들 수 있다.

#### Strictly Quasi-concave function

마찬가지로, 위 정의에 있는 부등호에서 등호를 제외하면 된다.

### Unconstrained max

- **Strict local max**
  - FOC: $\nabla f(x_0) = 0$, SOC: hesisan is negative definite **at $x_0$ **
  - 이를 만족하는 $x_0$ 은 **strict local max**가 된다.
- **Global max (condition)**
  - 주어진 함수가 **concave function**이면 FOC를 만족시키는 $x_0$ 이 **global max**임.

이걸 단계별로 살펴보면, (어떤 point $x_0$ 에서 FOC는 만족한다 가정하고)

1. Hesisan matrix가 **$x_0$ 에서**

- Negative semi definite: 이러면 딱히 확정되는 것이 없다. $x_0$ 가 saddle point여도 $D^2f(x_0)$ 은 semi definite일 수 있다.
- Negative definite: $f(x_0)$ 은 **Strict local max**가 된다.

2. Hesisan matrix가 **모든 $x$ 에 대해**

- Negative semi definite: 이는 utility function이 concave라는 것을 의미하니 $x_0$ 는 **Global max**임을 알 수 있다.
- Negative definite: 이제는 $x_0$ 는 **Strict global max**이 된다.

### Constrained max

이제 constraint가 조건으로 붙기 시작한다.

#### Equality condition

$$
\begin{aligned}
\max_{\substack{x_1, x_2}}  \quad & f(x_1, x_2) \\
\text{s.t.} \quad
& p_1 x_1 + p_2 x_2 = W \\
\end{aligned}
$$

와 같은 형태의 문제를 다룬다. 이를 푸는 **Lagrangian multiplier**를 학부 미적분학2 시간에 처음 배울 때,

문제를 푸는 직관은 특정 point에서 $f$ 와 $g$ 의 gradient가 같은 방향 즉 상수배가 돼야 하니 이를 식으로 쓰면

$\nabla f(x_1, x_2) = \lambda \nabla g(x_1, x_2)$

이 된다고(minimization은 부호만 반대) 배웠던 기억이 난다. <span style="color:gray">여기에 GPT의 설명을 좀 더해서</span> 항들을 좌변으로 몰아버린 후 gradient 연산자를 묶어버리면 $f - \lambda g$ 가 등장한다. 이는

$\mathcal{L}(x_1, x_2, \lambda) = f(x_1, x_2) - \lambda g(x_1, x_2)$

**Lagrangian function**에 나타나는 $f - \lambda g$ 와 같은 형태이다. 이제 $\frac{\partial \mathcal{L}}{\partial x_1}=0, \frac{\partial \mathcal{L}}{\partial x_2}=0, \frac{\partial \mathcal{L}}{\partial \lambda}=0$ 을 풀어주면 된다.

Lagrangian multiplier는 '2-variable, 1 constraint problem을 ($\lambda$ 를 추가함으로써) 3-variable unconstrained problem으로 바꾸는 것'이라는 교수님의 설명이 기억에 남는다.

<br/>

그리고 이런 equality constraint 문제는 `Bordered hessian matrix` 를 사용해서 풀 수도 있다.

$x^*$ 를 잘 찾아서 $\nabla f(x^*) = \lambda^* \nabla g(x^*), \ \nabla f(x^*) \ne 0$ 을 만족하고

Bordered hessian matrix에 대해

$det \begin{pmatrix}
0 & f_1(x^*) & f_2(x^*)\\
f_1(x^*) & f_{11}(x^*) & f_{12}(x^*)\\
f_2(x^*) & f_{21}(x^*) & f_{22}(x^*)
\end{pmatrix}>0$ 이면, $x^*$ 는 **Strict local constrained max**이다.

#### Inequality condition

$$
\begin{aligned}
\max_{\substack{x_1, x_2}}  \quad & f(x_1, x_2) \\
\text{s.t.} \quad
& p_1 x_1 + p_2 x_2 \leq W \\
& x_1 \geq 0, \ x_2 \geq 0
\end{aligned}
$$

이러한 부등식 제약식이 있는 문제의 경우 **Khun-Tucker lagrangian multiplier** 를 이용하여 해결한다.

일관성을 위해 모든 부등식은 $g(\mathbb{x}) \leq 0$ 형태로 나타내고, **Lagrangian function**을 다음과 같이 써낸다.

$\mathcal{L}(x_1, x_2, \lambda, \mu_1, \mu_2) = f(x_1, x_2) - \lambda g_1(x_1, x_2) - \mu_1 g_1(x_1, x_2) - \mu_2 g_3(x_1, x_2)$

<span style="color:gray">위 예시에서는, $\ g_1(x_1, x_2) = p_1 x_1 + p_2 x_2 - W \leq 0, \quad g_2(x_1, x_2) = -x_1 \leq 0, \quad g_3(x_1, x_2) = -x_2 \leq 0$</span>

그리고 주어진 조건들에 따라 함수의 domain ($X_1 \times X_2$)을 여러 케이스로 잘 나눈 후, 그중 아래 4개의 **Khun-Tucker Condition** 을 만족하는 경우에서 이 최적화 조건의 해를 찾아내면 된다.

1. Gradient condition: $\frac{\partial \mathcal{L}}{\partial x_1} = 0, \quad \frac{\partial \mathcal{L}}{\partial x_2} = 0$

2. Feasibility: $p_1 x_1 + p_2 x_2 \leq W, \quad x_1 \geq 0, \quad x_2 \geq 0$

3. Non-negativity: $\lambda, \mu_1, \mu_2 \geq 0$

4. **Complementary Slackness Condition**

- $\lambda(p_1 x_1 + p_2 x_2 - W )=0$
- $\mu_1 x_1=0$
- $\mu_2 x_2=0$

<br><br>

2026.03.25

## References

---
