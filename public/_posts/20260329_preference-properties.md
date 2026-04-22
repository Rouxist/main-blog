---
title: 'Properties of preference'
excerpt: ''
coverImage: ''
date: '2026-03-29T15:01:52.000Z'
categories: [Economics, Microeconomics]
tags: [Monotone, Quasi-linear]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

convexity를 논하는 개념이 1. 함수, 2. 집합, 3. preference 세 가지라고 하셨다.

[Preference](20260307_preference)에서는 정의만 정리했고

## The more The better: Monotonicity, Local Non-Satiation

---

### Definition (Monotonicity)

> **Definition**  
> Preference relation is `monotone` if
> $\textbf{x}_1 \gg \textbf{x}_2 \Rightarrow \textbf{x}_1 \succ \textbf{x}_2$
>
> Preference relation is `strongly monotone` if
> $\textbf{x}_1 \geq \textbf{x}_2  \ \text{and} \ \textbf{x}_1 \ne \textbf{x}_2 \Rightarrow \textbf{x}_1 \succ \textbf{x}_2$
>
> `Strongly monotone` $\Rightarrow$ `Monotone`

- 학부 교재에서 본 그것고 같다. The more, the better을 의미한다.
  - 예를 들어 Cobb-Douglas utility function은 monotone하면서 strongly monotone하다. (매끈한 곡선 형태의 IC)
  - 반면 Leontief utility function은 monotone하지만 strongly monotone하지는 않다. (좌표축에 수평/수직인 구간을 포함하는 IC)
- Monotone preference를 represnet하는 효용 함수는 $\frac{\partial u}{\partial x_i} \geq 0 \ \forall i \Rightarrow \nabla u(x) \geq 0, u(x) \ne 0$
- Strongly monotone preference를 represnet하는 효용 함수는 $\frac{\partial u}{\partial x_i} > 0 \ \forall i \Rightarrow \nabla u(x) \gg 0$
- 이 둘보다 좀 더 완화된 조건이 아래의 **Local Non-Satiation** 이다.

### Definition (Local Non-Satiation)

> **Definition**  
> Preference relation $\succeq$ satisfies `Local Non-Satiation` if $\ \forall \textbf{x}_1 \in X, \ \forall \varepsilon > 0, \ \exist \textbf{x}_2 \ \text{s.t.} \ \vert \vert \textbf{x}_2 - \textbf{x}_1 \vert \vert < \varepsilon, \textbf{x}_2 \succ \textbf{x}_1$

- 임의의 consumption bundle에 대해 그보다 더 선호하는 다른 consumption bundle이 주변에 항상 존재하기만 하면 된다.
- 이를 만족한다면, 무차별 곡선이 두꺼워서는 안 된다는 결론에 다다를 수 있다.

## The average is better than the extreme: Convexity, Strict convexity

---

> **Definition**  
> Preference relation $\succeq$ is `convex` if
>
> $\text{For} \ \textbf{x}\_1,\textbf{x}\_2,\textbf{x}\_3 \in X \ \text{where} \ \textbf{x}\_2 \succeq \textbf{x}\_1 \ \text{and} \ \textbf{x}\_3 \succeq \textbf{x}\_1, \ \text{then for every} \ \theta \in [0,1], \ \theta \textbf{x}_2  + (1-\theta) \textbf{x}_3 \succeq \textbf{x}_1$

- 이게 어떻게 'The average is better than the extreme'이라는 의미를 담을 수 있는 건지 한 눈에 들어오지는 않았지만, _'A, B가 모두 C보다 선호되거나 무차별적이라면, A와 B의 조합이 C보다 덜 선호될 수는 없다'_ 정도로 이해하는 게 좋겠다.
  - 예를 들어 Cobb-Douglas utility function은 convex하면서 strictly covnex하다.
  - 반면 Leontief utility function은 convex하지만 strictly convex하지는 않다.
  - 또한 $u(x_1, x_2) = x_1 + x_2$ 형태의 효용 함수는 convex하지 않다.
- 즉, **Indifference Curve 위의 두 점을 이은 선분 위의 임의의 점(Linear interpolation 한)이 더 높은 효용을 주면 convex한 것인데**, 좀 더 생각해보면 그러기 위해서는 upper contour set이 항상 **Convex set**이어야 하고, 따라서 효용 함수가 **Quasi-concave function**이어야 한다.
  - Strictly convex prefrence를 represent하는 효용 함수는 Strictly quasi-cocnave function.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ac07130a3-099f-4e89-aef0-41a944b0e60c%3Aconvexity_of_prefences.png?table=block&id=332beff3-7473-8067-bb25-d75fa4346692" alt="convexity_of_prefences" width=500>

