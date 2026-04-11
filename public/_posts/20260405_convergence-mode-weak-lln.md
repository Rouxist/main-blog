---
title: 'Convergence Modes, Weak LLN'
excerpt: ''
coverImage: ''
date: '2026-04-05T15:58:51.000Z'
categories: [Mathematics, Probability]
tags: [Convergence in Probability, Almost Sure Convergence]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A0966d8e7-c016-42ec-957d-25556a9f974a%3A2024-11-11.jpg?table=block&id=2a5beff3-7473-8098-b330-f638f4dcf182" alt="2024-11-11" width=400>

학부에서 찍먹만 했던, 그리고 무엇보다도 궁금했던 이 개념들을 제대로 공부해야 할 때가 되었다.

## Recap

---

### Random variable을 항상 $X(\omega)$ 라고 쓰지 않는 이유

Random variable $X$ 가 어떤 분포를 따른다고 주어졌을 때, 그 $X$ 가 어떤 sample space를 바탕으로 하는지는 알 수 없다.

반대로 말하면 **전혀 다르게 만들어진 두 확률 변수가 같은 분포를 따르는 것도 가능하다.**

간단한 예시로 1. fair coin 하나를 던져서 앞면이 나오면 값이 1, 뒷면이 나오면 값이 0인 확률 변수 $X_1$ 과 2. fair dice 하나를 던져서 짝수가 나오면 값이 1, 홀수가 나오면 값이 0인 확률 변수 $X_2$ 는 같은 분포를 따른다. 각각이 어떻게 만들어진 확률 변수이든, 확률 변수만 관찰한다면 그냥 둘 다 _1/2의 학률로 1 또는 0이 나오는 확률 변수_ 에 불과하고 기댓값이나 분산의 계산도 모두 동일하다.

그리고 확률 변수의 분포와 기댓값 등에만 관심이 있는 것이라면 애초에 그 확률 변수가 어떤 Sample space로부터 만들어진 것인지 알 필요가 없을 수도 있다. 그렇다면 굳이 확률 변수의 정의역인 $\omega$ 를 표기하지 않고 $X$ 라고만 써도 충분할 것이다.

### Random variable을 $X(\omega)$ 라고 표기하는 경우

대표적으로 **Stochastic Process**를 생각해보면, 확률 변수의 값을 결정하는 요인이 $t, \omega$ 총 2개가 된다.

- 고정된 특정 $\omega$ 에 대해 시간의 흐름에 따른 변화를 관찰하면 **sample path**가 되고 ($X_0(\omega_0), X_1(\omega_0), \cdots, X_T(\omega_0)$)

- 고정된 특정 $t$ 시점에 나타날 수 있는 확률 변수의 값들을 관찰하면 **확률 변수**를 관찰하는 것과 같다.

이렇게 특정한 $\omega$ 의 값에 대해 관찰할 일이 있다면 확률 변수를 $X(\omega)$ 와 같이 표기하게 된다.

## Convergence

---

### Definition (Convergence in Probability)

> **Definition**  
> A sequence of random variables $\{ X_n \}$ `converges in probability` to $X$ if for every $\varepsilon > 0$:
>
> $\lim_{n \to \infty}{P(\vert X_n - X \vert > \varepsilon) = 0}$

- 아래의 Almost Sure Convergence와의 차이점은, **Sample space의 outcome $\omega$ 과는 무관하다**는 점이다.  
  이는 위의 정의를 엡실론-델타 논법의 관점에서 보면서 Typewriter Sequence 예제를 보고 나서야 감이 잡혔는데, 이는 아래에

### Definition (Almost Sure Convergence)

> **Definition**  
> A sequence of random variables $\{ X_n \}$ `converges almost surely` to $X$ if:
>
> $P(\lim_{n \to \infty}{X_n = X}) = 1$

- $P$ 안에 들어가는 것은 결국 event 이므로 $$P(\{ \omega \in \Omega: \lim_{n \to \infty}{X_n(\omega) = X(\omega)}\}) = 1$$ 로 표기하는 게 더 보기 편하지 않나 싶다
- $\lim_{n \to \infty}{X_n(\omega) = X(\omega)}$ 를 만족하는 $\omega$ 가 많이 있어서 그것들이 모인 event의 확률이 1이면 된다.

  - 그런 $\omega$ 가 얼마나 많아야 확률이 1까지 되나? 라고 하면 **almost every** $\omega$ 가 모여야 한다고도 하는데, 이 **almost every** 라는 게 얼마나 많은 거냐고 한다면 그건 또 $\omega$ 를 모은 것들의 확률이 1이 될 만큼... 이렇게 정의가 빙글빙글 도는 느낌이었다.
  - 이건 _'점을 얼마나 모아야 선이 되냐?'_ 와 같게 생각할 수 있는 듯 하다.  
    흔히 사용되는 $\Omega \subset \mathbb{R}$ 이고 $\mathbb{P}$ 가 Lebesgue measure의 변형(Normal, Uniform의 probability measure 등)인 경우, $\lim_{n \to \infty}{X_n(\omega) = X(\omega)}$ 를 만족하지 못하는 $\omega$ 가 countable하게 많은 정도까지는 어차피 확률이 0이고 허용 가능하다.

