/*
주체 : 객체 _ this 변수의 활용
this 변수의 용도
객체에 저장된 변수나 함수를 사용할 때 this(객체 주소)가
필요하다.

*/
"use strict"


//객체의 생성 방법 1 빈객체를 만든 후 값을 저장하는 방법
var obj1 = {}
obj1.v1 = 0
obj1.f1 = function() {
  v1 = 100
}
console.log(obj1)

var obj = {
  v1 : 0,
  f1: function() {
    this.v1 = 100
  }
}

//obj.f1()
console.log(obj.v1)
// 이봐 닝겐아 넌 컴퓨터한테 말하는 거야 컴터는 위에서부터
//아래로 읽어 들어가 등신아 그러니 너가 obj.f1을 실행하지
//않으면
// 저건 출력되어지지 않어!
