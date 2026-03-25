---
title: 'Expectation, Moment, Transformation'
excerpt: ''
coverImage: ''
date: '2026-03-14T14:21:50.000Z'
categories: [Mathematics, Probability]
tags: [Expectation, Moment, MGF, LOTUS]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## Expectation

---

### Definition (Expectation)

> **Definition**  
> Given discrete random variable $X$, the `expected value` (or `mean`) of $X$ is  
> $\mathbb{E}[X] = \sum_{i=1}^{n}{x_i \cdot P(X=x_i)}$, provided absolute convergence: $\sum_i \vert x_i \vert P(X=x_i) < \infty$
>
> Given continuous random variable $X$ with pdf $f_X$, the `expected value` of $X$ is  
> $\mathbb{E}[X] = \int_{-\infty}^{\infty}{x \cdot f_X(x)dx}$, provided absolute convergence: $\int_{-\infty}^{\infty}{\vert x \vert f_X(x)dx} < \infty$

- 기댓값은 확률변수에서 나올 수 있는 값들의 가중평균 값으로 생각할 수 있다.
- sum, integral 결과값이 (absolute하게) 수렴해야 한다는 조건이 있다. 발산하는 예시로 St. Petersburg Paradox가 있다.
- $\mathbb{E}X$ 라고 표기하기도 한다. <s>얼마 전 재무론 교재에서 진짜로 봤다.</s>

### 기댓값 계산 시 적분 기호 안의 $x$ 는 무엇인가

헷갈리는 지점은, 적분 기호 안에 들어있는 $x$ 는 확률변수 $X$ 와 무슨 관계인가 하는 것이다. (특히 확률변수를 소문자로 쓰면 뭐가 뭔지 더 헷갈린다.)

<img src="/assets/blog/posts/20260314_expectation-moment-transformation/expectation.png" alt="expectation" width=400>

결론은 적분 기호 안의 $x$ 는 그냥 적분 연산의 대상으로써 등장하는 변수이고, 확률변수 $X$ 그 자체가 적분식 안에 들어가있는 것은 아니다.

### 미분과 기댓값 계산의 순서 바꾸기

(위와 같은 혼란의 원천이 이것이었는데) Asset pricing 교재들 앞 부분에서는 어떠한 *기댓값*을 미분하는 계산이 많이 등장했다.

일반적으로는 _적당한 조건 하에_ 두 계산의 순서를 바꿀 수 있다고 설명하고 있었다.

조금 더 자세한 설명은:

