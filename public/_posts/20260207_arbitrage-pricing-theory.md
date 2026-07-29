---
title: 'Arbitrage Pricing Theory'
excerpt: ''
coverImage: ''
date: '2026-02-07T14:55:05.000Z'
categories: [Finance]
tags: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

<span style="color:gray">2026년 2월 7일에 쓰기 시작해서 방치했다가 대학원에 입학하고 첫 한 달 정도를 보내며 마감했다.</span>

## APT

---

### Arbitrage

여기저기서 많이 들어볼 수 있는 Arbitrage란 뭘까?

#### Bodie, 2021

동일한 asset이 mispricing되어있는 경우를 이용해 1. no net investment로 2. riskless profit을 얻는 것을 말함. (Bodie, 2021)

이것이 Pure Arbitrage 또는 textbook definition.

예를 들어, payoff가 동일한 두 채권 A, B가 두 개의 다른 거래소에 상장되어있고 각각의 현재 가격 $p_A=3, p_B=5$ 로 다르면? 그럼 둘의 가격은 결국 같아지면서 (3,5) 범위 사이로 들어올테니 A를 롱, B를 숏하면 수익을 얻을 수 있다. 숏 먼저 하고 롱을 하면 초기 자본도 필요 없다. (Shleifer, 1997)

그런데 이렇게만 정의하면 이게 뭔가 싶다. 수식으로 나타낼 수 있어야 할 것만 같다.

#### Back, 2010

다음과 같은 정의가 등장한다.

An arbitrage opportunity for a finite horizon T is a self-financing wealth process such that either
(i) W_0 < 0 and W_T ≥ 0 with probability 1, or
(ii) W_0 = 0, W_T ≥ 0 with probability 1, and W_T > 0 with positive probability.

수업에서는 W(wealth) 대신 Cashflow를 기준으로 보는 CF라는 노테이션을 사용했는데, 같은 내용이다.

#### Copeland and Weston, 2013

(Copeland and Weston, 79p) 에서는 'In the context of the state preference framework, one condition necessary for market equilibrium requires that any two securities or portfolios with the same state-contingent payoff vectors must be priced identically. Otherwise, everyone would want to buy the security or portfolio with the lower price and to sell the security or portfolio with the higher price.' 라고 하면서 이 필요조건을 `Single-price law of market` 이라 부른다.

이어서, (공매도가 가능하다고 가정했을 때) 두 번째 필요조건을 뭐... 막 있는데 일단 넘어감

### The Law of One Price

이건 경제학의 더 넓은 법칙인 듯. (일물일가의 법칙)

#### 관련 개념: Complete (Arrow-Debreu) Market

### Fundamental theorem of asset pricing

이건 Risk Neutral Measure와 관련이 있음.

### APT

<br><br>

2026.02.07

## References

---

Bodie, Z., Kane, A. and Marcus, A.J. (2021) Investments. New York, NY: McGraw-Hill Education, 311p.

Shleifer, A., & Vishny, R. W. (1997). The limits of arbitrage. The Journal of finance, 52(1), 35-55.

Kerry Back - Asset Pricing and Portfolio Choice Theory (2010, Oxford University Press), 145-146.

Thomas E. Copeland, J. Fred Weston, Kuldeep Shastri - Financial Theory and Corporate Policy Pearson New International Edition (2013, Pearson),78-79p.

Chi-fu Huang, Robert H. Litzenberger - Foundations for financial economics (1988, Prentice Hall) 106p, 227p.
