---
title: 'HCI(ITE3062) 팀 프로젝트'
excerpt: ''
coverImage: ''
date: '2024-11-05T09:22:42.552Z'
categories: []
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

<span style="color:gray">2024년 말 이 수업을 듣던 도중에 쓰기 시작했으나 2년이 다 되어가는 2026년 8월에 마무리를 하고 있다</span>

## 발단 및 내용

### 수업

- 2024년 가을학기, 3학년 2학기에 편제되어 있던 HCI 수업을 들었다.
- 팀플이 메인인 수업이기에 첫 수업부터 팀을 정하기 시작했는데, 말레이시아 친구에게 팀을 하자고 했다.
- 동시에, 평소에 실감에 대해 테스트해보고 싶었던 기능을 아이디어로 활용해서 이 팀플을 하고 싶었다.

### 주제

수험생이 수학 과목의 문제 사진을 찍어서 업로드하면, 그 문제가 **어느 주제에 해당하는 문제인지 알려주는** 기능을 구현 후 이 기능이 수험생들에게 도움이 되는지 테스트하기로 했다.

### 배경

당시는 에이전틱 코딩이라는 게 등장하기 전이었고, ChatGPT가 생성한 코드를 직접 복붙하며 신기해하던 때였다.

또한 당시 여름에 Next.js로 예시 코드를 클론 후 이 웹사이트를 만들고 있던 때라, 자연스럽게 Next.js 및 백엔드 프레임워크를 써서 위 주제를 수행하기 위한 웹사이트를 만들고 설문조사를 해서 프로젝트를 진행하면 되겠다고 생각했다.

그리고 그 과정에서 코딩을 할 때 ChatGPT로 할 수 있는 것들은 직접 하지 않아도 되겠다, 정도만 생각하며 프로젝트를 시작했다.

## 2024.10.18

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A60206cac-ea68-4de5-890b-9a4a52e09a2d%3A10-18-1.png?table=block&id=3c5beff3-7473-80cc-b853-ed8193c4a1bc" alt="10-18-1" width=500>

아마 피그마로 만든 Mid-Fi 프로토타입이었던 것 같다. 기본적인 UI의 틀은 이미 있던 앱에서 차용했고, 저 정도의 페이지들만 구현하면 되겠다는 계획이었다.

## 2024.10.29

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A3f154397-8c25-4ee5-958c-a49fc937b491%3A10-29-1.png?table=block&id=3c5beff3-7473-801a-b2e1-dbecd7bc3495" alt="10-29-1" width=500></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A867c8412-c516-4ece-8a3e-08e92a344cd2%3A10-29-2.png?table=block&id=3c5beff3-7473-80e3-90ef-fd41afb17dcd" alt="10-29-2" width=300></td>
  </tr>
</table>

사진을 입력받으면 그걸 처리해서 원하는 결과물(그 문제가 해당하는 주제의 이름)이 나오게 하는 과정에 대한 구조도였다.

왼쪽은 OCR과 LLM을 이용한 두 개의 단계에 거쳐 이 task를 수행하게 하겠다는 큰 그림이고

오른쪽은 이에 필요한 LLM의 구조...를 나타낸 것이었다. Llama 모델에 새로운 Head만 추가해서 파인튜닝하겠다는 게 계획이었다.

근데 아무리 학습을 시켜도 진전이 없어서 포기하게 된다. 그도 그럴 것이 파인튜닝에 필요한 데이터도 직접 레이블링을 해야 했고... 못할 짓이었다.

## 2024.10.30

말레이시아 친구와 학교에서 잠깐 만났을 때 그 친구가 유튜브를 보며 뭔가 코드를 조합하더니, **SentenceTransformer**라는 모델을 알아와서는 여기에 OCR된 텍스트와 후보 선택지들을 입력해주면 상당히 정답을 잘 골라내는 모습을 보여주었다. 그래서 파인튜닝 없이 이러한 Zero shot방식으로 진행하기로 했다.

