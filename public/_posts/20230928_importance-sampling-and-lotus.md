---
title: 'Importance Sampling, LOTUS'
excerpt: ''
coverImage: ''
date: '2023-09-28T23:39:06.000Z'
categories: [Mathematics, Statistics]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Importance Sampling

---

- $$f(x)$$가 확률변수 X에 대한 임의의 함수이고, 그 확률변수에 대한 PDF $$p(x)$$를 알고 있는 상황이라고 하자.
- 그렇다면 $E[f(x)]=\int p(x)f(x)dx$일 것이다.
- 현실에서는 sampling을 통해 Monte Carlo로 $$E[f(x)]$$를 계산하고자 할 수 있을텐데, 이 때 상황이 여의치 않아 다음과 같은 문제가 있을 수 있다.

      1. 만약 $p(x)$의 분포에 대해 알고는 있지만 sampling을 하기가 어려운 상황이라면?
      2. 또는, $$p(x)$$가 skew되었다거나 하여 분포에서 중요한 부분을 충분히 sampling하기 어렵다면?

  <br/>

- 즉 $$p(x)$$로는 sampling을 하기가 적절하지 않은 상황일 때, **sampling을 하기에 더 좋은 새로운 확률분포 $$q(x)$$를 사용하여** $$E[f(x)]$$를 계산하고자 하는 Monte Carlo[^fn1] 방법이 **Importance Sampling**이다. ([참고](https://en.wikipedia.org/wiki/Importance_sampling))
- 수식으로는

$$
\begin{aligned}
E_{p}[f(x)] & = \int p(x)f(x)dx \\
& = \int \frac{q(x)}{q(x)}p(x)f(x)dx \\
& = \int q(x)[\frac{p(x)}{q(x)}f(x)]dx \\
& = E_{q}[\frac{p(x)}{q(x)}f(x)] \\
\end{aligned}
$$

- 4월에 처음 접한 후 바로 이해하지 못하고 지금까지 정체됐던 이유가 마지막 줄이어서 좀 더 상세히 기록하면..

  - PDF가 $$p(x)$$인 r.v. X의 기댓값을 구할 때는 $$ E[X] = \int xp(x)dx $$이듯,
  - $$E_{q}[\frac{p(x)}{q(x)}f(x)] = \int q(x)[\frac{p(x)}{q(x)}f(x)]dx$$의 우변은.. 위 식의 우변에서 x를 $$[\frac{p(x)}{q(x)}f(x)]$$로, $$p(x)$$를 $$q(x)$$로 바꾼 것과 같다.

- $$w(x)=\frac{p(x)}{q(x)}$$를 weight라고도 한다. 기존에는 $$E[f(x)]$$였는데 Importance Sampling을 한 $$E[\frac{p(x)}{q(x)}f(x)]$$는 $$f(x)$$앞에 $$w(x)$$가 곱해져있는 형태나 다름없으니까.
- 이제 $$q(x)$$에서 sampling된 값을 사용해 $$ E*{p}[f(x)]\cong \frac{1}{N}\sum*{i=1}^{N}\frac{p(x)}{q(x)}f(x)$$를 계산해볼 수 있다.
- 기댓값과 Unbiased estimator라는 점에 대해서는 추후 추가.
- 분산의 형태와 $$\frac{p(x)}{q(x)}$$에 따라 기존의 분산보다 좋을 수도, 나쁠 수도 있음 역시 추후 추가.
- 시각화에 대해서는 [이 영상](https://youtu.be/C3p2wI4RAi8?si=-Xy1-zmTA6P9c4y3) 참고

## LOTUS (Law of the unconscious statistician)

---

- 확률변수 X의 PDF(또는 PMF)가 p(x)일 때, $$E[X]$$는 $$\int xp(x)dx$$ 또는 $$\sum xp(x)$$로 구할 수 있을 것이다.
- X의 PDF(또는 PMF)인 p(x)를 알고 있다면, **X의 기댓값인 $$E[X]$$뿐만 아니라 X에 대한 함수 g(X)의 기댓값 $$E[g(X)]$$도** 아래와 같이 계산할 수 있다는 것이 LOTUS이다.  
  $$E[g(X)] = \int g(x)p(x)dx$$ (X가 연속확률변수일 경우)
- 식만 보면 당연히 대충 그럴 것 같은데(라고 2학년 1학기 확통 시간에 생각하고 넘겼다..), 대표적인 예시로 $$Var[X]=E[X^{2}]-\left\{ E[X] \right\} ^ {2}$$ 를 구할 때 계산하는 $$E[X^{2}]$$가 있다. (위 식에서 $$g(X)=X^{2}$$인 상황)

  - r.v. X의 PDF가 $$p(x)$$라고 분포에 대해 알고있는 상황이라고 해도, $$E[X^{2}]$$와 같은 $$X^{2}$$에 대한 정보를 알고자 하면 $$X^{2}$$의 분포를 알아야 한다. $$X$$와 $$X^{2}$$는 다른 확률변수니까.
  - 그런데 $$X$$의 분포에 대해서는 알고 있고, 추가로 알고자 하는 것이 그 $$X$$ **에 대한** 함수의 **기댓값**에 대한 정보라면 그건 $$X$$ **의 분포** $$p(x)$$**만 알고 있어도 구할 수 있다**는 것이다.
  - 즉 $$E[X] = \int xp(x)dx$$임을 이용해 $$E[X^{2}] = \int x^{2}p(x)dx$$ 라고 구할 수 있는 것은 LOTUS가 있기 때문.
  - 고등학교 확률과 통계를 공부할 때에도 아래와 같은 형식으로 이산확률변수에 대한 정보가 주어지면 직접 손으로 $$Var[X]=E[X^{2}]-\left\{ E[X] \right\} ^ {2}$$를 계산해 분산값을 구할 때도 있었는데.. (심지어 2학년 1학기 확률과 통계 시험에서도) 그 때는 배우지 않았지만 이 역시LOTUS.

  $$
  \begin{array}{|c|c|c|}
    \hline
      x & 1 & 2 & 3 & 4 \\
    \hline
    P(X=x) & \frac{1}{8} & \frac{1}{8} & \frac{1}{4} & \frac{1}{2}\\
    \hline
  \end{array}
  $$

<br/><br/>

## References

---

<https://youtu.be/C3p2wI4RAi8?si=Wjf8D69UzF1pzCJm>
