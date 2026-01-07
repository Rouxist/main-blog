---
title: 'Group, Ring, Field'
excerpt: ''
coverImage: ''
date: '2026-01-07T01:19:37.000Z'
categories: [Mathematics, Algebra]
tags: [Group, Ring, Field]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

처음 수학에 재미를 붙였던 고등학교 2학년 당시 수학 선생님께서 직접 보유 중이시던 _에바리스트 갈루아, 한 수학 천재를 위한 레퀴엠_ 이라는 책을 추천 및 빌려주셨었는데

나도 읽었고 친구도 읽었지만 친구는 그래도 항등원, 역원 등 군의 정의에 대해 오래도록 기억한 반면 나는 거의 이해를 못했던 기억이 있다.

큐브와 관해서도 자주 엮이는 만큼 군(Group)이라는 이름은 자주 들어봤지만 어려운 존재였는데, 그걸 학부 졸업하는 지금이 돼서야 다시 돌아본다.

## Group, Ring, Field

---

### Definition (Binary Operation)

`Binary Operation`이란 다음과 같은 \*, 즉 [함수](20260105_definition-of-function)라고 생각할 수 있겠다.

> set $S$ 에 대해 $*: S \times S \rightarrow S$

- 즉 닫혀있지 않은 연산은 Binary Operation이라고 할 수 없다.

  - e.g. 나눗셈은 자연수 집합에 대한 이항 연산이 될 수 없다.

### Group

<span style="color:gray;">위상수학 교재를 참고했다.</span>

> **Definition**  
> Set $G$ 와 mapping<span style="color:gray;">(하나의 Binary Operation)</span> $(a, b) \rightarrow a * b \ $ <span style="color:gray;"> $(*: G \times G \rightarrow G)$ </span> 이 다음 세 가지 공리를 만족하면 `Group`이라고 한다.
>
> 1. Associativity of Multiplication : $a * (b * c) = (a * b) * c \quad \forall a, b, c \in G$
> 2. Existence of Identity(항등원) : $\exist e \in G \ \ s.t. \ \ e * a = a * e = a \quad \forall a \in G$
> 3. Existence of Inverse(역원) : $\text{For each} \ \ a \in G, \ \exist b \in G \ \ s.t. \ \ a * b = b * a = e$

- Group $G$ 는 $(G, *)$ 와 같이 표기할 수 있다.
- 역원은 어떠한 element $a$ 를 **항등원**으로 만들어주는 element를 말하며, $a^{-1}$ 이라고도 표기한다.
- 항등원과 역원은 unique하게 존재한다. <span style="color:gray;">증명은 교재에</span>
- Associativity와 Identity가 만족되면 **Monoid** 라고 한다. 모든 군은 Monoid이며, $G$ is a monoid under \* 라고도 표현한다.

> Group $G$ 가 $\forall a,b \in G \ \ a * b = b * a$ 이면 **Commutative Group** 또는 **Abelian Group**이라 한다.

### Ring

> Set $R$ 이 두 개의 Binary Operation에(e.g. +: operation1, $\cdot$ : operation2) 대하여 다음의 공리를 만족하면 `Ring`이라고 한다.
>
> 1. $R$ 은 operation1에 대하여 Abelian Group이다.
> 2. operation2의 Associativity.
> 3. operation2에 대한 항등원의 존재
> 4. Distributivity : $a \cdot (b + c) = (a \cdot b) + (a \cdot c), \ (a + b) \cdot c = (a \cdot c) + (b \cdot c)$

- 집합에 두 개의 연산이 동반되는 경우에 대해 다루기 시작한다.

  - 보통 operation1을 **Addition**, operation2를 **Multiplication** 이라고 부르지만, 이 정의에 대하여는 _'어떠한 연산 2개에 대하여 하나는 이런 조건들을 만족, 다른 하나는 이런 조건들을 만족하면 된다'_ 라는 뉘앙스를 강조하고자 했다.

- 공리 2와 3을 결합하면 Monoid로 이어지는데, 항등원의 필요성에 대해서는 [변화가 있었던 듯하다.](<https://en.wikipedia.org/wiki/Ring_(mathematics)#Multiplicative_identity_and_the_term_%22ring%22>) 항등원이 모든 원소에 대해 존재해야 한다고 정의에 포함했다면 **Ring with unity**라고 명시하자.

> operation2에 대해 commutativity도 성립하는 Ring은 `Commutative Ring`이라고 한다. ($a \cdot b = b \cdot a$)

### Field

여기서부터는 곱셈의 역원을 정의 후 모든 원소에 대해 곱셈의 역원의 존재성을 요구하므로, 사칙연산이 가능해지기 시작한다.

> Ring with unity $R$ 의 원소 $a \in R$ 에 대해 $ab=ba=1$ 인 $b \in R$ 가 존재하면 $a$ 는 `invertible element`. $b$ 는 `Multiplicaiton inverse`라고 한다.

<br/>

> Commutative Ring with unity $F$ 가 $\forall a \in F\backslash\{0\}, a \ \text{is invertible element}$ 를 만족하면 `Field`라고 한다.

## 연산이란

---

Field의 정의까지 보고 있으면, 그간 내가 초등학교에서부터 배웠던 덧셈과 곱셈이라고 부르는 연산이란 어디에서 유래된 것일까 하는 생각이 든다.

그 전에 또 한 가지 와닿는 건 무언가를 정의하는 방식이 직관과는 반대되는 순서로 것인데, 흡사 [위상공간]()에서 열린 집합을 정의할 때 '이런 조건을 만족하는 것을 잘 찾아서 열린 집합이라고 칭하자' 하는 식이 아니라 <span style="color:gray;">(이건 metric space)</span>

```
일단 어떠한 T 라는 family of sets이 있다고 하자 -> 그 T가 특정 조건들을 만족하면, T의 원소들은 모두 열린 집합이라고 부르자
```

라는 순서로 정의되는 것과 유사하게, Field에서 두 개의 연산을 정의하는 방식도

1. 일단 *어떤 이항 연산 두 개*를 가져온다.

2. 그 둘이 여러 조건들을 만족하는지 확인한다.

이런 느낌.

그리고 1번의 *어떤 이항 연산 두 개*를 정할 때 (페아노 공리계로 정의되는 arithmetic 연산들 중) 덧셈, 곱셈을 가져오면, 실수체의 Addition과 Multiplication으로 기능할 수 있다는 것으로 이해했다.

## Commutator

---

이제 큐브(특히 블라인드)에 사용되는 커뮤테이터(Commutator)라는 것의 이름이 [어디서 유래되었는지 알 수 있다.](https://en.wikipedia.org/wiki/Commutator)

군의 두 element $g, h \in G$ 에 대한 `Commutator`의 정의가 $[g, h] = g^{-1} h^{-1} g h$ 이다.

따라서 왜 수많은 큐브 커뮤테이터 공식들이 모두 *A B A' B'의 형태*를 띄는 것이며, 이런 건 _대체 누가 어떻게 발견해낸 걸까_ 싶었던 10년 이상의 의문도 해결할 수 있다.

<br><br>

2026.01.07

## References

---

Introduction to Topology, 2ed (T.W. Gamelin and R.E. Greene)

[https://gosamy.tistory.com/26](https://gosamy.tistory.com/26)
