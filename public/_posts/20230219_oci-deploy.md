---
title: 'Nginx로 MERN 웹 여러 개 배포하기'
excerpt: 'Nginx'
coverImage: ''
date: '2023-02-20T13:23:21.000Z'
categories: [Developing, Backend]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

&nbsp;&nbsp;OCI를 사용해 MERN 웹을 포함한 이것저것들을 올려놓기까지 참고한 것들, 알게된 것들을 정리했다.

## 2022.08.29: 발단

---

<img src="/assets/blog/posts/20230219_oci-deploy/08-29-1.png" alt="08-29-1" width="400" />

&nbsp;&nbsp;사건의 발단.. 이전에 쓰고 있던 heroku는 유료로 전환될 예정임이 통보됐고, 저 친구는 OCI로 옮길 예정이라고 했다.
MERN 스택으로 만든 웹 하나를 올리는 게 목표였는데, 진짜 금방 될까? 싶어서 시작한 후 10시간 정도 걸렸으니 은근 금방인 것 같기도  
<br/><br/>

## OCI 가입, region 선택

---

[https://www.oracle.com/kr/cloud/free/#always-free](https://www.oracle.com/kr/cloud/free/#always-free)

구글 계정으로 로그인 후, region은 춘천으로 선택했다.  
<br/><br/>

## 가입, ssh키 생성, 우분투 접속까지

---

[https://shanepark.tistory.com/170](https://shanepark.tistory.com/170)

- ssh키는 터미널에서 생성, 현재 ~/.ssh/id_rsa.pub에 있음
- 파일들은 sudo vim [파일명] 으로 접근. vim으로 수정 후 :wq 로 저장&나가기 한 번에
- 이후 오라클 서버 공동ip를 브라우저에 입력해도 보이는 게 없었는데, $ sudo iptables -F 를 한 후 nginx의 기본 페이지가 보이기 시작했다. [(참고)](https://itreport.tistory.com/628)  
  <br/><br/>

## 우분투 접속 후 내 사이트 올리기

---

[https://velog.io/@jjhstoday/AWS-EC2에-React-Node.js-앱-배포하기-2-NginX를-사용한-React-배포](https://velog.io/@jjhstoday/AWS-EC2에-React-Node.js-앱-배포하기-2-NginX를-사용한-React-배포)

그리고 FTP 프로그램 FileZila도 [여기](https://chailmon.com/dev/cloud/cloud-오라클-클라우드-ftp-연결방법/)를 보며 다운받아봤는데, 그냥 github 통해서 세팅내는 게 가장 빨랐다.
<br/><br/>

## 도메인 등록

---

[https://m.blog.naver.com/bb\_/222167412684](https://m.blog.naver.com/bb_/222167412684)  
[https://www.kangtaeho.com/108](https://www.kangtaeho.com/108)  
업로드 후 도메인 등록을 위해 freenom을 이용하여 .tk 도메인을 준비했다. 지금(2023.02.20) 시점에선 freenom에서 도메인 발급을 못해주고 있는 듯
<br/><br/>

## 기타 에러

---

- 다 한 후에 소켓에서 502 Bad Gateway 에러가 났는데,  
  /etc/nginx/sites-enabled/defaut 파일에 프록시 관련 설정을 추가했다. [참고](https://github.com/tlaverdure/laravel-echo-server/issues/273)

- 여러 크롬 익스텐션때문에 난다는 에러...?  
  [https://stackoverflow.com/questions/72494154/a-listener-indicated-an-asynchronous-response-by-returning-true-but-the-messag](https://stackoverflow.com/questions/72494154/a-listener-indicated-an-asynchronous-response-by-returning-true-but-the-messag)  
  실제로 크롬에서 익스텐션이 없는 사용자로 접속하면 에러가 나타나지 않았다.

그렇게 OCI에 하나의 웹 올리기를 성공했다.
<br/><br/>

## 2023.02.19: 다른 사이트 추가 배포

---

&nbsp;&nbsp;다른 MERN 웹사이트를 하나 더 추가로 만들어 배포하고 싶었는데, 일단 기존에 쓰던 도메인에 새로운 포트로 MERN 웹을 하나 더 올리기로 했다.

- etc/nginx의 nginx.conf 에서 etc/nginx/sites-available 에 있는 파일들을 실행시키는데, 확인해보니 .conf가 있든 없든 모두 실행시키게 되어있었다. [참고](https://velog.io/@loocia1910/Next.js-linux-서버에서-nginx로-nextjs-배포하기)
- etc/nginx/sites-available 에 'sub_domain' 이라는 파일을 만들고 새로운 포트에 대한 내용들을 작성했다. 일단 root, index, try_files 를 작성. [참고](https://potential-coding.tistory.com/22) (다만 여기서 4번에 'import 시켜준다'는 건 이해 못하고 넘어감)
- proxy_pass도 추가했다. [참고](https://developer0809.tistory.com/6)

```text
server {
    listen 3001;

    location / {
        root /home/ubuntu/프로젝트 이름/client/build;  # index.html 경로
        index index.html index.html;
        try_files $uri $uri/ /index.html;
        proxy_pass http://127.0.0.1:3001;
    }
}
```

- 그리고 nginx 재시작 ($ sudo service nginx restart )
- 기타 참고 자료: [참고 1](https://zionh.tistory.com/20), [참고 2](https://seongjin08.tistory.com/150)
- 그리고, OCI에서도 수신 규칙에 사용할 포트들을 료가했다. 방화벽 설정은 건드리지 않은 상태. [참고](https://kibua20.tistory.com/124)
  <img src="/assets/blog/posts/20230219_oci-deploy/02-19-1.png" alt="02-19-1" width="600" />
- 현재 'sub_domain' 파일 내에 두 개의 포트에 대한 내용을 모두 추가해서, 총 세 개의 MERN 웹이 각각에 올라가있다.
