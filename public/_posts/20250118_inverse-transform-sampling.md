---
title: 'Inverse transform sampling'
excerpt: ''
coverImage: ''
date: '2025-01-18T19:01:48.000Z'
categories: [Mathematics, Statistics]
tags: ['Inverse transform sampling']
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## Sampling

---

**샘플링(Sampling)** 은 특정 분포를 따르는 데이터를 생성하는 일이다. 복잡한 확률 분포를 따르게 데이터를 생성한다는 것은 어려운 일이 될 수 있고, 심지어 **확률 분포에 대한 정보인 PDF를 알고 있는 경우에도 그로부터 샘플링을 하는 것은 어려울 수 있다.**

기초적인 확률 분포에 대해서는 여러가지 방법들이 존재한다. 가령 정규 분포의 경우 [numpy는 지구라트 알고리즘을 사용](https://numpy.org/doc/1.25/reference/random/c-api.html)하여 샘플링을 수행한다.

하지만 특정 상황에 필요한 어떤 확률 분포를 따르게 샘플링을 해야 한다면? 당연히 정규 분포에서 샘플링 하듯 간단하게 할 수는 없을 것이고, 특정 확률 분포로부터 샘플링을 하는 여러가지 방법들을 사용해야 한다.

## Inverse transform sampling

---

처음 접한 것이 Inverse transform sampling이다. 특정 분포의 PDF를 알고 있을 경우, 그것의 Inverse CDF를 활용하는 방법이다.  
Inverse CDF는 [0,1]을 정의역으로 가지며, 정의역의 원소들은 그 분포의 정의역 값들과 일대일 대응이 될 것이다.  
따라서 $u \sim \text{Unif}(0, 1)$ 를 샘플링한 후 그에 일대일 대응 되는 값을 샘플링된 데이터로 사용할 수 있다.

생각해보면 [0,1]을 정의역으로 하는 확률 분포는 이것저것 있을텐데, 왜 $\text{Unif}(0, 1)$ 에서 샘플링하는지 의문이 든다.  
이는 어떤 분포를 따르는 확률 변수든 적분을 통해 standard uniform distribution을 따르는 확률 변수로 바꿀 수 있다는 [Probability integral transform](https://en.wikipedia.org/wiki/Probability_integral_transform)에 의한 것이라고...

- inverse CDF가 analytical하게 구해져야 적용 가능. 구할 수 없다는 애초에 적용이 불가능하다.
- 구해져도 이 샘플링 방법은 computationally expensive할 수 있음.

<br/><br/>

2025.01.18