### Theorem (Slutsky's Theorem)

### Example (Sample Mean)

### Example (Typewriter Sequence)

테렌스 타오의 웹사이트에도 소개되어있는 예시이다. ([Example 7](https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/))

$\Omega = [0,1]$ 에 uniform probability (measure)를 가정하고,

확률 변수 $X_n$ 은 1또는 0의 값을 가지며, $n$ 이 커짐에 따라 $X_n$ 이 1의 값을 가질 수 있는 $\omega$ 값의 범위는 점점 작아진다.

- $X_1(\omega) = 1 \ \text{if} \ \omega \in [0,1], = 0 \ \text{otherwise}$
- $X_2(\omega) = 1 \ \text{if} \ \omega \in [0,1/2], = 0 \ \text{otherwise}$
- $X_3(\omega) = 1 \ \text{if} \ \omega \in [1/2,1], = 0 \ \text{otherwise}$
- $X_4(\omega) = 1 \ \text{if} \ \omega \in [0,1/4], = 0 \ \text{otherwise}$
- $X_5(\omega) = 1 \ \text{if} \ \omega \in [1/4,1/2], = 0 \ \text{otherwise}$

...

이 모든 것을 한 줄로 일반화하면

$X_n(\omega) := \mathbb{1}(\omega \in [\frac{n-2^k}{2^k}, \frac{n-2^k-1}{2^k}]) \quad (k \geq 0, 2^k \leq n < 2^{k+1}>)$

라고 쓸 수 있다. 그리고 이 확률 변수가 수렴해야 할 확률 변수는 $X(\omega) = 0$ 이라고 하자.

여기에 두 convergence를 적용하기에 앞서, 일단 각각의 정의를 (GPT가 변환해준) 엡실론-델타 논법의 표현으로 바꿔서 보면 다음과 같다.

- `Convergence in Probability`:  
  $\forall \varepsilon > 0,\; \forall \delta > 0, \exists N \text{ such that } \forall n \ge N,\ P\big(|X_n - X| > \varepsilon\big) < \delta$

- `Almost Sure Convergence`:  
  $P(\{\omega: \forall \varepsilon > 0, \exists N(\omega) s.t. \forall n\ge N(\omega), \ |X_n(\omega)-X(\omega)|<\varepsilon\})=1$

이 정의를 사용해서 생각해보면,

1. Convergence in Probability

- $X_(\omega)$ 의 값이 1일 확률이 ($n$ 이 커짐에 따라) 점점 작아지면 된다. 그리고 이 예시에서 $n$ 이 커지면 $X_n(\omega)$ 의 값이 1일 확률은 계속해서 작아지므로, 어떤 $\delta$ 가 주어지든 $P\big(|X_n - X| > \varepsilon)$ 이 $\delta$ 보다 작아지는 $n$ 값들을 찾을 수 있다. (So is $N$.)
  - (이 예시에서는 $|X_n - X|$ 의 값이 항상 0 또는 1이 된다. 그래서 $\varepsilon$ 의 값을 이것저것 테스트해보는 건 별 의미 없을 듯)
- Convergence in Probability의 경우 $\omega$ 를 하나하나 고려할 필요가 없음을 알 수 있다. $n$ 이 커짐에 따라 수많은 $\omega$ 중 $|X_n(\omega) - X(\omega)| > \varepsilon$ 을 만족하는 $\omega$ 를 다 모아봤을 때, 그것들(event)의 확률이 0으로 수렴하기만 하면 된다.
  - 굳이 특정한 fixed $\omega$ 에 대해 Sample path를 그려보면 어떻게 될까... 했지만 애초에 Convergence in Probability의 정의 자체가 $\omega$ 들을 따로따로 보는 것이 아니니 생각해볼 필요가 없어보인다.

2. Almost Sure Convergence

- 이 경우에는 각 $\omega$ 하나하나를 관찰해야 한다.  
  (왜냐하면, 그것이 정의이니까.)
- 임의의 fixed $\omega$ ($\tilde{\omega}$ 라 하자) 에 대하여 $X_n(\tilde{\omega})$ 이 $X(\tilde{\omega})$ 에 수렴해야 한다.
  - 즉 Sample path를 그려봤을 때, $n$ 이 커지면 **$X_n(\tilde{\omega})=1$ 인 부분이 없어야 한다.**
  - 그런데 이 예시에서는, $n$ 이 아무리 커져도 $X_n(\tilde{\omega})=1$ 인 부분은 계속해서 등장한다.
