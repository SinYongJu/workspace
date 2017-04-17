/*
Object() 기본 사용법
함수를 사용해보자

객체를 사용하는데 필요한 최소한으 ㅣ프로퍼티를 등록하기
*/


var obj1 = new Object();
console.log(obj1)

var obj2 = {}
console.log(obj2)


var obj2 = {
  name : "홍길동",
  age : 20
}


var obj3 = new Object()


var obj3 = Object.create(null); // 완전 빈객체를 생성
console.log(obj3)


// object() 함수 객체에는 일반 함수에 인스턴스 함수들이 보관되어 있다.

//String() 기본 사용법
var str1 = new String("Hello")
console.log(str1)
console.log(typeof atr1)

console.log('문자열 길이 =', str1.length)
console.log('2번방 문자 =', str1.charAt(2))

var str2 = "Hello"
console.log(str2)
console/log(typeof str2)
// str2 는  객체가 아니라 문자열을 값으로 ㅍ표현
console.log(str2.length)
console.log(str2.charAt(2))

//중요 문자열은 객체가 아닌 문자열이나
//String에서 제공하는 인스턴스 함수를  사용하는 순간
//즉시 String객체로 전환된다.
//따라서 newString으로 초기화시킨 str1 처럼 사용 가능!


Array 기본 사용법

var arr1 = new Array()
console. log (arr1)
console.log(typeof arr1)
var arr2 = []  //new array의 축약형


var arr3 = ['홍길동', '임꺽정', '유관순', '안중근']

arr3.push, pop, shift, splice