[https://math.stackexchange.com/questions/217702/when-can-we-interchange-the-derivative-with-an-expectation](https://math.stackexchange.com/questions/217702/when-can-we-interchange-the-derivative-with-an-expectation)

### LOTUS

학부 2학년 1학기에 이것의 존재를 배우고 2학기에 이것에 대해 [글](20230928_lotus)을 쓴 적이 있었는데, 새롭게 더 알게 된 점은 1. 함수 $g(\cdot)$ 가 Borel measureable function이어야 한다는 점, 그리고 2. 이름이 'unconscious' 인 이유는 당연해보여서 다들 그렇게 쓰지만 증명이 별도로 필요하기 때문이다.

$\mathbb{E}[g(X)] = \sum_i{g(x_i)P(X=x_i)} \ \cdots \ \text{(Discrete case)}$

$\mathbb{E}[g(X)] = \int_{-\infty}^{\infty}{g(x_i)f_X(x)dx} \ \cdots \ \text{(Continuous case)}$

증명의 난이도는 심각하지는 않은 듯 하다. \[1\]

### Properties of expectation

1. Linearity: $\mathbb{E}[aX+bY] = a\mathbb{E}[X] + b\mathbb{E}[Y]$

- $X, Y$ 의 **independence가 주어지지 않아도** 이는 성립한다.

2. Monotonicity: $X \leq Y \ \text{a.s.} \Rightarrow \mathbb{E}[X] \leq \mathbb{E}[Y]$

3. Constant: $\mathbb{E}[c]=c$

4. Triangle inequality: $\vert \mathbb{E}[X] \vert \leq \mathbb{E}[\vert X \vert]$

5. $0 \leq X \ \text{a.s. and} \ \mathbb{E}[X]=0 \Rightarrow P(x=0)=1$

의 성질을 가진다.

## Lebesgue Integration

---

리만 스틸체스 적분을 떠올려서

$\mathbb{E}[X] = \int_{\Omega}{X(\omega) d\mathbb{P}}$

라고 쓰면 discrete/continous case들을 모두 하나로 표현할 수 있다.

## Convergence Theorems

---

### Monotone Convergence Theorem

해석학에서 등장하는 정리이고 이건 그것의 확률변수에 대한 정리이다.

Monotone sequence에 는 $a_n \leq a_{n+1}$ 또는 $a_n \geq a_{n+1}$, $\forall n$ 을 만족하는 수열을 말하고,

여기서는 sequence of non-negative random variables $0 \leq X_n$ 에 대해

$X_n \uparrow X \ \text{(pointwise)} \ \Rightarrow \mathbb{E}[X_n] \uparrow \mathbb{E}[X]$

를 말한다.

- $\uparrow$ 의 의미는 monotonically incraesing하면서 수렴한다는 뜻이고
- pointwise라는 건 $\forall \omega \ \lim_{n \to 0}{X_n(\omega)} = X(\omega)$ 라는 뜻이다.
  - 확률변수끼리 어떻게 대소비교를 할 수 있나 했지만 이 'pointwise'가 그 해결책이었다.

즉 음수가 아닌 확률변수들의 수열 각 원소가 점점 증가하면서 어느 값으로 수렴한다면, 원소들의 기댓값 역시 수렴한다.

### Dominated Convergence Theorem

$\ X_n \rightarrow X \ \text{a.s. and} \ \vert X \vert \leq Y \ \forall n \ \text{with} \ \mathbb{E}[Y] < \infty \Rightarrow \mathbb{E}[X_n] \rightarrow \mathbb{E}[X] \ \text{and} \ \mathbb{E}[\vert X_n - X \vert] \rightarrow 0$

- $X_n \rightarrow X \ \text{a.s.}$ 의 의미는, $P(\{\omega : X_n(\omega) \to X(\omega)\}) = 1$
  - monotonic increasing같은 제한이 없으니 이게 더 약한 조건이다.

### Fatou's Lemma

Lemma에 앞서 $\text{lim inf}$ (limit inferior)라는 것 부터가 헷갈린다.

하나의 예시로 [2], 수열 $a_n = \{3 - \frac{1}{2}, 5 + \frac{1}{3}, 3 - \frac{1}{4}, 5 + \frac{1}{5}, 3 - \frac{1}{6}, 5 + \frac{1}{7}, \cdots \}$ 를 가정한다. $a_n$ 의 원소들을 앞에서부터 하나씩 제거하면서 최솟값을 찾아보면

$n > 1$ : $\text{inf} \{ 5 + \frac{1}{3}, 3 - \frac{1}{4}, 5 + \frac{1}{5}, 3 - \frac{1}{6}, 5 + \frac{1}{7}, \cdots \} = 3 - \frac{1}{4}$

$n > 2$ : $\text{inf} \{ 3 - \frac{1}{4}, 5 + \frac{1}{5}, 3 - \frac{1}{6}, 5 + \frac{1}{7}, \cdots \} = 3 - \frac{1}{4}$

$n > 3$ : $\text{inf} \{ 5 + \frac{1}{5}, 3 - \frac{1}{6}, 5 + \frac{1}{7}, \cdots \} = 3 - \frac{1}{6}$

... 이렇게 계속 $n$ 을 크게 잡으면서 최솟값을 구한, _최솟값들의 수열_ 을 정의할 수 있다.

$s_n = \{3 - \frac{1}{4}, 3 - \frac{1}{4}, 3 - \frac{1}{6}, \cdots\}$

이때 $\text{sup} \ s_n$ 이 $\text{lim inf} \ a_n$ 과 같다. $n \to \infty$ 이면 $\text{sup} \ s_n = \text{lim inf} \ a_n = 3$ 이 된다.

...아무튼 Fatou's Lemma는

$\mathbb{E}[\text{lim inf} \ X_n] \leq \text{lim inf} \ \mathbb{E}[X_n]$

을 말한다. 확률변수 극한의 기댓값은 확률변수 기댓값의 극한보다 항상 작거나 같다.

<span style="color:gray">GPT에서는 $\Omega = [0,1]$ 에 uniform distribution이 되도록 정의한 확률공간에 대해 확률변수 $X_n(\omega)=n \ \text{if} \ 0 < \omega \leq \frac{1}{n}, 0 \ \text{otherwise}$ 를 정의하면 좌변이 0, 우변이 1이 된다는 예시를 내놓기도 했다.</span>

### Tail Sum Formula

Non-negative, _integer-valued_ random variable $X$ 에 대해

$\mathbb{E}[X]=\sum_{k=1}^{\infty}{P(X \geq k)} \ \cdots \ \text{(Discrete case)}$

또한 non-negative random variable $X$ 에 대해

$\mathbb{E}[X]=\int_{0}^{\infty}{P(X > k)dt} \ \cdots \ \text{(Continuous case)}$

Random variable에서 나올 수 있는 값들 각각에 확률을 곱하는 게 아닌, 확률들을 쭉 합산해서 기댓값을 계산하는 방식으로도 기댓값을 구할 수 있다.

<br>

유도 과정을 간략히 보면, 먼저 기댓값의 정의를 르베그 적분으로 나타내면

$\mathbb{E}[X] = \int_{\Omega}{X(\omega) d\mathbb{P}}$

여기서 $X(\omega)$ 는 indicator variable $\mathbb{1}(X > t)$ 을 정의하면 $X(\omega) = \int_{0}^{\infty}{\mathbb{1}(X > t) dt}$ 로 나타낼 수 있다.

그럼 $\mathbb{E}[X] = \int_{\Omega}{(\int_{0}^{\infty}{\mathbb{1}(X > t) dt}) d\mathbb{P}}$ 이고, 여기에 **Fubini's Theorem**을 적용해 적분 순서를 바꾸면

$\int_{0}^{\infty}{(\int_{\Omega}{\mathbb{1}(X > t)d\mathbb{P}})dt}$

안쪽의 적분 $\int_{\Omega}{\mathbb{1}(X > t)d\mathbb{P}} = P(X > t)$ 이므로 대입하면 Tail sum formula가 된다.

- 확률분포의 전체 density를 알지 못해도 $P(X \geq k)$ 는 알 수 있을 때 기댓값을 구하기 위해 사용 가능

## Variance, Moments

---

### Definition (Variance)

> **Definition**  
> Random variable $X$ 의 mean $\mu=\mathbb{E}[X]$ 일 때 $X$ 의 `variance`는  
> $\text{Var}(X) = \mathbb{E}[(X-\mu)^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$ 이다.

`Standard Deviation` 은 $\sigma_X = \sqrt{\text{Var}(X)}$ 이다.

### Properties of variance

1. $\text{Var}(X) \geq 0$ 이고, $\text{Var}(X) = 0 \Leftrightarrow X=c \ \text{a.s. for some constant} \ c$
2. $\text{Var}(aX + b) = a^2 \text{Var}(X)$
3. $\text{Var}(X) = 0 \Leftrightarrow X = \mathbb{E}[X] \ \text{a.s.}$
4. $X, Y$ 가 **independent**할 경우 $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$

### Definition (Moments)

> **Definition**  
> The $k$-th moment of random variable $X$ is $\mathbb{E}[ X^k ]$  
> The $k$-th central moment is $\mathbb{E}[ (X-\mu)^k ] \ \text{where} \ \mu = \mathbb{E}[X]$

확률변수의 통계량 계산에 유용하게 사용 가능한 모멘트의 정의이다.

### Covariance

> **Definition**  
> The `covariance` $X$ and $Y$ is  
> $\text{Cov}(X, Y) = \mathbb{E}[(X-\mu_X)(Y-\mu_Y)] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$

- 모두 centered random variable을 이용하여 정의된다.
- 역시 가장 중요한 것은 $\text{uncorrelated} \nRightarrow \text{independent}$ 라는 사실이다.
  - uncorrelated but dependent의 대표적인 예시는 <span style="color:gray">학부에서도 봤던</span> $Y=X^2$
  - 그런데 예외로 **joint normal**인 $X, Y$ 에 대해서는 성립한다. 즉 $\text{uncorrelated} \Leftrightarrow \text{independent}$

### Properties of covariance

(생략)

### Correlation

> **Definition**  
> The `correlation` (or `Pearson correlation coefficient`) of $X$ and $Y$ is  
> $\text{Corr}(X, Y) = \rho_{XY} = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X) \text{Var}(Y)}}$

