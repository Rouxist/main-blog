---
title: 'Preference'
excerpt: ''
coverImage: ''
date: '2026-03-07T13:49:07.000Z'
categories: [Economics, Microeconomics]
tags: [Consumer Theory]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

대학원 1주차를 보내며 이번 상반기는 미시경제학에 파묻히는 시간이 되겠음을 직감했다.

그리고 어제 어제부터 대학원 미시경제학 수업 노트 및 학부에서 봤던 교재를 뒤져보면서, 학부에서 알고 왔어야 했을 것 같은 (하지만 이제 뒤늦게 처음 본...) 여러 개념들을 정리했다.

## Preference relation

---

### Definition (Preference relation)

> **Definition**  
> set $X$ 의 element인 consumption bundles $\textbf{x}_1, \textbf{x}_2 \in \mathbb{R}^n$ 에 대해, '$\textbf{x}_1$ is at least ast good as $\textbf{x}_2$' 이면 $\textbf{x}_1 \succsim \textbf{x}_2$ 라고 표기한다. $\succsim$ 은 `prefernce relation` 이라 한다.

- Preference relation $\succsim$ 은 일종의 Binary relation 이다 \[1\].
- 이를 두고 '$\textbf{x}_1$ is **weakly preferred** to $\textbf{x}_2$ if $\textbf{x}_1 \succsim \textbf{x}_2$.'라 한다.

이후 $\succ$, $\sim$ 을 정의할 수 있다.

> **Definition**  
> `strictly preferred` relation : $\succ$ 은 $\textbf{x}_1 \succ \textbf{x}_2 \Leftrightarrow \textbf{x}_1 \succsim \textbf{x}_2 \ \text{but not} \ \textbf{x}_2 \succsim \textbf{x}_1$ 와 같이 정의된다.
>
> `indifference` relation : $\sim$ 은 $\textbf{x}_1 \succ \textbf{x}_2 \Leftrightarrow \textbf{x}_1 \succsim \textbf{x}_2 \ \text{and} \ \textbf{x}_2 \succsim \textbf{x}_1$ 와 같이 정의된다.

### Definition (Rationality)

대부분의 미시경제학 이론에서는 개인의 선호에 대해 rationality가 충족되는 경우를 다룬다.

> **Definition**  
> Preference relation $\succsim$ 는 다음 두 성질을 가지면 **rational**하다고 한다.
>
> 1. **completeness**: 두 consumption bundle $\textbf{x}_1, \textbf{x}_2$ 에 대해 선호는 항상 존재한다. ($\forall \textbf{x}_1, \textbf{x}_2 \in X$)
> 2. **transitivity**: $\textbf{x}_3 \succsim \textbf{x}_2 \wedge \textbf{x}_2 \succsim \textbf{x}_1 \Rightarrow \textbf{x}_3 \succsim \textbf{x}_1$ ($\forall \textbf{x}_1, \textbf{x}_2, \textbf{x}_3 \in X$)

- completeness: '둘 다 똑같이 좋은데...' 는 되지만 _둘 중에 뭐가 좋은지 잘 모르겠는데..._ 는 안 된다.
- transitivity: cycle하면 안 된다. _해원이보다 설윤이가 좋고, 설윤이보다 규진이가 좋고, 규진이보다 해원이가 좋고, ..._ 이런 식으로 순환하는 경우를 애초에 제외하기 위함이다.

Preference relation을 이용하면 여러 consumption bundle에 대한 선호를 비교할 수는 있지만, 한 bundle이 다른 bundle보다 _얼마나_ 좋은지에 대해서는 논할 수 없다. (=Ordinal) 따라서 <s>비로소</s> 효용 함수의 필요성이 느껴질 수 있다.

### Definition (Utility function)

> **Definition**  
> 함수 $u: X \rightarrow \mathbb{R}$ 가 다음을 만족하면 $u$ 는 preference relation $\succsim$ 을 나타내는(represent) `Utility function` 이다.
>
> $\forall \textbf{x}_1, \textbf{x}_2 \in X, \ \textbf{x}_1 \succsim \textbf{x}_2  \Leftrightarrow u(\textbf{x}_1) \geq u(\textbf{x}_2)$

