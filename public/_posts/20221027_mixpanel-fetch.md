---
title: 'Mixpanel에서 10000개 이상의 데이터를 Export하기'
excerpt: ''
coverImage: ''
date: '2022-10-27T12:22:30.322Z'
categories: [Developing]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 때는 2022.10.15

---

[https://mixpanel.com/report](https://mi련panel.com/report)  
실감 개발자가 유저 로그 수집용으로 Mixpanel을 도입한지 2주 정도가 지난 시점이었다. 4만개 정도의 데이터가 모여서 수집된 데이터를 출력하려 했는데, Events 탭에서 Export 버튼이 바로 보이길래 이걸 누르면 바로 다운로드가 될 줄 알았더니 최근 100개만 출력된다는 걸 보고 전체를 출력할 방법을 열심히 알아보기 시작했다. 이 때 해본 것들을 알게 된 순서대로 정리했다.

&nbsp;

## 구글링

---

&nbsp;&nbsp;먼저 구글링을 해보니 [Mixpanel 커뮤니티의 질문과 답변](https://community.mixpanel.com/pulling-data-out-of-mixpanel-12/download-report-with-more-than-10-000-rows-5877)을 통해 export에 이래저래 제한이 있음을 알 수 있었다. 답변에서 언급된 Mixpanel API관련 독스들을 Overview부터 읽어가며 하나씩 해결했다.
우선 [Event Export API](https://developer.mixpanel.com/reference/raw-event-export) 독스로 이동해보면,  
![mixpanel-docs-fetch-code](/assets/blog/posts/20221027_mixpanel-fetch/docs.png)
우측에서 이런 코드를 알려주고 있었다. AUTHENTICATION에서 username과 password라는 걸 넣으면 아래 headers 딕셔너리에 "authentication" key가 생기는데, 이걸 어떻게 쓰는 건지 모르겠던 차에, [옆 독스](https://developer.mixpanel.com/docs/jql-get-started-guide#running-queries-from-the-command-line-mac-os-x-or-linux)를 보고 알아냈다(..)

'use its API secret as the username, with a blank password.'

위 username에는 API secret이라는 걸 넣고, password 칸은 비우라길래 그냥 따라했다.

&nbsp;

## API Secret

---

일단 API Secret은  
![mixpanel-header](/assets/blog/posts/20221027_mixpanel-fetch/header.png)
헤더의 톱니바퀴 > Project Settings 탭에서 프로젝트의 API Secret를 찾을 수 있었다.

![mixpanel-api-secret](/assets/blog/posts/20221027_mixpanel-fetch/api_secret.png)

아래에 있는 것을 복사해서 넣으니 내가 사용하면 되는 "authentication" 값을 알 수 있었고, 그걸 포함해서 코드 전체를 복붙해 돌려봤다.

## Parameter

---

![mixpanel-parameter-error](/assets/blog/posts/20221027_mixpanel-fetch/error.png)
..에러가 났다.  
애초에 Event Export API 독스 에서 query parameter들 중 from_date와 to_date가 required라고는 하면서 어떻게 넣는지는 알려주지 않길래 당황했는데, 열심히 알아본 결과

```
url = "https://data.mixpanel.com/api/2.0/export?from_date=2022-10-02&&to_date=2022-10-15"
```

url 뒤에 붙여서 설정할 수 있었다. 위와 같이 해주면 10월 2일부터 10월 15일까지의 데이터를 가져올 수 있다.

## 결론

---

그래서 결론적으로, Mixpanel에서 가져오는 코드 :

```python
import requests

url = "https://data.mixpanel.com/api/2.0/export?from_date=2022-10-02&&to_date=2022-10-15"

headers = {
    "accept": "text/plain",
    "authorization": "가리기가리기가리기"
}

response = requests.get(url, headers=headers)

exported = open('exported.txt', 'w')
exported.write(response.text)
```

&nbsp;

그리고 독스에서는 받아온 데이터를 string 형태로 저장하길래(예시에서 response.text로 받아왔다.) 그냥 따라했는데, 생각해보니 이걸 JSON같은 형태로 바꿔야 쓰든 말든 할 것 같은데 string말고 다르게 저장이 안될까 하다가, 그냥 저장된 걸 몇 번 더 파이썬 코드로 가공해서 csv파일로 바꿔버렸다.

&nbsp;

그렇게 csv로 변환한 모습 :  
![mixpanel-csv](/assets/blog/posts/20221027_mixpanel-fetch/csv.png)

제대로 한 것인지는 모르겠어서 일단 기록해놓고 다시 봐야 할 듯

&nbsp;

## 부록

---

: 파라미터를 저렇게 넣으면 되는 걸 알게 된 과정

&nbsp;&nbsp;from_date 에러가 나기 전에 Event Export API 중 [Authentication](https://developer.mixpanel.com/reference/raw-data-export-api-authentication) 부분을 먼저 읽었는데, 여기서

'Note that when you use Service Account authentication, you must specify the project_id as a query parameter. E.g. https://data.mixpanel.com/api/2.0/export?project_id=12345'

라고 하길래 그대로 proejct_id를 넣어 작동시켜봤다. 이 때 'invalid parameter: proejct_id' 라고 에러가 뜨는 걸 본 후 저렇게 url 뒤에 붙여서 파라미터 넣는 방식임을 알게 됐다.
