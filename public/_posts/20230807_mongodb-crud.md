---
title: 'MongoDB operator 정리'
excerpt: 'MongoDB 기초'
coverImage: ''
date: '2023-08-22T16:16:48.000Z'
categories: [Developing, Backend]
author:
  name: Yongjin
  picture: '/assets/blog/authors/yongjin.png'
ogImage:
  url: ''
alert: ''
---

## 개요

지금까지 MongoDB를 다루며 사용했던 operator들을 정리했다.

<br/><br/>

## \[Query\] Array Query Operators: \$elemMatch

---

독스: [https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/](https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/)  
예를 들어, wordList라는 array에 들어있는 document들 중 그 속성\(isCurrent\)이 true인 것만 fetch하는 쿼리문:

```javascript
db.sets.find(
  { 'wordList.isCurrent': true },
  { wordList: { $elemMatch: { isCurrent: true } } },
)
```

<br/><br/>

## \[Query\] Logical Query Operators: \$and \$or \$not \$nor

---

독스: [https://www.mongodb.com/docs/manual/reference/operator/query-logical/](https://www.mongodb.com/docs/manual/reference/operator/query-logical/)  
복잡한 조건을 걸어서 query할 수 있음. logical operator끼리도 nested되게 사용 가능.

(독스 예시)

```javascript
db.inventory.find({
  $and: [
    { $or: [{ qty: { $lt: 10 } }, { qty: { $gt: 50 } }] },
    { $or: [{ sale: true }, { price: { $lt: 5 } }] },
  ],
})
```

<br/><br/>

## \[Update\] Field Update Operators: \$inc

---

독스: [https://www.mongodb.com/docs/manual/reference/operator/update/inc/](https://www.mongodb.com/docs/manual/reference/operator/update/inc/)  
값을 원하는 만큼 증가/감소시킬 수 있음.

```javascript
db.sessions.updateOne(
  { _id: sessionId, 'records._id': recordId },
  { $inc: { 'records.$.record': 2000 } },
)
```

<br/><br/>

## \[Update\] Array Update Operators: \$push \$pull \$pop

---

독스: [https://www.mongodb.com/docs/manual/reference/operator/update/push/](https://www.mongodb.com/docs/manual/reference/operator/update/push/)  
\$push 는 Array에 값을 추가

```javascript
db.sessions.updateOne(
  { _id: id },
  { $push: { records: data } }, //공식 문서 보고 함!!
)
```

\$pull 은 Array의 특정 값을 제거. 맨 앞/맨 뒤의 element를 제거하는 \$pop도 있다.

```javascript
db.sessions.updateOne(
  { _id: sessionId },
  { $pull: { records: { _id: { $in: recordId } } } },
)
```

<br/><br/>

## \[Update\] Array Update Operators: $\[\<identifier\>\], arrayFilter

---

독스: [https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/](https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/)  
영어 단어장에서 단어들을 저장하는 Array인 wordList에서 특정 단어의 document를 id로 찾아 그 document의 'isCurrent'라는 field의 값을 업데이트할 때 사용했다.

```javascript
db.sets.updateOne(
  {
    'wordList._id': ObjectId('646307ea10cdb774275dce6b'),
  },
  { $set: { 'wordList.$[word].isCurrent': true } },
  { arrayFilters: [{ 'word._id': ObjectId('646307ea10cdb774275dce6b') }] },
)
```
