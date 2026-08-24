---
title: '2026 UI 디자인 개편'
excerpt: ''
coverImage: ''
date: '2026-08-24T19:40:46.000Z'
categories: []
tags: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: '/assets/blog/og_images/default_og.png'
alert: ''
---

올해 봄학기 종강 쯤부터 미루던 이 웹사이트의 디자인 개편을 실행했다.

하는 김에 그간 기록해뒀던 이 웹사이트의 변천사도 정리했다.

## 역사

---

### Motivation

20살 때 경영학부를 다니면서 MERN 스택과 socket.io으로 열심히 웹사이트 개발을 해보던 2022년이었다.

ChatGPT가 세상에 나오기 직전이었던 그 해의 가을, 다중전공 신청에 필요한 학업계획서에 제출할 포트폴리오를 어떤 형식으로 만들까 고민하다가 처음으로 jekyll을 이용한 github.io 블로그를 만들기 위해 밤을 샜다. 찾아보니 2022년 10월 27일이었는데, 밤을 새고 9시 수업을 들은 후 다시 경영관에서 노트북을 붙들고 수많은 에러를 해쳐나가며 결국 [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 테마로 블로그를 만들 수 있었다.

그렇게 만든 블로그를 1년 이상 잘 사용했다. 그러다가 떠오른 갈망이 있었는데

평소 남들과 대화할 때면 내가 이전에 찍어둔 사진을 핸드폰/아이패드 등으로 보여주면서 얘기하는 경우가 많았기 때문에, 그런 경우에 대비해 평소 사진을 보기 좋게 정리/저장해둘 수 있는 무언가가 있으면 좋겠다고 생각했다. 통상적으로는 블로그를 그런 목적으로 쓰기에 좋아보였고, 하는 김에 아예 블로그로 쓸 웹사이트를 나에게 맞게 하나 만들어두면 좋겠다는 생각으로 이어졌다.

그래서 2024년 봄학기를 마친 6월에 Next.js 프레임워크로 나의 웹사이트를 만들기 시작했다. 동기가 그렇다보니 처음엔 웹사이트 이름을 **Gallery**로 지었다.

2024년 상반기 당시의 상황은, ChatGPT가 matplotlib으로 그래프 그리는 코드만 작성해도 오류가 나서 인간이 개입을 많이 해야 했다. ChatGPT가 작성한 코드가 한 번에 에러 없이 실행만 돼도 놀라던 시절이었던 것 같음. 시간이 지날수록 LLM이 점점 더 코딩을 잘하던 그 모습 자체가 신기하던 시절이었다.

지금처럼 '이런 웹사이트 하나 만들어라' 하면 AI가 뚝딱 만드는 그런 건 상상도 못하고 있던 시점이었으니, 당시 종강 후 본가로 내려가던 KTX-이음 안에서 노트북<span style="color:gray">(맥북 에어 M2 13")</span>을 펴고, 마크다운 파일을 parsing해서 Next.js로 띄우는 법.. 등을 구글링해보면서 시작했던 것으로 기억한다. <s>그때까지만 해도 여전히 구글링이 많이 필요했다</s>

### 초창기 모습

#### 2024.06.26

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ad9a5c27d-171b-467f-9238-788d14620a0f%3A2024.06.26-1.png?table=block&id=3c6beff3-7473-8073-872a-e8c481bd8c0c" alt="2026-06-26-1" width=500></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A75734cde-a0fb-449e-95a7-ae5b0dd73634%3A2024.06.26-2.png?table=block&id=3c6beff3-7473-8036-833c-f55a879a90d9" alt="2026-06-26-2" width=500></td>
  </tr>
</table>

남아있는 가장 과거의 사진. 어차피 레포에 init commit 한 게 6월 24일이니까 거의 만든 직후의 모습이다. 사진을 개인 웹사이트에 보기 좋게 저장해두고 싶다는 게 가장 큰 목적 중 하나였다보니 사진 기능을 처음부터 염두에 두며 만들었다.

왼쪽이 Photo 탭에서 특정 앨범에 들어가면 그 안에 포함된 여러 장의 사진들이 나열되어 보이는 모습이고, 오른쪽이 Photo 탭에서 여러 앨범들의 리스트를 볼 때의 모습이다.

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A4c8fe58a-9a04-4e8e-98e6-3d5866ac3d51%3A2024.06.26-3.png?table=block&id=3c6beff3-7473-8096-9436-dfaa2506a3ce" alt="2026-06-26-3" width=500></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Acda5746d-a355-4084-86f4-1022b6a1fb86%3A2024.06.26-4.png?table=block&id=3c6beff3-7473-8048-a86d-f1c4dfdc56c9" alt="2026-06-26-4" width=500></td>
  </tr>
</table>

마크다운 파일을 parsing하고, LaTeX 수식을 다루는 npm 라이브러리들을 이것저것 가져와서 Blog 탭의 구현을 막 마쳤을 때의 무습이다.

마크다운 파일 다루는 게 아무래도 가장 손이 많이 간 작업 중 하나였고, 그걸 ChatGPT에 물어보면 어떤 라이브러리 써서 이렇게 함수를 만들면 된다는 식으로 알려주긴 했는데 막상 적용해보면 에러가 많았다.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A60a3ab03-f8ec-47b1-937e-f1dde0a8c3c3%3A2024.06.26-5.png?table=block&id=3c6beff3-7473-80e2-817f-d106cd6ab89f" alt="2026-06-26-5" width=500>

그리고 Threads 비슷하게 글을 (사진 없이) 써두는 페이지도 만들고 싶어서 구현했던 페이지

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A4a79ad72-b0f3-4b77-8272-66d53f7921ea%3A2024.06.26-6.png?table=block&id=3c6beff3-7473-8065-aaa0-f68618c76cd1" alt="2026-06-26-6" width=500>

마지막으로 Profile 페이지인데, CV 스타일의 디자인을 그냥 html로 옮겨놓은 것이었다.

#### 2024.12.21

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Aa6a45fa2-b9db-4765-bd36-274a5bf8d760%3A2024.12.21-1.png?table=block&id=3c6beff3-7473-80a4-8e84-cc7fcc03fb19" alt="2026-12-21-1" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A49f513a1-93c1-43f6-84fc-c1aac70bc62c%3A2024.12.21-2.png?table=block&id=3c6beff3-7473-80d9-82ef-db04e150beee" alt="2026-12-21-2" width=400></td>
  </tr>
</table>

가을학기 종강 후 가장 먼저 하고 싶은 건 카테고리 기능을 추가하는 것이었다. 좌측이 전, 우측이 후

여기에 필요한 함수를 ChatGPT가 거의 한 번에 만들어줘서 놀랐던 게 아직도 기억난다...

#### 2024.12.24

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A549cfe0d-aa8f-48c2-aaae-b15816f42742%3A2024.12.24.png?table=block&id=3c6beff3-7473-8036-81db-db090c1a52c7" alt="2026-12-24" width=500>

그리고 상위 카테고리 이름들을 줄여서 쓰고, 순서도 조정해서 완성했다.

#### 2025.01.09

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A4e136d7c-dc55-4af5-8818-a6e1ace7e598%3A2025.01.09-1.png?table=block&id=3c6beff3-7473-806c-a168-f9cadc0f04a9" alt="2025-01-09-1" width=300></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A07c6ecf0-65ad-4727-a389-a58f2001c2aa%3A2025.01.09-2.png?table=block&id=3c6beff3-7473-8091-8018-e9badfe69898" alt="2025-01-09-2" width=300></td>
  </tr>
</table>

한편, 좌측처럼 Photo 탭이 정말 기능 구현만 되어있는 채로 방치되어 있었는데 (헤더를 보면 뭔가 확실히 문제가 있다...), 일단 우측과 같이 정리만 해두었다. 앨범들을 n개의 column으로 표시할 수 있도록

#### 2025.06.10

5월쯤에는 도메인을 결제해서 연결했다.

그리고 Photo 탭을 더 개선하고 싶어서 더 나은 디자인을 찾다가 발견한 레퍼런스가 이것이었다:

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A6a8005ba-a34f-44d3-ba01-8d34310e80b0%3Aref-photo.png?table=block&id=3c6beff3-7473-802a-a4d7-d8cc8cba4464" alt="2025-06-10-0" width=500>

그래서 그걸 그대로 적용, 이쯤부터는 ChatGPT가 정말 뭐든 만들어주기 시작했다. (에이전트 코딩까지는 아니었지만)

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Afe9f7ccf-0aa7-4bf3-9281-8896760baf5b%3A2025.06.10-1.png?table=block&id=3c6beff3-7473-80f9-b6f8-f6d67dd30dcd" alt="2025-06-10-1" width=500></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A7abf6de6-6e00-496d-8818-e10a7f8c7949%3A2024.06.10-2.jpeg?table=block&id=3c6beff3-7473-8042-b0f7-f28188859a02" alt="2025-06-10-2" width=200></td>
  </tr>
</table>

#### 2025.06.26

그 다음에는 뭔가 메인 페이지(/)에 개성을 더 넣고 싶어서 새로운 디자인을 적용했다.

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A3ec20042-4df6-478d-a002-8be8c06848e1%3A2025.06.26-1.png?table=block&id=3c6beff3-7473-803c-8dfd-f8de87c5fb18" alt="2025-06-26-1" width=500></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A213eba1e-27c2-4897-964f-10f5ae419265%3A2025.06.26-2.png?table=block&id=3c6beff3-7473-8099-9174-f4f43c7f6cdc" alt="2025-06-26-2" width=500></td>
  </tr>
</table>

왼쪽은 이 웹사이트를 처음 만들 때 구상한 것이고, 오른쪽이 새로 떠올린 디자인이었다. 기호 각각을 누르면 다른 페이지로 이동한다.

이것이 한동안 마지막 디자인 업데이트였다.

## 2026 UI 디자인 개편 (2026.08.23-24)

---

이제부터가 최근에 있었던 UI개편의 기록이다. 상반기 동안 여러 교수님들, 연구자들의 웹사이트들을 보며 생각만 하다가, 가을학기 개강 직전인 지금 실행에 옮겼다.

### 개편 전

일단 기존 상태는 이랬다.

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A2e52e018-aea5-4155-a8ce-c1ec21fad710%3A2026.08.23-1.png?table=block&id=3c6beff3-7473-80ff-8ecb-ec7ca2a1c25c" alt="2026-08-23-1" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A120bebef-a915-406f-9323-8a9bb6032ba2%3A2026.08.23-2.png?table=block&id=3c6beff3-7473-8013-adaa-e294e7393b4c" alt="2026-08-23-2" width=400></td>
  </tr>
</table>

<s>일단 사파리 디자인이 업데이트된 게 눈에 띈다</s>

메인 페이지는 그대로 방치했는데, 뭔가 남들에게 보여주면 설명이 필요할 것만 같은 모습이었다.

Profile 페이지는 그냥 아주 일부 정보만 남기고, 구구절절 쓴 글은 냅두고 있었는데 이것도 다른 연구하시는 분들처럼 바꿔야겠다 싶었다. (이름을 Profile이 아닌 About Me로 해야겠다는 그런 작은 개선 사항들도 있었고)

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A5ce824b0-baea-4175-804d-27603d81c009%3A2026.08.23-3.png?table=block&id=3c6beff3-7473-80ae-bf0a-d77c1c8ae633" alt="2026-08-23-3" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Add79d300-3bc0-4581-9a7f-844bb7a5edea%3A2026.08.23-4.png?table=block&id=3c6beff3-7473-8004-be5f-eac2224cb31b" alt="2026-08-23-4" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Abf03fa26-b7d9-478f-9abd-56e287441299%3A2026.08.23-5.png?table=block&id=3c6beff3-7473-8042-86f0-d857b0d3bf65" alt="2026-08-23-5" width=400></td>
  </tr>
</table>

다른 페이지들도 그대로 방치 중이었다. 볼수록 헤더의 shadow가 좀 아닌 것 같다는 생각이 들기 시작했다.

### 아이디어

- 대학원생이 된 후 교수님들의 개인 웹사이트들을 찾아다니다보면 가끔 개성있는 웹사이트를 구성하신 분들도 계신데, 그중 모방하고 싶은 점들을 평소에 기록했다. (석사 첫 학기에 이러면서 살았음)
  - 먼저 [César Hidalgo](https://cesarhidalgo.com/)의 개인 웹사이트. 헤더에 정말 다양한 콘텐츠들이 있는 걸 보고 나도 공부와 연구 외에도 관심사인 것들을 이것저것 웹사이트에 덤아봐야겠다는 생각이 들었다.
  - 그리고 [백형렬 교수님](https://sites.google.com/site/hrbaik85/)의 개인 웹사이트. 'Advices for students', 'Memory of Bill Thurston' 등 직접 교수님들을 찾아다녀야 들을 수 있을 법한 귀중한 이야기들이 실려있다. 'Candle loses nothing by lighting another candle' 이라는 말이 생각나는 곳이다.
  - [NYU의 조경현 교수님](https://kyunghyuncho.me). 특히 [이 글](https://kyunghyuncho.me/teaching-fundamentals-of-machine-learning/)을 다 읽어봤다.
- 그리고 작년 여름 쯤에 [이런 웹사이트](https://www.marcachile.cl/en/3-reasons-why-chile-is-the-astronomical-students-paradise/)에 들어갔다가 이곳처럼 폰트를 Roboto 쓸까 하는 생각도 들었다. 하지만 이번에 막상 보니 Serif가 더 마음에 들어서 이건 철회
  - Monospace 폰트를 쓸까 하는 생각도 했지만 이건 그냥 나만 보는 환경들에만 적용하는 것으로...
- 전반적인 디자인 테마에 있어 가장 메인 레퍼런스가 됐던 건 아래의 두 쇼핑몰이었다. 선 몇 개만으로 구성된 플랫하고 미니멀한 디자인을 써보고 싶었다.

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A0550945b-9a0b-40b9-934d-6f7e45c2a6a3%3Aui_reference_1.png?table=block&id=3c6beff3-7473-80bf-8898-cfee585edcbc" alt="ui_reference_1" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ad603a91c-0c60-4189-84e9-e00099ffbc45%3Aui_reference_2.png?table=block&id=3c6beff3-7473-8070-b27e-d5e451473cb1" alt="ui_reference_2" width=400></td>
  </tr>
</table>

- 그러면서도 하나 포기하지 않으려던 기존의 스타일은, 90년대 쯤의 CSS없는 느낌의 형태를 조금은 남기는 것이었다. 이것은 [David Lee 교수님](https://www.princeton.edu/~davidlee/), 허준이 교수님(아래 사진)의 개인 웹사이트 등을 보며 했던 생각이다. <s>근데 이 글을 쓰면서 다시 찾아보니 허준이 교수님께서는 이제 웹사이트 리뉴얼을 하신 것 같다.</s>

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ae1a5c8f9-47e9-4a58-8a26-7717d93f47af%3Ajune_huh_website.png?table=block&id=3c6beff3-7473-80c6-9c05-cd966738674c" alt="june_huh_website" width=500>

### 구현

평소에는 Claude Code, Codex 등을 써보고 있었는데, 이번에는 기존처럼 프로젝트 폴더를 VSC에서 연 후 Codex 익스텐션을 써서 바이브 코딩으로 작업했다.

가장 먼저 한 건 <s>수많은 commit 안 된 파일들 정리</s> 카테고리 새로 만들기, Profile 탭 이름 About Me로 바꾸고 내용 업데이트 하기, 새로 추가한 Cubing 탭에 내용 쓰기, 헤더에 item들이 많으니 반응형으로 개수가 유동적으로 조절되도록 드롭다운 만들기 등이었다. 모두 Codex가 너무 가볍게 해냈다.

그 후에 디자인 개편을 본격적으로 시작했다. 가장 먼서 입력한 프롬프트는

```plaintext
I want to make a new design for my root page of my website. Following are my requirements and examples

- I want flat design, which does not use shadow for header and components.
- I want a simple design consists of thin black lines.
- The root page need to have include reduced number of categories: About Me, Research, Essay, Cubing, Photo.
- I'd like use very light gray as background color, not #ffffff like as-is.
- These are two examples that I think are good.
  - Example 1: {url}
  - Example 2: {url}
```

별 건 없었다. 그랬더니 처음으로 나온 결과물은

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Aebac2c93-bc86-4cc6-9a1c-f64ec06abc0e%3Aui_first_draft.png?table=block&id=3c6beff3-7473-803f-98ad-ee41e676b8dc" alt="ui_first_draft" width=500>

아니 레퍼런스들이 다 쇼핑몰이어서 그런지 쇼핑몰처럼 엄청 큰 이미지가 들어가있는 디자인이 나왔다

그래서 이 다음에는 일단 (5개의 item이 있는) 내비게이션만 남긴 후, 직접 지시를 하나씩 하면서 디자인을 완성했다. (위아래로 가로 선 넣어라, 가운데의 영역을 세로로 6:4로 나눠서 구성해라, ...)

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Acdcb9a4d-c0bb-44b9-b615-b841f30249f9%3A2026.08.24-1.png?table=block&id=3c6beff3-7473-804c-b8c1-e278186d3fc7" alt="2026-08-24-1" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A57a20067-f2cf-4a31-80b5-641f198deced%3A2026.08.24-2.png?table=block&id=3c6beff3-7473-80e4-9b0a-ec22373118c9" alt="2026-08-24-2" width=400></td>
  </tr>
</table>

그렇게 나온 결과물이다. 메인 페이지에 있는 헤더 부분은 딱히 넣을 말은 없어서 그냥 비웠다. 근데 핸드폰 화면으로 보면 그 부분이 더 허전하게 느껴져서 뭔가 써넣어야 하나 싶기도 하고

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Af671de26-e297-4704-b979-c7df7a2e8f39%3A2026.08.24-3.png?table=block&id=3c6beff3-7473-8063-805a-fb2f21565a14" alt="2026-08-24-3" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A9d0eb314-9475-445f-a374-70ebfd0eda1a%3A2026.08.24-4.png?table=block&id=3c6beff3-7473-809c-94b5-e681947ccd6d" alt="2026-08-24-4" width=400></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A35070f9f-d409-4ab2-9ef8-0b08d0fb15b3%3A2026.08.24-5.png?table=block&id=3c6beff3-7473-8087-8888-fc9b96616cff" alt="2026-08-24-5" width=400></td>
  </tr>
</table>

이 페이지들은 따로 업데이트를 하진 않았고, 전체적으로 바뀐 디자인의 영향만 받았다.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A476880a9-0602-4e33-940b-52d9bebf43de%3A2026.08.24-6.png?table=block&id=3c6beff3-7473-8003-919a-c61eb3e4db77" alt="2026-08-24-6" width=500>

그리고 새로 추가한 Cubing 탭.

## 앞으로 할 일

---

- 일단 Essay 탭을 완성해서 주변 사람들의 글도 모셔오고 싶다. 최근에 발견한 [허기홍 교수님](https://prosys.kaist.ac.kr/authors/)의 개인 웹사이트를 보니 더욱 그런 생각이 든다.
- 재밌는 요소들을 군데군데 넣고 싶다. 큐브를 시작한지 며칠째인지 세는 카운터나, 웹사이트의 랜덤한 페이지로 이동하는 버튼 등등
- 그리고 빨리 연구를 해서 Reasearch 탭에도 뭘 채우고 싶다.
- 아 그리고 공부하면서 바이브코딩으로 뚝딱뚝딱 만든 게 있으면 아카이브하는 용도로 쓰는 것도

## 잡담

---

- 막상 시작해보니 24시간 내에 하고 싶었던 개편의 대부분이 마무리된 상태이다.
- 바이브 코딩은 언제 봐도 신기하면서 무섭다. 인류에게 있어서 약간 독이 든 성배 느낌이 아닐까
- ㅏ

<br><br>

2026.08.24
