/*
함수 클로저3
글로벌 변수와 블로 제한 변수
*/

"use strict"

var arr = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길"]
var functionList= []

//일반 {}안에 선언하는 var 변수는 "글로벌 변수"이다.
//단, 함수 안에 선언된 var 변수는 "로컬 변수"이다.

for (let i = 0; i < arr.length; i++) {
  functionList[i] = function(){
    console.log(arr[i]);
  }
}
//i는 글로벌 변수이기 때문에 따로 저장하지 않는다.
//글로벌 변수라 삭제는 안됨
//console.log(i)  // 로컬변수는 제거됨
functionList[0]();
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();
//이경우 글로벌 변수가 없고
//함수를 만들 때 그 함수가 " 로컬변수"나 let변수를 사용할 경우
// 언제 제거될 지 모르기 때문에 실행안전을 위해
//따로 복제해 둔다,
// 그리고 그 복제된 변수를 사용한다.
