/*
주제: 연산자 - delete
객체에서 프로퍼티(변수나 함수 등)를 삭제 할 때 사용
*/
"use strict"


var v1 = 100
console.log(v1);
console.log(typeof v1)
//delete v1 // 실행 오류! 객체에 소속되지 않은 변수는 delete 사용 불가요1

console.log('------------------------')

var obj = {}
obj.v1 = 100
console.log(obj.v1)

delete obj.v1
console.log(obj.v1)
