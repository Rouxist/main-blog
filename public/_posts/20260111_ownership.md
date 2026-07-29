---
title: '컴파일 타임 / 런타임'
excerpt: ''
coverImage: ''
date: '2026-01-11T17:19:00.000Z'
categories: [Dev, Crypto]
tags: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

## 컴구

---

### 메모리

<s>최근 가격 급등한</s> 램을 말한다.

메모리 공간을

코드(code) 영역, 데이터(data) 영역, 스택(stack) 영역, 힙(heap) 영역

4개로 나눔

### Virtual Memory vs Physical Memory

**데이터** 영역에는 전역 변수, static 변수가 저장됨

컴파일을 통해 할당되고, 프로그램이 다 종료되기 전까지 할당된 상태로 유지

**스택** 영역에는 함수와 관련된 지역변수, 매개변수, 그리고 struct 등에 대한 정보가 저장된다

ㅏㅏㅏ

```
int a, b, c; // ...(a)
int arr[10];

int func(int par1){

}

struct Person {
    char name[20];
    int age;
    char address[100];
};

Person a =
```

뭐 이런 변수들은 컴파일만 해도 메모리에의 스택 영역에 할당이 된다

그러니까 `gcc main.c -o a.exe` << 이런 식으로 컴파일을 하면 스택에 들어간다

**힙** 영역은 malloc() realloc() free() 등으로 직접 관리되는 것들

e.g. struct로 스택 정의하고 인스턴스?같은 것을 1000개 만들고 free() 안하면 힙에 다 쌓인다

##

---

<br><br>

2026.01.11

## References

---

[https://velog.io/@dhldksgehl/메모리의-구조-스택-vs.-힙](https://velog.io/@dhldksgehl/메모리의-구조-스택-vs.-힙)
