---
title: 'E[X^4] = 3σ^4'
excerpt: 'Calculating expectation of even power of r.v. that follows normal distribution'
coverImage: ''
date: '2024-05-08T00:35:07.000Z'
categories: [Mathematics, etc]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 2024.05.08

---

[$$(dW_t)^2=dt$$ 인 이유](https://sine-qua-none.tistory.com/33)에 대해 보던 중, 확률변수 $$X \sim \mathcal{N}(0,\sigma^2)$$에 대해 $$\mathbb{E}[X^4]=3\sigma^4$$ 인 이유를 [stackexchange](https://math.stackexchange.com/questions/1917647/proving-ex4-3σ4)까지 찾아봐도 상세한 계산까지 설명된 건 없어서 직접 계산을 해봐야 했다.

$$
\begin{aligned}
\mathbb{E}[X^4] & := \int_{-\infty}^{\infty}{x^4\varphi(x)}dx \\
 & = \int_{-\infty}^{\infty}{x^4 \textstyle \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}}}dx  && \text{(pdf of normal distribution)}\\
 & = \int_{-\infty}^{\infty}{x^3 (\textstyle \frac{\sigma \cdot x}{\sqrt{2\pi}\sigma^2}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = \left[ x^3 \cdot (\textstyle -\frac{\sigma}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}}) \right] _{-\infty} ^{\infty} - \int_{-\infty}^{\infty}{3x^2 (\textstyle -\frac{\sigma}{\sqrt{2\pi}}e^{-\frac{x^2}{2\sigma^2}})}dx && \text{(integration by parts)}\\
 & = 0 - \int_{-\infty}^{\infty}{3x^2 (\textstyle -\frac{\sigma^2}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = 3\sigma^2 \int_{-\infty}^{\infty}{x^2 (\textstyle \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = 3\sigma^2 \cdot \sigma^2 && \text{(definition of variance)} \\
 & = 3\sigma^4
\end{aligned}
$$

나아가서 $$\mathbb{E}[X^{2n}]$$ 에 대한 일반화도 가능하다.

$$
\begin{aligned}
\mathbb{E}[X^{2n}] & := \int_{-\infty}^{\infty}{x^{2n}\varphi(x)}dx \\
 & = \int_{-\infty}^{\infty}{x^{2n-1} (\textstyle \frac{\sigma \cdot x}{\sqrt{2\pi}\sigma^2}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = \left[ x^{2n-1} \cdot (\textstyle -\frac{\sigma}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}}) \right] _{-\infty} ^{\infty} - \int_{-\infty}^{\infty}{(2n-1)x^{2n-2} (\textstyle -\frac{\sigma}{\sqrt{2\pi}}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = 0 - \int_{-\infty}^{\infty}{(2n-1)x^{2n-2} (\textstyle -\frac{\sigma^2}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = (2n-1)\sigma^2 \int_{-\infty}^{\infty}{x^{2n-2} (\textstyle \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{x^2}{2\sigma^2}})}dx \\
 & = (2n-1)\sigma^2 \ \mathbb{E}[X^{2n-2}] \\
 & = (2n-1)\sigma^2 \cdot (2n-3)\sigma^2 \ \mathbb{E}[X^{2n-4}] \\
 & \qquad \vdots \\
 & = (2n-1)!!\sigma^{2n}
\end{aligned}
$$

\+ 이거 쓰다가 알았는데 일반적인 Factorial(!) 말고 Double Factorial(!!)도 존재한다.  
$$\quad e.g. 7!! = 7 \cdot 5 \cdot 3 \cdot 1$$

&nbsp;

2024.05.08  
2024.05.10
