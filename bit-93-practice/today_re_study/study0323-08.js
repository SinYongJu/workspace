/*
객체 변수에 저장하는 것은 객체의 주소이다
어떤 메모리의 주소를 저장하는 변수를 "레퍼런스(변수)"라 부른다.
*/

"use strict"
/*names1에 배열이 저장되는가? 아니면 배열의 주소가 저장되는가?
메모리의 효율적인 사용을 위하여 배열의 주소를 주고 받는다
배열을 자꾸 복제하게 되면 메모리가 낭비될 것이다.
*/
var names1 = ["홍길동", "임꺽정", "유관순"]
var names2 = names1


names2[5] = "윤봉길"
console.log(names1)
console.log(names2)


console.log("--------------------------------");



var obj1 = {"name": "홍길동", "name2" : "임꺽정", "name3" : "유관순"}
var obj2 = obj1
obj2.name = "5호라"
console.log(obj1)
console.log(obj2)

//참고!
// - 숫자나 boolean인 경우 변수에 직접 값을 저장하고, 그 값을 복제하여 주고 받는다.
// 숫자인 경우
var v1 = 100
var v2 = v1
v1 = 200
console.log(v1, v2)

// boolean 인 경우
v1 = true
v2 = v1
v1 = false
console.log(v1, v2)

// 문자열인 경우
// - 문자열은 실제 문자열이 들어있는 메모리의 주소가 들어간다.
// - 문자열은 배열이나 객체와 달리 값을 변경할 수 없다. = immutable object
v1 = "홍길동"
v2 = v1
v1 = "임꺽정" // 새 메모리를 만들어 "임꺽정"을 저장한 후 그 주소를 리턴한다.
console.log(v1, v2)

// 문자열이 immutable 객체임을 확인해보자!
v1 = "홍길동"
v2 = v1.replace("동", "순") // 문자열은 immutable 객체이기 때문에 값을 바꿀 수 없다.
                      // 그럼 replace()는 무엇을 바꾼 것인가?
                      // 원본 문자열에서 "동" 문자를 "순"문자로 바꾼 새 문자열 만든다.
                      // 그리고 새로 만든 문자열을 리턴한다.
console.log(v1, v2)

// 문자열을 number나 boolean 값 처럼 직접 변수에 저장한다면
// 다른 변수에 값을 저장할 때 똑 같은 문자열이 계속 복제될 것 아닌가?
// 메모리를 낭비하게 된다.
v1 = "오호라... 그렇군요.. 이렇게 긴 문자열을 값으로 다룬다면 문제가 되겠네요."
v2 = v1  // 그래서 문자열이 저장된 주소를 주고 받는 것이다.
console.log(v1)
console.log(v2)



//
