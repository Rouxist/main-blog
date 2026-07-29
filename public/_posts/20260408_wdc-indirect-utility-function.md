---
title: 'Walrasian Demand Correspondence, Indirect Utility Function'
excerpt: ''
coverImage: ''
date: '2026-04-08T15:00:12.000Z'
categories: [Economics, Microeconomics]
tags: [WDC, Indirect Utility Function]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

UMP를 풀고 난 결과로 나오는 것들에 대해...

## Walrasian Demand Correspondence

---

### Definition

Maximality와 Feasibility는, 모든 bundle $x$ 중 어떤 것이 WDC $x(p, W)$ 의 원소가 될 수 있는지를 따지는 기준들.

그래서 이 두 조건을 이용해 WDC를 이렇게 정의할 수 있다.

$
x(p,w) = \{ x \in X :
\underbrace{p \cdot x \leq W}_{\text{Feasibility}}, \;
\underbrace{u(x) \ge u(x') \quad \forall x' \ \text{s.t.} \ p \cdot x' \leq W}_{\text{Maximality}}
\}
$

### Properties

- $u(x)=u(x') for x, x' \in x(p, W)$ 라는 게 당연하게 주어지는 게 아니고, feasibility와 maximality를 이용해 도출되는 property이다.

### Propositions

Suppose that $u$ is a continuous, representing locally non-satiated preference relatin. TFSH.

(i) homogeneous degree of 0.  
(ii) Walras' law: optimum에선 결국 binding하게 budget constraint를 만족시킴. 즉 W를 다 소진할 때 optimum이 나옴. 이게 LN 이용한 귀류법 증명 03.31에 보여주신 내용.  
(iii) If ($\succeq$ is convex,) $u$ is quasi-concave, $x(p, W)$ is convex.

## Indirect Utility Function

---

### Definition

$v(p, W) := u(x), \ x \in x(p, W)$

그리고 WDC는 output이 재화들의 quantity이니 그림 그릴 때 각 축이 quantity였는데, indirect utility는 어차피 quantity가 중요한 건 아니고 exogenous variable인 가격들의 변동에 집중하면 되므로 그릴 때 축이 price이다.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A9d8fade5-995d-4248-8c26-e5576a75ac36%3Aplot.png?table=block&id=33cbeff3-7473-804d-aa5c-eff786a240cf" alt="indirect-utility-function" width=500>

### Properties

### Propositions

Suppose that $u$ is a continuous, representing locally non-satiated preference relatin. TFSH.

(i) homogeneous degree of 0  
(ii) $v(p, W)$ is non-increasing in $p$, $v(p, W)$ is increasing in $W$  
(iii) $v(p, W)$ is quasi-convex in $p, W$  
(iv) $v(p, W)$ is continuous in $p, W$

- (iii) 에 대해
  - 일단 quasi-convex의 정의로 보면 $v(2,2) \le \max\{v(3,1), v(1,3)\}$
  - 이에 대한 intuition: (average보다) exetreme price system인 경우에 얻을 수 있는 최대 효용이 더 높거나 같다.
  - 효용 함수의 형태에 따라, 그 정도는 또 다 다르다. Perfect Complement < 그 중간 < Perfect substitution 순서대로 더 큰 benefit을 본다.

<br><br>

2026.04.10

## References

---
