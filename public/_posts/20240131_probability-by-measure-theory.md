---
title: '측도론으로 정의하는 확률'
excerpt: ''
coverImage: ''
date: '2024-01-31T13:15:06.000Z'
categories: [Mathematics, Real Analysis]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 측도론으로 정의하는 확률

---

### 고등학교에서 배운 확률의 정의와 한계

<figure>
  <img src="/assets/blog/posts/20240131_probability-by-measure-theory/highschool_probability_def.png" alt="교과서" width="600" />
  <figcaption>확률과 통계 (천재교육/이준열, 2015 교육과정) 47p</figcaption>
</figure>

핵심은 특정 사건의 개수를 사건의 **개수**/**개수**로 정의했다는 점. 따라서 **표본 공간의 크기가 무한히 큰 경우 등 개수로 정의하지 못하는 경우**에 대해서는 이러한 정의로 다룰 수 없게 된다.  
<span style="color:gray">처음에는 확률에 대한 더 엄밀한 정의가 왜 필요한지 이해하는 것도 오래 걸렸다.</span>

### Probability Space (확률 공간)

Measure Space $$(\Omega,\mathcal{F},\mathbb{P})$$의 measure $$\mathbb{P}$$가 확률일 경우 이를 **Probability Space라고** 한다.

- measure $$\mathbb{P}$$는 위의 '수학적 확률'의 의미를 가져온 것이고, 이 $$\mathbb{P}$$가 만족해야 할 세 가지 공리를 **Kolmogorov Axiom**이라 한다.

  1. $$\mathbb{P}(E) \in \mathbb{N}, \mathbb{P} \ge 0 \quad \forall E \in \mathcal{F}$$ &nbsp;
  2. $$\mathbb{P}(\Omega) =1$$ &nbsp;
  3. $$\mathbb{P}(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty} \mathbb{P}(A_n)$$ &nbsp;

  <span style="color:gray">일반적인 measure의 조건과 달리 $$\mathbb{P}(\Omega) =1$$ 이다.</span>

- Measure Space와 sigma algebra의 개념을 도입하면, 기존에 확률공간의 사건이라고 부르던 것들은 $$\mathcal{F}$$의 원소가 된다. 사건을 단지 집합의 원소로 봄으로써 엄밀함을 제고하게 된다.

### Random Variable (확률변수)

<figure>
  <img src="/assets/blog/posts/20240131_probability-by-measure-theory/random_variable.png" alt="교과서" width="400" />
  <figcaption>확률과 통계 (천재교육/이준열, 2015 교육과정) 84p</figcaption>
</figure>

Probability Space $$(\Omega,\mathcal{F},\mathbb{P})$$ 에 대해 다음을 만족하는 함수 $$X: \Omega \rightarrow \mathbb{R}$$ 를 Random Variable이라 한다.

$${w \in \Omega ; X(w) \in B} \in \mathcal{F} \quad \forall Borel subset \ B \ of \ \mathbb{R}$$

- 확률변수는 sigma algebra의 원소를 실수값으로 매핑하는 **함수**이다.
- B의 preimage(역상)가 sigma algebra에 존재해야 확률변수가 정의될 수 있다.

### Distribution (확률분포)

<figure>
  <img src="/assets/blog/posts/20240131_probability-by-measure-theory/distribution.jpeg" alt="확률분포" width="400" />
  <figcaption>Shreve, S. E. (2010). Stochastic calculus for finance II: Continuous-time models. Springer. p.9</figcaption>
</figure>

Probability Space $$(\Omega,\mathcal{F},\mathbb{P})$$ 에 대한 Random Variable $X$가 있을 때, $X$에 대한 distribution $$\mu_X$$는 **mass를** $B$**로 assign하는 measure**이다. 이 때 $$\mu_X(B) = \mathbb{P}(X \in B)$$ 이다.  
<span style="color:gray">B는 $$\mathbb{R}$$에 대한 Borel subset</span>

- 확률분포는 **measure**의 일종.

### Expectation (기댓값)

<br><br>

2024.01.31

## References

---

Shreve, S. E. (2010). Stochastic calculus for finance II: Continuous-time models. Springer.
[https://bookdown.org/edeftg/machine_learning_with_rust/measuretheory.html#sigma](https://bookdown.org/edeftg/machine_learning_with_rust/measuretheory.html#sigma)
[https://blog.naver.com/birth1104/221853268891](https://blog.naver.com/birth1104/221853268891)
