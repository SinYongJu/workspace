/*
함수 클로저
함수안에 함수가!?
클로저에서 사용하는 메모리는 별도 관리한다,!
*/

"use strict"

var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var count = -1;

//클로저가 자체 변수를 사용하기전
//클로저가 글로벌 변수 count를 사용한다.

function other() {
  count++
  return function() {
    console.log(arr[count])
  }
}
console.log(arr[count])
var f1 = other();
var f2 = other();
var f3 = other();
var f4 = other();
var f5 = other();




//글로벌 변수 count에의해서 실행된 클로저는 총 5회의 함수들에 의해
// 변수의 값이 4까지 커진다.
// 함수 5개의 실행에 의해 클로저에는 count라는 변수의 값은 4가 된다!. 
f1()
f2()
f3()
f4()
f5()