- 따라서 모든 $\omega$ 에 대해 $X_n(\omega)$ 가 $X(\omega)$ 로 수렴하지 못한다. 따라서 $P(\lim_{n \to \infty}{X_n = X}) = 0$ 이라는 처참한 결과(...)에 의해 Almost Sure Convergence는 성립하지 않음을 알 수 있다.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ac7409c2a-17e6-4b01-8959-14713e41ffc3%3Atypewriter_sequence.png?table=block&id=339beff3-7473-8036-8e75-d0a5c20384b4" alt="typewriter_sequence" width=500>

### Definition (Convergence in $L^p$)

> **Definition**  
> For $p \geq 1$, a sequence of random variables $\{ X_n \}$ `converges in L^p` to $X$ if:
>
> $\lim_{n \to \infty}{\mathbb{E}[\vert X_n - X \vert^p]} = 0$

- $p=1$ 이면 Convergence in mean, $p=2$ 이면 Convergence in mean square
- $L^2$ convergence는 $\mathbb{E}[(X_n - X)^2] \rightarrow 0$ 와 같은데, 이것은 어떤 확률 변수의 제곱의 평균이니  
  $\mathbb{E}[(X_n - X)^2] = \text{Var}(X_n - X) + (\mathbb{E}[X_n - X])^2$ 와 같이 식을 변형할 수 있고,  
  이는 **Bias-Variance** decomposition이다. 따라서 **$L^2$ convergence는 Bias와 Vaiance가 모두 0이어야 함을 함의한다.**

### Theorem ($L^p$ implies Convergence in Probability)

- 증명은 Markov Inequality를 이용해 가능

### Example (Convergence in Probability does not imply $L^1$)

$$
\begin{aligned}
  X_n(\omega) =
  \begin{cases}
  n \quad \text{if} \quad \omega \in [0, 1/n] \\
  0 \quad \text{otherwise}
  \end{cases}
\end{aligned}
$$

- Convergence in Probability는 성립할 수 있으나, Convergence in `L^1`은 불가능
- Escaping Mass: 작은 확률에 매우 큰 확률 변수의 값에 할당되는 경우

### Theorem (Dominated Convergence)

> **Theorem**  
> If $X_n \overset{p}{\to} X$ and $\vert X_n \vert \leq Y$ for all $n$ with $\mathbb{E}[Y^p] < \infty$, then $X_n \overset{L^p}{\to} X$.

### Theorem (Subsequence Criterion)

> **Theorem**  
> $X_n \overset{p}{\to} X$ iff every subsequence $\{ X_{n_k} \}$ has a further subsequence $\{ X_{n_{k_j}} \}$ such that $X_{n_{k_j}} \overset{a.s.}{\to} X$.

## Weak Law of Large Numbers

---

_Weak_ LLN은 **Convergence in Probability**, _Strong_ LLN은 **Almost Sure Convergence**이다.

### Setup

- LLN은 **Sample average가 실제로 Population mean에 가까워지는가**에 대한 것이므로, 먼저 **Sample average** 라는 것이 구해지는 과정을 명확히 이해해야 할 것이다.

- 한 나라에 총 $N$ 명의 국민이 있고, 전체 인구의 평균 키가 $\mu$ 라고 하자. $\mu$ 는 관측할 수 없는 값이니, 대신 $n$ 명으로부터 조사를 하여 $n$ 명의 평균 키는 계산해볼 수 있을 것이다.

- 총 $n$ 명의 키를 조사할 때, $i$ 번째 설문 대상인 사람의 키를 $X_i$ 라 하면 $X_1, X_2, ..., X_n$ 와 같이 관측값을 모을 수 있을 것이다.

- 각 $X_i$ 는 **Random Variable**이고, 여러 버전의 LLN 각각에 따라 가정은 조금씩 다르다. $X_i$ 끼리 uncorrelated이면 충분할 수도 있고, i.i.d.여야 할 수도 있다.

  i.i.d. 조건에 의해 각 $X_i$ 가 모두 population distribution(= 전국민의 키 분포)을 따른다면, $\mathbb{E}[X_i]=\mu$ 는 trivial하게 성립한다.

- $n$ 명의 평균 키를 의미하는 **Sample average** $\overline{X}_n = \frac{1}{n} \sum_{i=1}^{n}{X_i}$ 이다.

### Theorem ($L^2$ Weak Law of Large Numbers)

### Theorem (Weak Law of Large Numbers)

> **Theorem**  
> Let $X_1, X_2, ...$ be i.i.d. with $\mathbb{E}[X_i]=\mu$. Then:
>
> $\overline{X}_n = \frac{1}{n} \sum_{i=1}^{n}{X_i} \overset{p}{\to} \mu$

이게 클레식한 정의

- 각 $X_i$ 가 **finite mean**을 가지기만 하면 된다. 분산은 발산해도 상관 없음.
- $X_n$ 이 $X$ 로부터 크게 벗어날(deviation) 가능성이 ($n$ 이 커짐에 따라) 0으로 수렴함을 알려줄 뿐, rate of convergence나 fluctuation에 대해서는 정보를 주지 못함

### Application (Consistency of Sample Variance)

### Application (Method of Moment)

### Application (Monte Carlo Integration)

<br><br>

2026.04.05

## References

---
