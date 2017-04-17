/*
주제: 객체 new 연산자와 생성자
-{} 대신에 new 연산자를 사용해서 빈 객체를 생성할 수 있다.
단 new 연산자 다음에 빈 객체를 초기화 시키는 함수를 곧바로 호출해야 한다.
함수를 호출하기 않으면 오류이다.
- new
  빈 객체를 생성하는 연산자
- 생성자
  빈 객체에 초기 값을 셋팅하는 함수를 "생성자(constructor)"라고 부른다.
*/
"use strict"

//
function init() {

}
var obj = new init()

console.log(typeof(this));

/* new 연산자를 이용한 객체의 생성과
그리고 생성되는 변수 this 글구 {} 걍 이렇게 해도됨

단 new 연산자는
빈객체를 특별한 어떤 값으로 자동 초기화 시키고 싶을 때 사용한다,.
*/