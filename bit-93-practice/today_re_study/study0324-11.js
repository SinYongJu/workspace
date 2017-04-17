/*
주체 : Object() 기본 사용법
*/
"use strict"

// 함수로 보자!
// 객체를 사용하는 데 필요한 최소한의 프로퍼티를 등록
//이렇게 생성된 객체에 대해 어떤 프로퍼티를 사용할 수 잇는지 궁금하면,
//Api문서를 보라!


var obj1 = new Object();
console.log(obj1)
//다음은 위의 명령문과 같다
var obj2 = {} //new Object() 명령의 단 코드
console.log(obj2)

//Obtect() 함수 객체에는 일반함수의 인스턴스 함수들이 보관되어 있다.

var obj2 = {
  name: '홍길동',
  age: 20
}
//인스턴스 함수 (객체에 직접 저장되거나 생성자의 prototype에 저장된 함수) 사용
console.log(obj2.hasOwnProperty('name'))
console.log(obj2.hasOwnProperty('age'))
console.log(obj2.hasOwnProperty('tel'))

//함수 객체에 보관된 일반 함수를 사용해보자!
var obj3 = Object.create(null); //완전 빈 객체 생성하는 함수!
console.log(obj3)
//console.log(obj3.hasOwnProperty(typeof(this)))

//완전히 비었다라~~?
