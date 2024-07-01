---
title: 'Euler-Maruyama, Predictor-Corector method'
excerpt: ''
coverImage: ''
date: '2024-06-03T15:30:21.000Z'
categories: [Mathematics, Stochastic Calculus]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/posts/test/cover.PNG'
alert: ''
---

## Euler method

---

2024.06.03

### Euler method

### Euler-Maruyama method

## Predictor-Corrector method

---

2024.06.03

### Explicit method, Implicit method

Explicit method: forward 방향. $y_t$로 $y_{t+1}$ 계산
Implicit method: backward 방향. $y_{t+1}$으로 $y_t$ 계산

보통 Predictor는 Explicit method(ex. Euler method)로, Corrector는 Emplicit method(ex. trapezoidal rule)를 사용.

그러니까 predictor는 $y_t$로 $y_{t+1}$를 계산해내고, corrector는 그 $y_{t+1}$와 $y_t$를 모두 써서 $y_{t+1}$값을 계산.

[https://en.wikipedia.org/wiki/Predictor–corrector_method](https://en.wikipedia.org/wiki/Predictor–corrector_method)

<br/><br/>

2024.07.
