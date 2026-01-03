---
title: 'dy/dx는 분수인가'
excerpt: ''
coverImage: ''
date: '2026-01-04T01:38:41.000Z'
categories: [Mathematics, Calculus]
tags: [Leibniz]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

대학원 입학 전까지 남은 시간 동안, 학부에서 수학을 공부하며 궁금했지만 깊게 생각해보지 못한 주제들을 돌아보려 한다.

짧게 생각해본 결과 첫 번째로는 이 주제에 대해 생각해보는 게 가장 좋은 스타팅포인트가 될 것이라고 결론 내렸다.

## dy/dx는 분수인가

---

### Chain rule

이 의문이 본격적으로 들었던 것은 아무래도 chain rule 때문이었다.

함수 $z=g(x)$ <span style="color:gray;">($g: X \rightarrow Z$)</span> 와 $y=f(x)$ <span style="color:gray;">($g: Z \rightarrow Y$)</span> 가 정의되어 있을 때, $\frac{dy}{dz}$ 와 $\frac{dz}{dx}$ 는 쉽게 알 수 있을 것이다.

그런데 $y$ 를 $x$ 에 대한 함수로 나타낸 $y=f(g(x))$ 를 $x$ 에 대해 미분하고자 하면 상황이 복잡해질 수 있는데, 이를 $\frac{dy}{dz}$ 와 $\frac{dz}{dx}$ 로 해결하는 방법에 대해 다음과 같은 증명을 할 수 있다.

$$
\begin{aligned}
  \frac{d}{dx} f(g(x)) & = \lim_{h \rightarrow 0}{\frac{f(g(x+h))-f(g(x))}{h}} \\
  & = \lim_{h \rightarrow 0}{\frac{f(g(x+h))-f(g(x))}{h} \cdot \frac{g(x+h)-g(x)}{g(x+h)-g(x)}} && \cdots \ \text{\footnotesize(1을 곱하고 극한을 취해도 결과는 같음)} \\
  & = \lim_{h \rightarrow 0}{\frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)} \cdot \frac{g(x+h)-g(x)}{h}} \\
  & = \frac{dy}{dz} \cdot \frac{dz}{dx} \\
\end{aligned}
$$

<br/>

<span style="color:gray;">이때, $\lim_{h \rightarrow 0}{\frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)}} = \frac{dy}{dz}$ 인 이유는:</span>

<span style="color:gray;">$\footnotesize  \Delta g := g(x+h)-g(x)$</span>

<span style="color:gray;">$\footnotesize  \Delta g \rightarrow 0 \because \lim_{h \rightarrow 0} g(x+h)-g(x) = 0 \quad (\because \text{continuity of } g(x))$</span>

<span style="color:gray;">$\lim_{h \rightarrow 0}{\frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)}}=\frac{f(g(x) + \Delta g)-f(g(x))}{\Delta g} = \frac{dy}{dz}$</span>

즉 이러한 증명을 통해 $\frac{dy}{dx} = \frac{dy}{dz} \cdot \frac{dz}{dx}$ 라는 사실을 도출할 수 있다.

### $\frac{dy}{dz} \cdot \frac{dz}{dx}$ 는 약분되는가

문제는 이게 흡사 <span style="color:#6667ab">$\frac{dy}{dz} \cdot \frac{dz}{dx}$ 에서 $dz$ 가 소거되어 $\frac{dy}{dx}$ 가 되고 따라서 $\frac{dy}{dx} = \frac{dy}{dz} \cdot \frac{dz}{dx}$ 인 것 같은 모양새</span>가 된다는 점이다.

하지만 <s>당연히 그럴 리는 없고</s> $\frac{dy}{dx} = \frac{dy}{dz} \cdot \frac{dz}{dx}$ 가 가능한 이유는 위와 같은 증명이 존재하기 때문이고

애초에 분수의 형태로 고안된 라이프니츠의 표기법 **$\frac{dy}{dx}$ 는 애초에 분수가 아니다.** 그냥 외형만 분수와 동일하다.

다만, **분수는 아닌데 분수인 것처럼 상상하면 생각하기가 좀 더 편해지니까 {분수이며 약분도 되는 것}처럼 취급하고, 실제로 저게 되는 이유는 별도의 증명이 가능하기 때문**이라고 스스로 정리했다.

