---
title: 'Second Order Finite Difference'
excerpt: ''
coverImage: ''
date: '2026-01-04T10:45:09.000Z'
categories: [Mathematics, Numerical Analysis]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

유한차분법 복습을 하던 중 도함수의 근사는 forward/backward/central difference가 있지만 이계도함수의 근사는 하나의 식만 있는 걸 보면서, '그럼 도함수와 이계도함수의 정의도 이런 식인가?' 라는 생각이 들었다. 그러다보니 '그럼 애초에 이계도함수의 정의는 무엇이었나' 하는 생각이 들어서 돌아와보기로 했다.

## 도함수의 정의

---

도함수에 대해 배울때 두 가지 형태 <span style="color:gray;">($\footnotesize \lim_{h \rightarrow 0}{\frac{f(x+h)-f(x)}{h}}, \ \lim_{h \rightarrow 0}{\frac{f(x)-f(x-h)}{h}}$)</span> 를 배웠고, symmetric derivative <span style="color:gray;">$\footnotesize \lim_{h \rightarrow 0}{\frac{f(x+h)-f(x-h)}{2h}}$</span> 라는 것의 존재도 배웠다.

<span style="color:gray;">derivative는 존재하지 않지만 symmetric derivative는 존재하는 뭐 그런 경우도 있다는 것 ($y = |x|$)도 복습</span>

위 세 가지가 Forward / Backward / Central <span style="color:gray;">(first-order)</span> Finite Difference의 정의와 동일한 형태이다.

## 이계도함수의 정의

---

함수 $f(x)$ 의 도함수 $f'(x)$ 가 미분 가능할 때,

$f''(x) = \lim_{k \rightarrow 0}\frac{f'(x+k)-f'(x)}{k}$

즉 정의 자체가 _도함수의 도함수_ 이다.

<span style="color:gray;">위 식에 $f'(x) = \lim_{h \rightarrow 0} \frac{f(x+h) - f(x)}{h}$ 를 굳이 대입 해본다면</span>

<span style="color:gray;">$f''(x) = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} \frac{\frac{f(x+k+h) - f(x+k)}{h}- \frac{f(x+h) - f(x)}{h}}{k}$ 와 같이 정리가 가능하고</span>

<span style="color:gray;">고등학교에서 처음 도함수 공식을 배울 때처럼, toy example로 예를 들어 $f(x)=x^2$ 를 대입해서 이계도함수를 구해보면</span>

<span style="color:gray;">$f''(x) = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} \frac{\frac{(x+k+h)^2 - (x+k)^2}{h}- \frac{(x+h)^2 - x^2}{h}}{k}$</span>

<span style="color:gray;">$f''(x) = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} \frac{x^2 + k^2 + h^2 + 2xk + 2kh + 2xh - x^2 -2xk - k^2 - (x^2 + 2xh + h^2 - x^2)}{hk}$</span>

<span style="color:gray;">$f''(x) = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} \frac{k^2 + 2xk + 2kh -2xk - k^2}{hk} = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} \frac{2kh}{hk} = \lim_{k \rightarrow 0} \lim_{h \rightarrow 0} 2 = 2$</span>

<span style="color:gray;">와 같이 이계도함수가 잘 구해지는 것을 알 수 있다. <s>이런 걸 딱히 해볼 필요는 없다는 걸 머리로는 알아도 막상 해봤을 때 진짜 되는 걸 보면 신기하다</s></span>

또한 이계도함수에 대해서도 [Second Symmetric Derivative](https://en.wikipedia.org/wiki/Symmetric_derivative#The_second_symmetric_derivative)라는 정의가 존재하고, 이것이 2계 유한차분법에 쓰이는 식과 동일하게 생겼다.

## Taylor Series로 유도하는 Finite Difference

---

### Second Order Finite Difference는 왜 저런 형태를 주로 쓸까

$f''(x) \approx \frac{\frac{f(x+h)-f(x)}{h}-\frac{f(x)-f(x-h)}{h}}{h}$

사실 <s>모든 것의 시작이자</s> 가장 의문이었던 것은 이거였다.

First Order는 Forward, Backward, Central 모두 다루는데 Second Order는 왜 하필 저 식만이 집중적으로 쓰일까?

그리고 $x-k$ 부터 $x+k$ 까지 개입하는데 왜 분모는 꼭 $2h^2$ 가 아닌 $h^2$ 이어야만 하는 걸까?

구글링을 하다보면 말장난같은 설명도 많았지만, **Taylor Expansion**에서 시작하면 가장 괜찮은 form이 위와 같음을 납득할 수 있다.

처음 배우는 Taylor Expansion은 함수 $f(x)$ 를 $x=a$ 기준으로 근사하면 $f(x) = f(a) + \sum_{i=1}^{\infty}\frac{f^{(n)}}{n!}(x-a)^n$ 와 같이 나타낼 수 있다는 것이고, 이와 유사하게 $f(x+h)$ 를 $x=x$ 기준으로 근사하면

$f(x+h) = f(x) + f'(x) \cdot h + \frac{f''(x)}{2!}\cdot h^2  + \frac{f'''(x)}{3!}\cdot h^3  + \frac{f''''(x)}{4!}\cdot h^4 \cdots$

와 같이 써낼 수 있다. 이걸 그냥 정리해서

$$
\begin{aligned}
  f(x+h) - f(x) - f'(x) \cdot h &=  + \frac{f''(x)}{2!}\cdot h^2  + \frac{f'''(x)}{3!}\cdot h^3  + \frac{f''''(x)}{4!}\cdot h^4 \cdots \\
  \frac{2(f(x+h) - f(x) - f'(x) \cdot h)}{h^2} & = f''(x) + O(h) \\
\end{aligned}
$$

와 같이 이계도함수를 근사해도 되겠지만, 이러면 오차는 $O(h)$ 이고, forward 방향의 정보만 이용한 근사값이 된다.

이를 보완하기 위해, 이번에는 $f(x-h)$ 를 근사하면

$f(x-h) = f(x) + f'(x) \cdot (-h) + \frac{f''(x)}{2!}\cdot (-h)^2  + \frac{f'''(x)}{3!}\cdot (-h)^3  + \frac{f''''(x)}{4!}\cdot (-h)^4 \cdots$

와 같고, $\ f(x+h)$ 와 $f(x-h)$ 를 근사한 식 두 개를 변끼리 더하면

$$
\begin{aligned}
  f(x+h) + f(x-h) & = 2 f(x) + 2 \frac{f''(x)}{2!}h^2 + 2 \frac{f''''(x)}{4!}h^4  + \cdots \\
  f(x+h) - 2f(x) + f(x-h) & = f''(x)h^2 + \frac{f''''(x)}{12}h^4  + \cdots \\
  \frac{f(x+h) - 2f(x) + f(x-h)}{h^2} & = f''(x) + \frac{f''''(x)}{12}h^2  + \cdots \\
  \frac{f(x+h) - 2f(x) + f(x-h)}{h^2} & = f''(x) + O(h^2) \\
\end{aligned}
$$

이렇게 식이 유도되며, 오차도 $O(h^2)$ 이 되었다.

### First Order Finite Difference

위와 같은 방식으로 First Order에 대해서도 Taylor Expansion으로부터 식을 유도할 수 있고, 그렇게 했을 때 오차가 $O(h)$ 임을 쉽게 알 수 있다.

<br><br>

2026.01.04

## References

---
