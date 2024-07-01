---
title: 'Torchvision'
excerpt: 'torchivision에서 pretrained model 가져다 쓰기'
coverImage: ''
date: '2024-05-30T00:35:07.322Z'
categories: [DS, PyTorch]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/posts/test/cover.PNG'
alert: ''
---

## torchvision.models

---

Torchvision에서는 [몇 가지 모델 구조들에 대한 pre-trained weights](https://pytorch.org/vision/stable/models){:target=”\_blank”}를 제공하고 있다.

여러가지 모델들 중 VGG16을 가져다 쓴다면,

```python
from torchvision.models import vgg16_bn, VGG16_BN_Weights
from copy import deepcopy
import math

pretrained_vgg_16 = vgg16_bn(weights=VGG16_BN_Weights.DEFAULT)
full_vgg = deepcopy(pretrained_vgg_16.features[:])
```

이 상태에서 `full_vgg`를 출력해보면 다음과 같다.

```
Sequential(
  (0): Conv2d(3, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (2): ReLU(inplace=True)
  (3): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (4): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (5): ReLU(inplace=True)
  (6): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
  (7): Conv2d(64, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (8): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (9): ReLU(inplace=True)
  (10): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (11): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (12): ReLU(inplace=True)
  (13): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
  (14): Conv2d(128, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (15): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (16): ReLU(inplace=True)
  (17): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (18): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (19): ReLU(inplace=True)
  (20): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (21): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (22): ReLU(inplace=True)
  (23): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
  (24): Conv2d(256, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (25): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (26): ReLU(inplace=True)
  (27): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (28): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (29): ReLU(inplace=True)
  (30): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (31): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (32): ReLU(inplace=True)
  (33): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
  (34): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (35): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (36): ReLU(inplace=True)
  (37): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (38): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (39): ReLU(inplace=True)
  (40): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
  (41): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
  (42): ReLU(inplace=True)
  (43): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
)
```

이제 `full_vgg`의 각 레이어들은 인덱싱이나 슬라이싱이 가능하다.

```
# full_vgg[10]

Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))

# full_vgg[10].weight.shape

torch.Size([128, 128, 3, 3])

# full_vgg[10].weight[0]

Parameter containing:
ttensor([[[-0.0189, -0.0044, -0.0155],
         [-0.0071,  0.0066,  0.0012],
         [ 0.0211,  0.0375,  0.0270]],

        [[-0.0474, -0.0388, -0.0478],
         [-0.0404, -0.0436, -0.0458],
         [-0.0353, -0.0491, -0.0395]],

        [[ 0.0035,  0.0046,  0.0037],
         [ 0.0043,  0.0052,  0.0044],
         [ 0.0037,  0.0045,  0.0039]],

        ...,

        [[ 0.0092,  0.0127, -0.0115],
         [-0.0162, -0.0017, -0.0238],
         [-0.0105, -0.0083, -0.0093]],

        [[-0.0368, -0.0303, -0.0325],
         [-0.0324, -0.0234, -0.0286],
         [-0.0261, -0.0190, -0.0227]],

        [[-0.0063, -0.0425,  0.0260],
         [-0.0130,  0.0007, -0.0175],
         [-0.0087,  0.0012, -0.0339]]], grad_fn=<SelectBackward0>)
```

&nbsp;

2024.05.30
