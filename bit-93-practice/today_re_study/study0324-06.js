/*
주체 : 객체 - 일반 함수와 인스턴스 함수
일반 함수
=> 객체에 들어있는 값에 의존하지 않고 실행하는 함수
- 인스턴스 함수
=> 객체를 다른 말로 'instance'라고 부른다.
사람과 청소년의 관계와 같아
즉 객체는 값 배열 함수 등을 가리키는 일반 용어

=> 인스턴스에 들어 잇는 값을 다루는 함수
=> 인스턴스 없이 호출 안되용!
*/
"use strict"

//인스턴스== 객체, 인스턴스 생성자 혹은 {}에 의해 만들어진 객체를 가르킴
// 그밖에 배열이나 값, 함수는 오브젝트!! 그자체!
//인스턴스 함수란 인스턴스에 들어잇는 값을 다루는 함수
//인스턴스 없이 호출 할 수 없다. (연관 검색어! prototype, this)
function Calculator() {
  this.result = 0
}
Calculator.prototype.plus = function(value) {this.result += value} //인스턴스 함수
Calculator.prototype.plus2 = function(a, b) {return a + b} // 인스턴스 함수



var c1 = new Calculator()
var c2 = new Calculator()


c1.plus(100)//c1이 가리키는 인스턴스의 result변수에 100을 더한다.
var r1 = c1.plus2(100, 200) //두개의 아규먼트 값을 더해서 그 결과를 리턴한다.
console.log(c1.result, r1)

c2.plus(200)
var r2 = c2.plus2(1000, 2000)
console.log(c2.result, r2)

/*
plus() 함수는 실행할 때 인스턴스의 변수를 사용한다,
따라서 plus() 함수는 prototype 객체에 보관하는 것이 맞다.
왜? prototype에는 인스턴스에 대해서 작업을 수행하는 함수를 두는 장소이다.

plus2() 함수는 실행할 때 인스턴스를 사용하지 않는다.
내부 코드를 보면 this 변수를 사용하지 않는다는 것을 알 수 있다.
이런 함수는 굳이 prototype에 저장할 필요가 없다
왜? plus2는 인스턴스의 변수(주소) this를 사용하지 않기 때문! 비효율갑!
*/
// 선택1 함수를 글로벌 함수로 만든다.
function plus2(a, b) {
  return a + b
}


/* 선택2) plus2() 함수는 Caculator와 관련된 기능을 수행하는 것은 맞다
그러나 글로벌 함수로 만드는 것은 유지보수에 안좋다
아무래도 서로 관련된 함수끼리 모아두는 것이 유지보수에 좋다.
이런 경우,
서로 관련된 함수 끼리 모아두고 싶고, 그러나 인스턴스를 사용하는 것이 아닐때
prototype 객체에 보관하지 말고, 함수 객체에 바로 보관하라

*/
Calculator.plus2 = function(a, b) {return a + b}
//호출예
var r3 = Calculator.plus2(100, 200)
console.log(r3)
//Calculator.prototype.plus(10);
