---
title: '함수란 무엇일까'
excerpt: ''
coverImage: ''
date: '2026-01-05T23:44:35.000Z'
categories: [Mathematics, Algebra]
tags: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

남는 시간 동안 공부해보고 싶었던 것 중 하나가 비트코인의 작동 원리였고, 타원곡선과 유한체에 대해 먼저 살펴보다보니 군(Group), 환(Ring), 체(Field)의 정의를 알아보게 됐다.

그러다 우연히 [함수의 정의에 대한 내용](https://gosamy.tistory.com/384)을 접했는데, 이에 대해서도 먼저 정리해 보았다.

## Function

---

아마 중학교 쯤에 배웠던 기억 속에 남아있는 함수의 의미는, *하나의 입력값을 하나의 출력값으로 바꾸어주는 무언가*였다.

학부에서는 $f:X \rightarrow Y, \ x \mapsto f(x)$ 등 더 다양한 표기를 접했고,

지금 학부를 졸업할 쯤이 되니 함수를 엄밀하게 정의하는 방식은 무엇일까 하는 생각이 들었다.

### Definition (Function)

그래서 함수가 무엇인지에 대한 정의와 관련해서 등장하는 내용들을 무작정 정리해보았다.

> A function $f$ from $X$ to $Y$ 란 (다음의 조건을 만족하는) <span style="color:gray;">Cartesian product</span> $X \times Y$ 의 **subset**이다.
>
> 1. $\forall x \in X \quad \exists y \in Y \quad s.t. (x,y) \in f$
>    - (또는, '$f$ 의 도메인은 $X$ 이다'. 이 또한 X의 모든 원소에 대해 함숫값이 정의되어 있어야 한다는 의미)
> 2. Well-defined: $x_1 = x_2 \ \Rightarrow \ f(x_1) = f(x_2)$

- $y=f(x) \Leftrightarrow (x, y) \in f$. 같은 의미이다.

- 그리고 $(X, Y, f)$ 와 같이 셋을 묶은 triple로 함수를 정의하기도 한다.

- 1번 관련: 물론 각 element $x \in X$ 는 unique한 $b$ 로 맵핑되어야 한다는 점도 있다. $f(x_1)$ 값이 $y_1$ 이었다가 $y_2$ 이었다가 이러면 안됨.

- 2번 관련: **Well-defined** 라는 것은 위상수학1 수업에서도 한 번 들어본 적이 있었다.

  어떤 metric space의 completion이 항상 존재성할 수 있음을 논하기 위해 어떠한 함수를 임의로 정의하고, 이 함수의 *well-definedness*를 따지는 것이었다.

  이때는 위의 1번(모든 $x$ 값에 대해 각각 함숫값이 존재하는가?)과 2번($x_1=x_2$ 이면 $f(x_1)=f(x_2)$ 인가?)을 교수님께서 모두 보여주셨다.

## 기타 용어 정리

---

- Domain($X$), Codomain($Y$), range($f(X)$)
- Image ($f(X)$), Pre-image($f^{-1}(Y)$)
- Injective (one-to-one)
  - $f(x_1)=f(x_2) \Rightarrow x_1=x_2$ 로 정의된다. (well-defined와 정의가 반대이다. [참고](https://math.stackexchange.com/questions/190628/in-group-theory-proofs-what-is-meant-by-well-defined))
  - 또는 '_일대일 함수_'
- Surjective(onto)
  - $\forall y \in Y$, $f(x)=y$ 인 $x$ 가 하나 이상 존재
  - 즉, $Y$ 의 모든 원소가 preimage인 경우 (Codomain=Range)
- Bijective (one-to-one correspondence)
  - 위 둘 모두에 해당.
  - 또는 '_일대일 대응_'

<br><br>

2026.01.05

## References

---

[https://gosamy.tistory.com/384](https://gosamy.tistory.com/384)
[https://math.stackexchange.com/questions/60365/what-is-the-set-theoretic-definition-of-a-function](https://math.stackexchange.com/questions/60365/what-is-the-set-theoretic-definition-of-a-function)
