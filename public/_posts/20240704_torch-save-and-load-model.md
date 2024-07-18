---
title: '그냥 알게 된 것들'
excerpt: 'pytorch, 그리고 github에서 일부 디렉토리만 clone하기'
coverImage: ''
date: '2024-07-04T00:01:12.000Z'
categories: [Data Science]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 2024.05.29

---

## Torch

### pretrained model from torchvision

pretrained VGG

### state_dict

맞지 않을 경우

## Library

### ML Collections

https://pypi.org/project/ml-collections/

## Git

repo의 일부 directory만 clone해오기

```bash
# Cloning lightning_modules
! mkdir lightning_modules
%cd lightning_modules

! git init
! git remote add -f origin https://github.com/GBATZOLIS/conditional_score_diffusion.git
! git config core.sparseCheckout true
! echo "lightning_modules" >.git/info/sparse-checkout
! git pull origin master

%cd ..
! mv ./lightning_modules/lightning_modules/* ./lightning_modules
! rm -rf ./lightning_modules/lightning_modules


# Clonging lightning_callbacks
! mkdir lightning_callbacks
%cd lightning_callbacks

! git init
! git remote add -f origin https://github.com/GBATZOLIS/conditional_score_diffusion.git
! git config core.sparseCheckout true
! echo "lightning_callbacks" >.git/info/sparse-checkout
! git pull origin master

%cd ..
! mv ./lightning_callbacks/lightning_callbacks/* ./lightning_callbacks
! rm -rf ./lightning_callbacks/lightning_callbacks


# Clonging sampling
! mkdir sampling
%cd sampling

! git init
! git remote add -f origin https://github.com/GBATZOLIS/conditional_score_diffusion.git
! git config core.sparseCheckout true
! echo "sampling" >.git/info/sparse-checkout
! git pull origin master

%cd ..
! mv ./sampling/sampling/* ./sampling
! rm -rf ./sampling/sampling

# BaseSdeGenerativeModel.py 코드가 이상해서 여기에도 복붙해줌
! mkdir ./lightning_modules/sampling
! cp -r "sampling" "lightning_modules/"
```

<br/><br/>

2024.05.29

## References

---
