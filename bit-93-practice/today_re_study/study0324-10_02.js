/*
주체 : 객체 -.definedProperty() 응용
'result' 변수의 값을 임의적으로 바꾸는 문제를 해결
=> 클로저 기법을 사용하여 result 변수를 객체에서 감춘다,
*/
"use strict"

function Calculator() {

}
let result = 0 ;
Calculator.prototype.plus = function(value) {
  result += value

  // 로컬 변수나 let 변수는 언제든 함수호출 끝나거나 블록을 벗어날 경우
  // 제거될 수 잇음 이런 경우르 해소하기 위해
  // 그 변수의 값을 클로저가 과닐하는 별도의 메모리에 저장저장

}
Calculator.prototype.minus = function(value) {
  result -= value
  // 같은 영역에서 만든 함수는 클로저의 메모리 영역의 공유
  // 플러스나 마이너가 복제한 result는 같은 변수!
}
Calculator.prototype.getResult = function(value) {
  return result
}

var calc1 = new Calculator()

calc1.plus(100)
calc1.minus(20)
calc1.plus(10)
console.log(calc1.getResult())

//console.log(calc1.result) 이단 cacl1 객체에는 프로퍼티명으로 result가 없어용
//result 값을 알고 싶다면 get result() 함수를 호출해야한다.