<span style="color:gray">IC 위의 두 점을 linear interpolation 한 점이, 기존 두 점보다 더 높은 효용을 주는 IC 위의 점인지 여부에 따라 convexity가 결정된다.</span>

## Quasi-linear preference

---

> **Definition**  
> Preference relation $\succeq$ is `quasi-linear` if, for $e_1 = (1, 0, 0, ..., 0)$ and $\alpha \in \mathbb{R}$,  
> (i) $\textbf{x}\_1 \sim \textbf{x}\_2 \Leftrightarrow \textbf{x}\_1 + \alpha e_1 \sim \textbf{x}\_2 + \alpha e_1$  
> (ii) $\textbf{x}_1 + \alpha e_1 \succ \textbf{x}\_1 \ \text{where} \ \alpha > 0$

- 수업에서 사용한 정의를 보면 preference에 대해서는 굉장히 알쏭달쏭 하지만, 효용 함수의 관점에서 생각해 본다면 _최소 하나의 재화에 대해 linear한 효용 함수_ 를 떠올리면 된다.  
  ($\text{i.e.} \ u(x_1, x_2) = v(x_1) + x_2$)
- 예를 들어 $u(x_1, x_2) = x_1 x_2$ 에 대해 indifferent한 두 consumption bundle (1,2), (2,1) 에 대해 위의 $(i)$ 를 적용해보면, (1+1,2)와 (2+1,1) 은 indifferent하지 않다. 즉 $u(x_1, x_2) = x_1 x_2$ 는 quasi-linear하지 않다.

## Homothetic preference

---

> **Definition**  
> Preference relation $\succeq$ is `homothetic` if $\textbf{x}\_1 \sim \textbf{x}\_2 \Leftrightarrow t \cdot \textbf{x}\_1 \sim t \cdot \textbf{x}\_2 \ \text{for all} \ t > 0$

- 이것도 시각화를 통한 이해가 훨씬 직관적이다.
- $f(t x_1, t x_2) = t^k f(x_1, x_2) \ \forall t > 0$ 를 만족하는 함수 $f(x_1, x_2)$ 를 **homogeneous function of degree $k$** 라고 한다. Preference가 homothetic 하다면, 그것을 represent하는 효용 함수는 homogeneous function of (some) degree $k$ 이다.

## 예시

---

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|}
  \hline
    \textbf{Utility function} & x_1 + x_2 & x_1 x_2 & x_1^2 x_2^2 & \sqrt{x_1} \sqrt{x_2} & x_1 + \sqrt{x_2} & \min\{x_1, x_2\} \\
  \hline
    \text{Monotone preference} & O & O & O & O & O & O \\
  \hline
    \text{Strongly monotone preference} & O & O & O & O & O & X \\
  \hline
    \text{Locally non-satiated preference} & O & O & O & O & O & O \\
  \hline
    \text{Convex preference} & X & O & O & O & O & O \\
  \hline
    \text{Strictly convex preference} & X & O & O & O & X & X \\
  \hline
    \text{Quasi-linear preference} & O & X & X & X & O & X \\
  \hline
    \text{Homothetic preference} & O & O & O & O & X & O \\
  \hline
    \text{Concave function} & O & X & X & O & O & O \\
  \hline
    \text{Strictly concave function} & X & X & X & O & X & X \\
  \hline
    \text{Quasi-concave function} & O & O & O & O & O& O \\
  \hline
    \text{Strictly quasi-concave function} & X & O & O & O & X & X \\
  \hline
\end{array}
$$

- 예를 들어 $u(x_1, x_2) = \min\{x_1, x_2\}$ _로 표현되는 preference_ 는 monotone하지만 strongly monotone하지 않다.
- $u(x_1, x_2)=x_1 x_2$ 는 concave가 아님과 동시에 convex도 아니다. 오직 (strictly) quasi-concave한 함수일 뿐이다.
- 2~4번째 함수는 모두 Cobb-Douglas utility function $u(x_1, x_2)=x_1^a x_2^b$ 인데, 이 경우
  - Strictly quasi-concave if $a,b>0$
  - Concave if $a+b \leq 1$
  - Strictly concave if $a+b < 1$
    와 같이 판단 가능하다.

<br><br>

2026.03.29

## References

---

[https://en.wikipedia.org/wiki/Monotone_preferences](https://en.wikipedia.org/wiki/Monotone_preferences)
[https://en.wikipedia.org/wiki/Convex_preferences](https://en.wikipedia.org/wiki/Convex_preferences)
