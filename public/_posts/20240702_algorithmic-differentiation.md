---
title: 'PyTorch에서 함수를 미분하는 방법: Algorithmic Differentiation'
excerpt: 'PyTorch에서는 어떻게 미분한 값을 계산할까?'
coverImage: ''
date: '2024-07-02T04:22:30.322Z'
categories: [DS, PyTorch]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## torch.grad

---

2024.06.03

PyTorch에서는 다음과 같이 함수의 특정 지점에서의 기울기 값을 확인할 수 있다.  
from: [https://stackoverflow.com/questions/62559008/how-the-gradient-is-calculated-in-pytorch](https://stackoverflow.com/questions/62559008/how-the-gradient-is-calculated-in-pytorch)

```python
import torch
x = torch.tensor(2.0)
y = torch.tensor(2.0)
w = torch.tensor(3.0, requires_grad=True)
# forward
y_hat = w * x
s = y_hat - y
loss = s**2
#backward
loss.backward()
print(w.grad)
```

그렇다면 파이토치에서는 어떻게 미분을 해서 기울기를 구하는 것일까?
[https://discuss.pytorch.org/t/how-does-autograd-work/61702/5](https://discuss.pytorch.org/t/how-does-autograd-work/61702/5)를 보자.

Automatic differentiation, Algorithmic differentiation라고 부른다.
[https://en.wikipedia.org/wiki/Automatic_differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation)

파이토치 레포에서 [https://github.com/pytorch/pytorch/blob/main/tools/autograd/derivatives.yaml](https://github.com/pytorch/pytorch/blob/main/tools/autograd/derivatives.yaml)를 확인해보면 여러 elementary function에 대한 도함수를 직접 입력해두었다. 이걸 잘 활용해서 하는 것 같은데.. 아직 잘 모르겠네

<br/><br/>

2024.