- 따라서 preference relation $\succsim$ 을 나타내는 효용 함수는 유일하게 존재하지 않는다. (= not unique)
- _Any_ strictly increasing function transformation에 대해 invarint한 효용 함수를 **Ordinal Utility function**이라고 한다.

### Proposition (preference relation을 효용 함수로 나타내기 위한 필요 조건)

> **Proposition**  
> Preference relation $\succsim$ 은 rational해야만(only if) Utility function으로 나타내질(represented) 수 있다.

## Consumption bundle의 대소 비교 기호

---

미시경제학 강의노트 첫 페이지부터 헷갈렸던 부분이 이 기호이다.

두 consumpton bundles $\textbf{x}_1 = (x_{11}, ..., x_{1n})^{\top}, \textbf{x}_2 = (x_{21}, ..., x_{2n})^{\top} \in \mathbb{R}^n$ 에 대해

$\textbf{x}_1 \geq \textbf{x}_2 \ \ \text{if} \ x_{1i} \geq x_{2i} \ \forall i$

$\textbf{x}_1 \gg \textbf{x}_2 \ \ \text{if} \ x_{1i} > x_{2i} \ \forall i$

라고 한다. 또한

$\textbf{x}_1 \geq \textbf{x}_2 \ \text{and} \ \textbf{x}_1 \ne \textbf{x}_2  \Leftrightarrow x_{1i} \geq x_{2i} \ \forall i \ \text{and} \ x_{1j} > x_{2j} \ \text{for some} \ j$

이기도 하고, 이 셋 ($\geq, \gg, \geq \text{and} \ne$)은 모두 다른 의미이다.

위의 preference relation($\succsim$)은 consumptoin bundle 내의 재화들을 종합한 _효용끼리_ 비교하는 것이었지만, 이건 consumption bundle 내의 **재화 각각**의 _소비량끼리_ 비교하는 것이다.

## Monotonicity

---

Preference relation과 효용함수를 함께 보는 예시들을 보다보면 오히려 헷갈리게 될 수 있는데, 그 와중에 학부에서 보던 미시경제학 책을 다시 읽다가 알게 된 개념이 Monotonicity(단조성)였다. \[2\]

> **Definition**  
> (Monotonicity 가정 하에) $\textbf{x}_1 \geq \textbf{x}_2$ 이고 $\textbf{x}_1 \ne \textbf{x}_2$ 이면 $u(\textbf{x}_1) > u(\textbf{x}_2)$ 이다.

### 선호 예시

Case 1. $\textbf{x}_1 = (3, 2)^{\top}, \textbf{x}_2 = (3, 1)^{\top}$

이 경우는... $x_{11}=x_{21}$ 이고 $x_{12} > x_{22}$ 이므로 당연히 $\textbf{x}_1$ 의 효용이 더 높아야 할 것으로 보인다.

라고 말할 수 있는 이유가 Monotonicity 가정 때문이다. <span style="color:gray">(지금까지는 '당연히 그래야겠지...?' 했지만 이제는 '단조성 가정이 있어서 그렇다!' 라고 할 수 있게 되었다.)</span>

따라서 이 경우 $\textbf{x}_1 \succ \textbf{x}_2$ 이다.

Case 2. $\textbf{x}_1 = (3, 2)^{\top}, \textbf{x}_2 = (2, 1)^{\top}$

이 경우에도 $\textbf{x}_1 \succ \textbf{x}_2$ 이다.

Case 3. $\textbf{x}_1 = (4, 2)^{\top}, \textbf{x}_2 = (1, 3)^{\top}$

이렇게 각 재화가 엇갈리면 이제 알 수 없음이 된다.

효용 함수가 대충 $u(\textbf{x}_1, \textbf{x}_2) = \textbf{x}_1 + \textbf{x}_2$ 와 같이 주어졌다면 $\textbf{x}_1 \succ \textbf{x}_2$ 라고 결론낼 수는 있다.

<br><br>

2026.03.07

## References

---

\[1\] Andreu Mas-Colell, Michael Whinston, and Jerry Green, Microeconomic Theory,
Oxford University Press, 1995.

\[2\] 김영산・왕규호, 미시경제학, 박영사, 2020, 105쪽.
