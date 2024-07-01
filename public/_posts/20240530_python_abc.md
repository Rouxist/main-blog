---
title: 'Abstract Class, abc'
excerpt: '파이썬에서의 추상클래스를 구현하는 법, abc'
coverImage: ''
date: '2024-05-30T16:01:12.000Z'
categories: [Developing, Python]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 2024.05.30

---

## Abstract Class

향후 클래스들을 선언할 때 일관적으로 맞춰갈 형식이 있다면, 추상 클래스로 미리 정해둘 수 있다. 특정 method를 반드시 정의하도록 강제하는 등의 기능을 할 수 있고, 추상 클래스 자체에 대해서는 인스턴스를 만들 수 없다.

[(Song et al., 2021.)](https://github.com/yang-song/score_sde_pytorch){:target=”\_blank”}에서 사용된 [코드](https://github.com/yang-song/score_sde_pytorch/blob/main/sde_lib.py){:target=”\_blank”}를 보면 확률미분방정식들을 클래스로 정의하기 전에 먼저 **SDE**라는 추상클래스를 정의해서 사용했다.

## abc (Abstract Base Classes)

파이썬에서는 클래스를 선언할 때 **abc.ABC 라는 클레스를 상속**하면 해당 클래스는 추상 클래스가 된다.

```python
import numpy as np

class Distribution(abc.ABC):
    __init__(self):
        super().__init__()

    def get_likelihood(self, x):
        pass


class NormalDistribution(Distribution):
    __init__(self):
        super().__init__(N)

    def get_likelihood(self, x):
        return (1/np.sqrt(2 * np.pi * (sigma**2))) * np.exp(-0.5 * (x-mean)**2 / (sigma**2))


test = abc.ABC()                 # 가능 <- ???
func = Distribution()            # 불가능
sigmoid = NormalDistribution()   # 가능

```

왜 abc.ABC는 인스턴스 생성이 가능한 건지는 모르겠다...

### 참고 자료

[https://github.com/python/cpython/blob/3.9/Lib/abc.py](https://github.com/python/cpython/blob/3.9/Lib/abc.py){:target=”\_blank”}  
[https://peps.python.org/pep-3119/](https://peps.python.org/pep-3119/){:target=”\_blank”}

<br/><br/>

2024.05.30
