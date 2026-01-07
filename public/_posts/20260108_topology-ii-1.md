---
title: 'II.1 Topological Spaces'
excerpt: ''
coverImage: ''
date: '2026-01-08T00:25:44.000Z'
categories: [Mathematics, Topology]
tags: [Topology, Topological Space]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## II. Topological Spaces

---

위상공간에 대해 다루기 시작한다.

### Definition (Topology)

> Set $X$ 에 대해 다음을 만족하는 family $\mathscr{T}$ of subsets of $X$ 를 `Topology`라고 한다.
>
> 1. $X, \emptyset \in \mathscr{T}$
> 2. Any union of sets in $\mathscr{T}$ belongs to $\mathscr{T}$
> 3. Any finite intersection of sets in $\mathscr{T}$ belongs to $\mathscr{T}$

### Definition (Topological Space)

> A `topological space` is a pair $(X,\mathscr{T})$, where $X$ is a set and $\mathscr{T}$ is a topology for $X$.

- 이제 $\mathscr{T}$ 의 원소인 집합들은 **open**이다.

  - Metric Space에서는 일단 metric이 정의되고 나면 1. any union of open set is open set, 2. finite intersection of open set is open set 이라는 것을 증명한 적이 있었는데
  - Topological Space는 반대로, **'위의 두 가지 성질을 가지고 있다 -> Topological space이다.'** 의 순서로 정의를 한다.

- $X$ 의 subset $S$ 는 $X \backslash S$ 가 open 이면 **closed**이다.

  - 이 내용이 Metric Space에서는 이게 하나의 characterization이었지만, Topological Space에서는 이것이 정의가 된다.

#### Example (Trivial topology or Indiscrete topology)

Set $X$ 에 대해 **Trivial toplogy**는 $\mathscr{T} = \{ \emptyset, X \}$ 와 같다.

- 정의에 따라 어떤 Topology든 위 두 개의 원소는 꼭 포함되어야 하고, 반대로 저 두 개의 원소만으로 topology를 만들 수 있다.

#### Example (Discrete topology)

Set $X$ 의 모든 subset이 포함된 topology이다.

#### Example (Metric topology)

Metric Space의 경우 모든 open set들을 모으면 topology를 만들 수 있고, 이를 **Metric topology**라 한다.

어떠한 metric과 관련된 metric topology가 동반된 set $X$ 는 **metrizable**이다.

그리고 Discrete topology는 언제나 metrizable이다.

#### Example (Cofinite topology)

Set $X$ 의 subset $U$ 에 대해 $X \backslash U$ 가 finite인 모든 $U$ 를 모으고, $\emptyset$ 까지 포함시키면 **Cofinite topology**가 된다.

- 이런 건 왜 정의했을까 싶었지만, 이후 간간이 등장한다. 예를 들어 cofinite topology를 가지는 모든 Topological space는 compact하다.

### Definition (Interior point)

> **Definition**  
> $X$ 의 subset $S$ 에 대해 다음을 만족하는 open set $U$ 가 존재하면, $S$ 를 point $x$ 의 `Neighborhood` 라 한다.
>
> $x \in U$ and $U \subset S$

<br/>

> **Definition**  
> $X$의 subset $S$ 가 $x \in X$ 의 neighborhood일 경우, point $x$ 를 $S$ 의 `Interior point`라 한다.

- Metric Space에서의 그것과 동일하게 또한 $S$ 의 모든 interior point들의 집합을 $\text{int}(S)$ 라 표기하고, **interior** 라 부른다. 자명하게 $\text{int}(S) \subset S$ 이다.

### Theorems

- $X$ 의 subset $S$ 가 open이다 $\Leftrightarrow$ $S=\text{int}(S)$
- $\text{int}(\text{int}(S))=\text{int}(S)$

### Definition (Adherent point)

> **Definition**  
> $X$ 의 subset $S$ 가 point $x \in X$ 의 모든 neighborhood와 만날 경우, point $x$ 를 subset $S$ 에 대해 `Adherent point` 라 한다.

$S$ 의 모든 adherent point들의 집합을 $\overline{S}$ 라 표기하고, **closure** 라 부른다. 자명하게 $S \subset \overline{S}$ 이다.

### Theorems

- $X$ 의 subset $S$ 가 closed다 $\Leftrightarrow$ $S=\overline{S}$
- $\overline{\overline{S}}=\overline{S}$

### Definition (Convergence of sequence)

> **Definition**  
> Topological space $X$ 안의 수열 $\{ x_i \}$ 는 다음을 만족할 경우 $x \in X$ 로 수렴한다.
>
> $\forall \ \text{neighborhood} \ \ U \ \text{of} \ \ x, \ \ \exists N \ s.t. \ \ x_i \in U \ \ \forall i > N$

- Metric Space에서와 다르게 극한이 등장하지 않는다.

### Definition (Boundary)

> **Definition**  
> point $x \in X$ 가 $X$ 의 subset $S$ 에 대해 $S$ 와 $X \backslash S$ 모두에 대해 adherent point일 경우 `boundary point`라 한다.
>
> `boundary point 들의 집합을 `boundary`라 하고 $\partial S$ 라 표기하며, $\partial S = \overline{S} \cap (\overline{X \backslash S})$ 이다.

- 2차원 평면의 집합의 **테두리**를 떠올려볼 수 있다.

<br><br>

2026.01.08

## References

---

Introduction to Topology, 2ed (T.W. Gamelin and R.E. Greene)
