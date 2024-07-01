---
title: 'Kaggle Public API로 Notebook 사용하기'
excerpt: 'Kaggle CLI로 사용하기'
coverImage: ''
date: '2023-09-08T12:09:00.000Z'
categories: [Data Science, Kaggle]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

(23.09.25 추가) 원래 목적이었던 kaggle에서 code를 12시간동안 실행시키는 건 CLI를 써야만 가능한 것은 아니었다..  
<br/><br/><br/>

&nbsp;&nbsp;최근 Kaggle Notebook을 사용하면서 이걸 서버에서 CLI로 작동시키는 방법은 없을지 찾아보던 중 Kaggle의 API를 써보았다.  
[https://www.kaggle.com/docs/api](https://www.kaggle.com/docs/api)

## Installation

---

```bash
$ pip install kaggle
```

<img src="/assets/blog/posts/20230908-kaggle_api/installation.png" alt="installation" width=600>

설치 후 kaggle 명령어를 바로 사용할 수는 없었다. (사진과 다르게 kaggle: command not found 가 나오는 경우에 대해서도 독스에 설명되어있..지만 볼 일은 없었다.)  
<br/><br/>

## Authentication

---

<img src="/assets/blog/posts/20230908-kaggle_api/token.png" alt="token" width=600>

사이트의 Settings 탭에서 Create New Token 버튼을 누르면 kaggle.json이라는 이름의 파일이 다운로드되고, 이것을 /.kaggle 폴더로 옮겨주면 kaggle 명령어를 쓸 수 있게 된다.
<br/><br/>

## Creating and Running a New Notebook

---

가장 중요한 부분. 최종 목적은 Kaggle Notebook(kernel)을 작동시키는 것이었는데, init을 사용해 Notebook을 만들 수도 있고 pull로 이미 만든 Notebook을 가져올 수도 있다.

```bash
$ kaggle k init -p /path/to/folder
```

("k" 또는 "kernels" 모두 사용 가능)  
원하는 경로에 init을 하면 Notebook의 메타데이터를 직접 입력할 수 있는 파일이 생성되지만 이것보다는 이미 만들어놓은 것을 pull로 가져오는 방식이 나았다.

```bash
$ kaggle k pull [KERNEL] /path/to/folder
```

[KERNEL]에는 원하는 Notebook의 Slug(url에서 볼 수 있는 username/notebook 형식의 그것)을 입력하면 되고, 경로는 입력하지 않으면 현재 위치로 알아서 지정이 된다. 그러면 kernel-metadata.json 라는 파일이 알아서 생기는데 id나 사용하는 데이터셋 정보같은 것들은 알아서 입력이 되어있고, gpu나 tpu 작동 여부 등을 추가로 설정할 수 있다. 이렇게 노트북을 작동시킬 준비는 끝난다.

```bash
$ kaggle k push
```

를 하면 Kaggle 사이트 좌측 하단의 "View Active Even비s" 버튼을 눌러 작동되는 것을 볼 수 있다.  
이렇게 작동시킬 때 역시 기본적으로는 12시간까지 작동시킬 수 있다.

<img src="/assets/blog/posts/20230908-kaggle_api/log.png" alt="log" width=600>
<br/><br/>

## Expecting value: line 1 column 1 (char 0)

---

<img src="/assets/blog/posts/20230908-kaggle_api/error.png" alt="error" width=600>

push를 할 때 이 한 줄짜리 에러가 나와서 포기할 뻔 했는데, 노트북과 사용하는 데이터셋을 모두 Private이 아닌 Public으로 돌리니 해결되었다. 친구가 알아내주지 않았으면 이건 혼자서는 영원히 해결 못할 뻔..
