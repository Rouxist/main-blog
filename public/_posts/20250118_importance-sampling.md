---
title: 'Importance sampling'
excerpt: ''
coverImage: ''
date: '2025-01-18T19:19:40.000Z'
categories: [Mathematics, Statistics]
tags: ['Importance sampling', 'Monte Carlo']
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Importance Sampling

---

Importance Sampling을 처음 접한 것은 강화학습의 off policy에서였다. Behavior policy와 Target policy를 나누고 reward의 기댓값을 계산할 때, Importance Sampling이 있기에 Behavior policy로 optimal policy를 찾아갈 수 있음을 알수 있다는 내용이었다.

- $$f(x)$$가 확률변수 X에 대한 임의의 함수이고, 그 확률변수에 대한 PDF $$p(x)$$를 알고 있는 상황이라고 하자.
- 그렇다면 $E[f(x)]=\int p(x)f(x)dx$일 것이다.
- 현실에서는 sampling을 통해 Monte Carlo로 $$E[f(x)]$$를 계산하고자 할 수 있을텐데, 이 때 상황이 여의치 않아 다음과 같은 문제가 있을 수 있다.

  1. 만약 $p(x)$의 분포에 대해 알고는 있지만 sampling을 하기가 어려운 상황이라면?
  2. 또는, $$p(x)$$가 skew되었다거나 하여 분포에서 중요한 부분을 충분히 sampling하기 어렵다면?

- 즉 $$p(x)$$로는 sampling을 하기가 적절하지 않은 상황일 때, **sampling을 하기에 더 좋은 새로운 확률분포 $$q(x)$$를 사용하여** $$E[f(x)]$$를 계산하고자 하는 Monte Carlo 방법이 **Importance Sampling**이다. ([참고](https://en.wikipedia.org/wiki/Importance_sampling))
- 수식으로는

$$
\begin{aligned}
E_{p}[f(x)] & = \int p(x)f(x)dx \\
& = \int \frac{q(x)}{q(x)}p(x)f(x)dx \\
& = \int q(x)[\frac{p(x)}{q(x)}f(x)]dx \\
& = E_{q}[\frac{p(x)}{q(x)}f(x)] \\
\end{aligned}
$$

- 처음 접했을 때 바로 이해하지 못하고 지금까지 정체됐던 이유가 마지막 줄이어서 좀 더 상세히 기록하면..

  - PDF가 $$p(x)$$인 r.v. X의 기댓값을 구할 때는 $$ E[X] = \int xp(x)dx $$이듯,
  - $$E_{q}[\frac{p(x)}{q(x)}f(x)] = \int q(x)[\frac{p(x)}{q(x)}f(x)]dx$$의 우변은.. 위 식의 우변에서 x를 $$[\frac{p(x)}{q(x)}f(x)]$$로, $$p(x)$$를 $$q(x)$$로 바꾼 것과 같다.

- $$w(x)=\frac{p(x)}{q(x)}$$를 weight라고도 한다. 기존에는 $$E[f(x)]$$였는데 Importance Sampling을 한 $$E[\frac{p(x)}{q(x)}f(x)]$$는 $$f(x)$$앞에 $$w(x)$$가 곱해져있는 형태나 다름없으니까.
- 이제 $$q(x)$$에서 sampling된 값을 사용해 $E_{p}[f(x)]\cong \frac{1}{N}\sum_{i=1}^{N}\frac{p(x)}{q(x)}f(x)$를 계산해볼 수 있다.
- Unbiased estimator이다. 즉 $\mathbb{E}\left[\hat{\mathbb{E}}_p[f(x)]\right] = \mathbb{E}_p[f(x)]$.

- <span style="color:red">분산의 형태와 $$\frac{p(x)}{q(x)}$$에 따라 기존의 분산보다 좋을 수도, 나쁠 수도 있다.</span>
- 시각화에 대해서는 [이 영상](https://youtu.be/C3p2wI4RAi8?si=-Xy1-zmTA6P9c4y3) 참고
- Importance sampling을 통해 구해진 샘플들은 결국 proposal distribution에서 나온 샘플에 가중치만 곱해준 값일 뿐, 직접적으로 target distribution에 맞춰 샘플링된 값들은 아니다. 따라서 **Importance Sampling은 샘플을 생성할 때가 아닌, 기댓값 등을 계산할 때에 쓰인다.**

<br/><br/>

2023.09.28
2025.01.18
