---
title: 'Independence, Inequality'
excerpt: ''
coverImage: ''
date: '2026-03-25T16:32:55.000Z'
categories: [Mathematics, Probability]
tags: [Independence, Inequality]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## Independence

---

### Definition (Independence of **Events**)

> **Definition**  
> Events $A, B$ 가 다음을 만족하면 `independent` 하다고 한다.
>
> $P(A \cap B) = P(A) P(B)$

- 물론 $P(B) > 0$ 이면 $P(A \vert B) = P(A)$ 와 같이 표현할 수도 있다.
- $A \ \text{independent of} \ B \ \Leftrightarrow \ B \ \text{independent of} \ A$
- 2 fair coin flips 예시($\Omega = \{\text{HH}, \text{HT},\text{TH},\text{TT}\}, \ P(\{ \omega \})$)로 본다면, $A = \{\text{first flip is } H\}$ 와 $B = \{\text{second flip is } H\}$ 는 독립이다.

### Properties of Independent Events

$A, B$ 가 independent events라면 $A, B^{\complement}$, $A^{\complement}, B$, $A^{\complement}, B^{\complement}$ 도 독립이다.

- $A$ 가 일어나는 사건이 $B$ 가 일어나는 사건에 대해 정보를 주지 않는다면, $B$ 가 일어나지 않는 사건에 대해서도 정보를 주지 못한다... 는 식으로도 생각해볼 수 있다.

### Definition (Mutual Independence, Pairwise Independence)

> **Definition**  
> Events $A_1, ..., A_n$ 이 모든 subset $I \subset \{ 1, ..., n \}$ 에 대해 다음을 만족하면 `mutually independent` 하다고 한다.
>
> $P \bigl( \cap_{i \in I} A_i \bigr) = \prod P(A_i)$

- 총 $2^n -n -1$ 개의 등식이 필요해진다.

> **Definition**  
> Events $A_1, ..., A_n$ 이 다음을 만족하면 `pairwise independent` 하다고 한다.
>
> $P(A_i \cap A_j) = P(A_i) P(A_j) \ \text{for all} \ i \ne j$

`mutual indepenence` $\Rightarrow$ `pairwise indepenence` 이지만

`pairwise indepenence` $\nRightarrow$ `mutual indepenence` 이다.

예시로는 2 fair coin flips에 대해 위의 $A, B$ 와 $C = \{\text{exactly one } H\}$ 에 대해 $A, B, C$ 가 있다.

### Definition (Independence of **Random Variables**)

> **Definition**  
> Random Variables $X, Y$ 가 모든 $A, B \in \mathcal{B}(\mathbb{R})$ 에 대해 다음을 만족하면 `independent` 하다고 한다.
>
> $P(X \in A, Y \in B) = P(X \in A) P(Y \in B)$

- 이는 events $\{ X \in A \}$ 와 $\{ Y \in B \}$ 가 독립이라는 것과 동치이다.
- 또는 $X, Y$ 의 **CDF** $F_X, F_Y$ 와 **joint CDF** $F_{X,Y}$ 를 이용해, $F_{X,Y}(x,y) = F_X(x) F_Y(y) \ \text{for all} \ x,y \in \mathbb{R}$ 이라고 random variable의 독립을 정의할 수도 있다.
- **PMF**나 **PDF**를 이용해서도 이렇게 정의할 수 있다.

  - 예를 들어 **Bivariate standard normal**은 joint PDF가 standard normal의 PDF 두 개를 곱한 것과 같다. ($f_{X,Y}=f_X(x) \cdot f_Y(y)=\frac{1}{2 \pi} e^{-\frac{x^2 + y^2}{2}}$)
  - (수업 유관) 또한 위의 joint PDF는 표준정규분포를 따르는 두 random variable의 correlation이 0인 경우와 같다고 한다. 이 경우 PDF의 countour는 원형으로 나온다.
  - (수업 유관) 문득 드는 궁금증은, 그럼 <span style="color:gray">numpy같은 라이브러리는</span> correlation이 non-negative인 경우에 대해 joint PDF를 어떻게 만들어서 샘플링을 하는 걸까? GPT에 물어보니 variance-covariance matrix $\Sigma$ 에 대해 다음과 같이 joint PDF를 만들 수 있다고 한다. 이 경우 PDF의 countour는 원형이 아닌 타원형이 될 것이다.

  $$
  f(x,y) = \frac{1}{2\pi \sqrt{\det(\Sigma)}}
  \exp\left(-\frac{1}{2}
  \begin{pmatrix} x & y \end{pmatrix}
  \Sigma^{-1}
  \begin{pmatrix} x \\ y \end{pmatrix}
  \right)
  $$

