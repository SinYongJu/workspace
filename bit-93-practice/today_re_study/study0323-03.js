/*
함수 클로저3
글로벌 변수와 블로 제한 변수
*/

"use strict"

var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var functionList= []

//일반 {}안에 선언하는 var 변수는 "글로벌 변수"이다.
//단, 함수 안에 선언된 var 변수는 "로컬 변수"이다.

for (var i = 0; i < arr.length; i++) {
  functionList[i] = function(){
    console.log(arr[i]);
  }
}
//i는 글로벌 변수이기 때문에 따로 저장하지 않는다.
//글로벌 변수라 삭제는 안됨
console.log(i)
functionList[0]();
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();
//블록변수는 제거됨, 저장하는 메모리가 사라짐 !
