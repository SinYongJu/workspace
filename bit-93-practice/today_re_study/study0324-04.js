/*
주체 :  객체 - 객체와 함수 호출
- 객체에 소속된 함수를 호출할 때는 항상 객체 주소를 줘야 한다.


*/
"use strict"


function Calculator() {
  this.result = 0
  this.plus = function(value) {this.result += value}
  this.minus = function(value) {this.result -= value}
  this.multiple = function(value) {this.result *= value}
  this.divide = function(value) {this.result /= value}
}

var c1 = new Calculator()
//var c2 = new Calculator()
//var c3 = new Calculator()

c1.plus(10)
c1.minus(20)
c1.plus(30)

console.log(c1.result)
//console.log(c2.result)
//console.log(c3.result)

/*이 예제의 문제점?
객체를 생성할 때 마다 plus(), minus(), multiple(), divde()
중복 생성된다.
*/