#### Consequences of Independence

- **Product of Expectations**: 두 random variable $X, Y$ 가 독립이고 $\mathbb{E}[\vert X \vert] \mathbb{E}[\vert Y \vert] < \infty$ 이면, $\mathbb{E}[XY] = \mathbb{E}[X] \mathbb{E}[Y]$ 이다.
  학부에서 아마 확통 연습 문제를 풀던 어느날 이걸 보면서 '독립이라고 해도 이게 되나...?' 했던 기억이 난다.
- 어쩌면 이 파트에서 가장 중요한 사실은 역시 $\text{Cov}(X, Y) = 0 \nRightarrow \ \text{independent}$ 라는 사실이다.

### Definition (Mutual Independence)

> **Definition**  
> Random Variables $X_1, ..., X_n$ 들이 모든 $A_1, ..., A_n \in \mathcal{B}(\mathbb{R})$ 에 대해 다음을 만족하면 `mutually independent` 하다고 한다.
>
> $P(X_1 \in A_1, ..., X_n \in A_n) = \prod_{i=1}^{n}{P(X_i \in A_i)}$

- 어디서든 등장하는 **i.i.d.** 가정에서 말하는 'independent' 역시 `mutually independent` 함을 의미한다.

### Theorem (Functions of Independent **Random Variables**)

독립인 random variable $X, Y$ 에 대해 함수 $g, h: \mathbb{R} \rightarrow \mathbb{R}$ 가 모두 Borel measurable이면, $g(X)$ 와 $h(Y)$ 는 독립이다.

- 따라서 $X^2, Y^2$ 도 독립, $e^X, \sin(Y)$ 도 독립, $\max{X,0}, \vert Y \vert$ 도 독립이다.

## Joint Distribution

---

<s>생각해보니 Joint distribution이 아직 정의되지 않았다.</s>

### Joint Distribution

> **Theorem**  
> Random variable $X, Y$ 의 `joint cumulative distribution function`은 다음과 같다.  
> $F_{X,Y}(x,y) = P(X \leq x, Y \leq y)$

- Property로 Non-deacreasing, Pright-continuous 등이 있다.

### Marginal Distribution

> **Theorem**  
> `marginal cumulative distribution function`은 다음과 같이 구할 수 있다.  
> $F_X(x) = \lim_{y \to \infty} F_{X,Y}(x,y) = P(X \leq x)$

### Conditional Distribution

> **Theorem**  
> Continuous random variable $X, Y$ 에 대해  
> $f_{Y \vert X}(y \vert x) = \frac{F_{X,Y}(x,y)}{f_X(x)}$ 이다.

## Basic tail bound

---

### Markov's Inequality

> **Theorem**  
> Non-negative random variable $X \geq 0$ 에 대하여, 임의의 $a > 0$ 에 대해 $P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}$ 이다.

- Non-negative random variable이어야 하고, $\mathbb{E}[X]$ 정도는 알고 있어야 적용 가능하다.

### Chevyshev's Inequality

> **Theorem**  
> Mean $\mu$, variance $\sigma^2 < \infty$ 를 가지는 random variable $X$ 에 대하여, 임의의 $k > 0$ 에 대해 $P(\vert X - \mu \vert \geq k) \leq \frac{\sigma^2}{k^2}$ 이다.