- $X, Y$ 모두 finite variance를 가지면 $\vert \rho \vert \leq 1$ 이라는 Bound가 있다. 증명은 **Cauchy-Schwarz inequality**로.
- $\vert \rho_{XY} \vert = 1 \Leftrightarrow Y = aX + b \ \text{a.s. for some} \ a \ne 0$

## Moment Generating Function

---

### Definition (Moment Generating Function)

여러 moment들에 대한 정보를 한 함수가 모두 담고 있는 것과 같고, 미분을 통해 $k$-th moment를 쉽게 구할 수 있도록 변수 $t$ 도 추가하여 만들어진 함수.

> **Definition**  
> The moment generating function of random variable $X$ is $M_X(t) = \mathbb{E}[ e^{t X} ]$ defined for all t in some neighborhood of 0.

- Taylor expansion에 기반하여 정의된다.

  - $M_X(0)=\mathbb{E}[e^0]=1$ 이므로 $t=0$ 에선 항상 MGF가 존재한다. 근데 $t=0$ 에서만 존재해서는 의미가 없고, 최소한 어떤 $\delta$ 에 대해 $(-\delta, \delta)$ 의 구간 내 모든 범위에 대해서라도 (즉, $\forall t \in (-\delta, \delta)$) MGF가 존재해줘야 미분도 하고 의미있게 활용이 가능할 것이다.

    - Exponential distribution의 경우 $t < \lambda$ 인 구간에 대해서만 MGF가 정의된다.

  - 또한 저런 expectation이 *존재*해야 한다. 즉, 0의 neighborhood 내의 모든 $t$ 에 대해 $M_X(t)=\mathbb{E}[e^{tX}] < \infty$ 여야 한다.
    - 이걸 만족하지 못하는 예시가 Logormal. $t>0$ 이면 항상 $\mathbb{E}[e^{tX}] = \infty$ 이다.