<br/>

## $\frac{dz}{dx} = g(x)$ 는 해체 가능한가

---

수많은 공대생들이 학부 입학 직후 배우는 미적분학1에서는 위와 같은 식을 갑자기 $dz = dx \cdot g(x)$ 와 같이 변형하고

고교 과정에서는 치환적분이라고 부르던 그런 것을 하는 문제들을 풀었다.

<span style="color:gray;">이후에는 Riemann-Stieltjes Integral을 접하며 저걸 다시 만났고</span>

예를 들어 대표 예제인 $\int \frac{\ln{x}}{x} dx$ 는 $\footnotesize g(x) = \ln{x}$ 와 같이 놓고, $\frac{dg}{dx} = \frac{1}{x}$ 이므로 $dg = \frac{dx}{x}$ 와 같이 변형한 후

$$
\begin{aligned}
  \int \frac{\ln{x}}{x} dx & = \int g(x) dg \\
  & = \frac{1}{2} \{g(x)\}^2 + C \\
  & = \frac{1}{2} \{\ln{x}\}^2 + C \\
\end{aligned}
$$

이렇게 문제를 푸는데,

생각해보면 $dg = \frac{dx}{x}$ 같은 것이 없어도, $g(x) = \ln{x}$ 만 있으면 ($\frac{dg}{dx} = \frac{1}{x}$ 이므로)

$$
\begin{aligned}
  \int \frac{\ln{x}}{x} dx & = \int \left( g(x) \cdot \frac{dg}{dx} \right) dx \\
  & = \frac{1}{2} \{g(x)\}^2 + C \\
  & = \frac{1}{2} \{\ln{x}\}^2 + C \\
\end{aligned}
$$

이렇게 풀어내는 것이 가능하다.

즉 $dg = \frac{dx}{x}$ 같은 변형이 없어도 결론에 다다를 수 있지만, <span style="color:#6667ab">($\frac{dg}{dx}$ 가 분수인 것처럼 취급하고) $dg = \frac{dx}{x}$ 같은 변형을 가미해서</span> 풀면 더 생각하기 편하다.

따라서 위의 _$\frac{dy}{dx}$ 는 분수인가_ 의 경우와 동일하게, **실제로 그런 건 아닌데 그런 것처럼 간주하면 생각하기 편리하니까** 그런 양 쓰는 것이라고 스스로 정리했다.

<br/>

## $\int f(x) dx$ 의 $dx$ 는 $f(x)$ 에 곱해져있는 것인가

---

사실 가장 오랜 의문은 이것이었다.

2023년 3월, 데이터사이언스학부로의 전과 직후 첫 학기에 들은 공업수학1 수업에서 교수님께서

$$
\begin{aligned}
\int{\frac{dx}{x}} &= \int{\frac{1}{x}dx} \\
 & = \ln{x} + C \\
\end{aligned}
$$

이런 식으로 문제를 풀어주시는 걸 봤다.

그때는 $dx$ 가 $\frac{1}{x}$ 와 합체되는 걸 보면서 '저게 가능한 게 맞나? $dx$ 는 그냥 $\int$ 뒤에 세트로 붙어있는 상징적인 기호같은 것 아니었나?' 하는 생각이 들었다.

결론은 이것도 마찬가지로, **<span style="color:#6667ab">dx가 곱해져있는 양 취급하는 건 하나의 (편리함을 위한?) 표기 방식</span>이고, 실제로 저게 되는 이유는 별도의 증명이 가능하기 때문**인 듯.

## 기타

---

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ad283d115-4139-4284-ac1f-c5650e48f2b9%3Areddit_leibniz_notation.png?table=block&id=2ddbeff3-7473-804d-957d-e018e7bfbf05" alt="reddit_leibniz_notation" width=400>

[[reddit]](https://www.reddit.com/r/learnmath/comments/uyzic7/what_does_the_dx_at_the_end_of_an_integral_mean/)

<br><br>

2026.01.04

## References

---

[https://blog.naver.com/jhson5507/221374147054](https://blog.naver.com/jhson5507/221374147054)