- Random variable이 유한한 분산을 가짐을 알고, $\sigma$ 값도 아는 경우에 적용 가능하다.
- 증명은 $Y = (X - \mu)^2$ 을 정의하여 Markov's Inequality를 적용하면 된다.
- 절댓값 항이 평균으로부터 몇 표준편차만큼 떨어져 있는지에 관심을 둔다면, $t=\frac{k}{\sigma}$ 를 정의하여  
  $P(\vert X - \mu \vert \geq t \sigma) \leq \frac{1}{t^2}$  
  로도 바꿀 수 있다.
  - 다만 정규분포를 따르는 random variable이 평균으로부터 n시그마만큼 떨어져 있을 확률을 구하면 그게 훨씬 타이트하다.
- **Weak LLN**의 증명에 사용된다.

## Moment Inequality

---

### Cauchy-Schwarz Inequality

> **Theorem**  
> 두 random variable $X, Y$ 가 각각 finite second moment를 가질 때, $(\mathbb{E}[XY])^2 \leq \mathbb{E}[X^2] \mathbb{E}[Y^2]$ 이다.  
> 등호가 성립할 필요충분조건은, 어떠한 상수 $c$ 에 대해 almost surely $X=cY$ 인 것이다.

### Hölder's Inequality

> **Theorem**  
> $p, q > 1$ 가 $\frac{1}{p} + \frac{1}{q} = 1$ 을 만족할 때, random variable $X, Y$ 에 대하여 $\mathbb{E}[\vert XY \vert] \leq (\mathbb{E}[\vert X \vert^p])^{\frac{1}{p}} (\mathbb{E}[\vert Y \vert^q])^{\frac{1}{q}}$ 이다.  
> 등호가 성립할 필요충분조건은, 어떠한 상수 $c$ 에 대해 almost surely $X=cY$ 인 것이다.

- Cauchy-Schwarz Inequality의 일반화 버전. $p=q=2$ 이면 Cauchy-Schwarz Inequality와 같다.

### Minkowski Inequality

> **Theorem**  
> $p \geq 1$ 에 대하여 $(\mathbb{E}[\vert X + Y \vert ^2])^{\frac{1}{p}} \leq (\mathbb{E}[\vert X \vert^p])^{\frac{1}{p}} + (\mathbb{E}[\vert Y \vert^p])^{\frac{1}{p}}$ 이다.

- $L^p$ norm의 **Triangle inequality**

## Exponential Inequality

---

위의 부등식들에 비해 훨씬 강력한 bound를 설정할 수 있다.

### Chernoff Bound

> **Theorem**  
> 임의의 random variable $X$ 와 $t > 0$ 에 대하여, $P(X \geq a) \leq \inf_{t > 0} \frac{\mathbb{E}[e^{tX}]}{e^{ta}}$ 이다.

- 어떤 random variable이든 적용이 가능하나, $\mathbb{E}[e^{tX}]$ 즉 **MGF**를 다룰 수 있는 경우에 적용 가능하다.

### Hoeffding's Inequality

> **Theorem**  
> Independent Random Variables $X_1, ..., X_n$ 이 almost surly $X_i \in [a_i, b_i]$ 이고 $\mathbb{E}[X_i]=0$ 일 때, 임의의 $t > 0$ 에 대하여  
> $P\bigl( \sum_{i=1}^{n}{X_i \geq t} \bigr) \leq \exp{\bigl( -\frac{2t^2}{\sum_{i=1}^{n}{(b_i - a_i)^2}} \bigr)}$ 이다.

- Random variable들이 1. independent하고 2. bounded이고 3. 기댓값이 0이라면, 이 random variable들의 _정확한 분포를 몰라도_ 적용이 가능하다. Moment에 관한 조건도 없다.

<br><br>

2026.03.25

## References

---
