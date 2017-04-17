/*
주체 : String() 기본 사용법
*/
"use strict"

//1 함수로 보자
// 빈객체에 문자열을 다루는 데 필요한 프로퍼티를 등록
// 문자열을 객체로 표현

var str1 = new String("Hello")
console.log(str1)
console.log(typeof str1)
console.log(typeof(str1))

// String() 인스턴스 함수를 사용해보자
console.log('문자열 길이',str1.length)
console.log('2번장 문자',str1.charAt(2))

console.log("-------------------------------")

//문자열을 값으로 표현
var str2 = 'Hello'
console.log(str2)
console.log(typeof str2)
/*
str2 는 객체가 아니라 단순히 문자열 값이다.
그런데 String()에서 제공하는 인스턴스 함수를 사용하는 순간
즉시 String에서 객체로 전환된다
따라서 new String()으로 초기화시킨 str1처럼 사용할 수 있다.
*/
console.log('str2의 길이 =', str2.length)
console.log('str2의 길이 =', str2.charAt(2))