이게 하나의 큰 Breakthrough였다.

## 2024.11.01

컴소 친구와 인문대 카페에서 이 프로젝트에 대해 얘기하다가 백엔드 프레임워크로는 **FastAPI**를 쓸 것을 추천해줬다.

## 2024.11.03

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A6431f5c3-f697-487f-859e-29649acb64c2%3A11-03-1.png?table=block&id=3c5beff3-7473-8035-8c50-d7876d002e11" alt="11-03-1" width=500>

FastAPI로 혼자 해보다가 막혀있었는데 (아무래도 AI로 디버깅이 뚝딱뚝딱 되지 않던 시절이었으니...)

다른 친구와 만났을 때 보여주면서 얘기를 하다보니 Postman으로 API 테스트에 성공한 모습이다.

이렇게 서버 구축을 해결했고, 이제 필요한 모델을 서버에서 작동시키고 그걸 프론트와 API로 연결하고... 하는 일들이 남아있었다.

남은 시간은 약 한 달

## 2024.11.04

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A8e6289bb-7c04-48a3-a9be-800920308e8c%3A11-04-1.png?table=block&id=3c5beff3-7473-80dc-be0f-c441704afee7" alt="11-04-1" width=500>

&nbsp;&nbsp;아무렇게나 프론트를 만들어서 API 연결부터 일단 성공시킨 모습

사진을 입력해서 서버로 보낸 후, OCR과 SentenceTransformer를 거쳐 나온 output이 프론트에서 3개의 태그로 표시되는 모습(인 것 같다).

<s>첫 번째 태그부터 잘못됐다</s>

## 2024.11.05

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ae6cf24e1-1c6e-4aaa-ad62-c781527fd75e%3A11-05-1.png?table=block&id=3c5beff3-7473-807b-9fb9-dc1f507556b6" alt="11-05-1" width=200></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Aa9679a62-c7fb-443a-bfc0-8e0c31bc5e64%3A11-05-2.png?table=block&id=3c5beff3-7473-80bc-b644-f830fcdd4971" alt="11-05-2" width=700></td>
  </tr>
</table>

그리고 프론트 작업도 본격적으로 시작했다.

왼쪽의 사진을 ChatGPT에 넣어서 Next.js 코드로 구현하라고 하니 오른쪽이 바로 나오는 게 그때는 굉장히 신기했다.

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A939cd6ab-03eb-4940-87b6-0d9c7337497a%3A11-05-3.jpeg?table=block&id=3c5beff3-7473-808d-86e8-c8b163f5b1ad" alt="11-05-3" width=700>

학교 수업 시간에 신나게 개발하는 모습

즐거웠다

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Aaccc68c3-98ca-412c-86eb-bdf78fe59f7f%3A11-05-4.png?table=block&id=3c5beff3-7473-80ee-8d9d-cab9a16dc628" alt="11-05-4" width=700>

이번에도, 왼쪽의 디자인 이미지를 넣으면 오른쪽이 Next.js 기반의 코드로 나왔다. 필터에서 과목 이름을 누르면 그 과목에 해당하는 것만 표시되는 것도 완벽히 구현이 되어있었다.

## 2024.11.15

그 다음에 생긴 이슈는 (남아있는 일기들로 추측해보면)

구현한 프론트를 API로 서버와 연결했을 때 localhost에서는 문제가 없었는데

Vercel로 배포를 해놓으니 API로 response를 받아올 때 너무 오래 걸린다면 Timeout이 나는 것이었다.

이때도 서버 인스턴스는 vast.ai에서 만들어 썼던 것 같은데, 처리 시간의 대부분을 차지하는 OCR이 더 빨리 수행될 수 있게 더 높은 사용의 인스턴스를 써보기 시작했다.

이때 의문의 CUDA관련 에러가 계속 발생해서 말레이시아 친구도 수많은 구글링 끝에 답을 찾지 못하고 있었는데 (며칠 소요했던 듯), 어느날 컴소 친구와 이 얘기를 하다가 인스턴스를 만들 때부터 **이미지 옵션을 nvidia에서 제공하는 프리셋으로 써보라는** 아이디어를 주었다.