- MGF가 항상 존재하는 것은 아니다. 예를 들어 Cauchy distribution에 대해서는 MGF가 존재하지 않는다.
- 세 가지 property로 1. uniquness, 2. Linear Transformation, 3. Sum of independents 가 있는데
  - 1번은 random variables $X$, $Y$ 의 MGF가 동일하면 (in a neighborhood of 0) $X$, $Y$ 는 동일한 distribution을 가진다는 뜻으로, 이는 CLT 증명 등에 사용 가능
  - 3번은 정규분포를 따르는 두 (independent) random variables의 합으로 정의되는 random variable도 정규분포를 따른다는 것을 보일 수 있음.

1번에 대한 증명이 궁금했으나 너무 어렵고 characteristic function으로 그냥 넘야가게 된다는 글을 보고 마음을 접었다. \[n\]

## Jensen’s Inequality

---

<s>재무론에서 자주 보고 있으므로</s> (생략)

<br><br>

2026.03.14  
2026.03.17

## References

---

\[1\] [https://statproofbook.github.io/P/mean-lotus.html](https://statproofbook.github.io/P/mean-lotus.html)
\[2\] [https://math.stackexchange.com/questions/493526/can-someone-clearly-explain-about-the-lim-sup-and-lim-inf](https://math.stackexchange.com/questions/493526/can-someone-clearly-explain-about-the-lim-sup-and-lim-inf)
\[n\] [https://math.stackexchange.com/questions/458680/how-to-prove-moment-generating-function-uniqueness-theorem](https://math.stackexchange.com/questions/458680/how-to-prove-moment-generating-function-uniqueness-theorem)
