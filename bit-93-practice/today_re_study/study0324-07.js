/*
주체 : 객체 - 일반 객체와 함수 객체
- 일반 객체
=>다음과 같이 new 또는 {}으로 만드는 객체
var obj = new 생성자()
var obj = {0}
  => prototype이 없다.

  - 함수 객체 = 일반 객체 + 함수 코드 + prototype
*/
"use strict"

//일반 객체
var obj1 = {
  name: '홍길동',
  age: 20
}
obj1.tel = '111 -1111' //객체에 값 보관
obj1.f1 = function() {console.log('hello')} // 객체에 함수 보관
obj1.ok = {} // 객체에 객체 보관
console.log(obj1)


// 함수 객체
var obj2 = function() {
  console.log('test...')
}
obj2.tel = '222-2222'
obj2.f1 = function() {console.log('hi')}
obj2.ok = {}
console.log(obj2)
obj2.f1()
obj2()

//함수 객체의 코드를 실행하고 싶다면, 다음과 같이 호출!
/*
일반 객체나 함수 객체나 둘 다 객체의 기능을 갖고 있기 때문에
똑 같이 사용할 수 잇음
벗, 가능한 용도를 구분해서 사용!

일반 객체의 용ㄷ
 일반 적인 값 저장
 그 값을 다루는 함수 저장


 함수 객체의 용도
 함수가 해야할 작업 코드를 저장
 함수가 초기화 시킨 인스턴스 값들을 다루는 함수를 prototype에 저장

 초기화?
 함수와 관련된 기능을 수행하는 다른 함수를 저장
*/