그랬더니 진짜 해결이 됐고 OCR이 정말 더 빠르게 돌아갔다. (한 장에 3초 미만)

## 2024.11.20

<table>
  <tr>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3Aec9de713-9880-467b-b239-c55a21ec7c84%3A11-20-1.png?table=block&id=3c5beff3-7473-8058-b22b-c8642a7c9a01" alt="11-20-1" width=300></td>
    <td><img src="https://agate-walrus-c6e.notion.site/image/attachment%3A4ea76136-eb6b-4af7-85e3-d45964dc1763%3A11-20-2.png?table=block&id=3c5beff3-7473-809c-8554-c5959fb69485" alt="11-20-2" width=300></td>
  </tr>
</table>

2년이나 돼서 이 두 장의 의미가 뭔지는 기억이 나지 않지만...

이날의 일기를 보니 저 페이지의 반응형 작업을 했던 것 같고

저 웹 내에서 테스트를 마친 후 (테스트 후에 작성하는) 설문으로 이동하는 버튼도 만들고

그리고 API가 response를 받지 못했을 때의 메시지도 쓰고, 그랬다.

## 2024.11.21

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3A1e612fbc-fb0b-4d20-b341-35450ee28cf0%3A11-21-1.png?table=block&id=3c5beff3-7473-8034-a61f-d4c82624e30b" alt="11-21-1" width=500>

이때쯤에 만들기 시작한 survey는 대충 이렇게 생겼었다.

**Paired t-test**를 위해 참여자에게 pre-, post-survey를 모두 참여하도록 안내해야 했다.

## 2024.11.22

그리고 서버 인스턴스에서 Fast API 서버를 24시간 켜놓기 위해 (아마 이번에도 그 컴소 친구에게) **tmux** 기초적인 사용법을 배워서 서버를 24시간 켜놓을 수 있게 되었다.

## 2024.11.24

모든 준비를 마치고, 참여자들에게 안내를 발송하기 시작했다.

## 2024.11.25

학교에 남아있던 시간, 저녁에 받은 제보를 통해서 서버가 죽었음을 알게 됐다.

빠르게 새로운 인스턴스를 만들어서 복구하고, 그제서야 답변이 도착하기 시작했다.

혹시 서버에 사람들이 순식간에 몰려서 인스턴스가 뻗었던 것일 수 있으니, 이후로는 참여 안내를 분산해서 보냈다.

그렇게 일주일 정도간 20개 이상의 답변을 수집할 수 있었다.

## 2024.12.02

<img src="https://agate-walrus-c6e.notion.site/image/attachment%3Ab723d461-2117-4b89-afd4-ddbb5f81bcb9%3A12-02-1.png?table=block&id=3c5beff3-7473-804f-8316-db3542329d1e" alt="11-04-1" width=500>

인스턴스를 끈 후에 다시 안 켜질 때도 (꽤 자주) 있어서 인스턴스는 계속 바뀌었다.

\$0.140/hr이면 **\$3.348/day**이고, \$0.118/hr이면 **\$2.829/day**이다.

## 그 후

설문조사 답변을 모두 확보한 후에 t-test를 돌리는 건 당연히 순식간이었고, 포스터도 완성해서 정해진 날에 발표를 했다.

설문을 받기 시작했던 시기는 좀 불필요할 정도로 빠르게 시작한 것이었는데, 발표 날짜가 좀 빠르게 잡히는 바람에 최적의 설문조사 일정이 되어버렸다.

발표 당시에는 포스터 옆에 수능 시험지도 하나 붙여놓고 채점하러 오시는 분들께 실시간으로 보여드리는 것까지 무사히 마쳤다.

프론트 관련된 모든 것은 여전히 [깃허브](https://github.com/Rouxist/hci-2024-prototype)에 있다.
