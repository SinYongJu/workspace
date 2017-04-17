/*
개게는 문자열로 이름을 붙인 값들의 집합이다.
배열은 숫자로 이름을 붙인 값들의 집합이다.
*/

"use strict"


var names = []

names[0] = "홍"
names[1] = "임"
names[2] = "유"
names[5] = "윤"
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[5]);
console.log('-------------------------');

var obj = {}
obj["name"] = "홍"
obj['name2'] = '임'
obj.name3='유'


var v = "name4"
obj[v] ='윤'
console.log(names);
console.log(names);
console.log(names);
console.log(names);
/*
객체에 저장하는 값을 보통 "프로퍼티"라고 한다.
값을 저장할때 사용하는 문자열을 프로퍼티명 이라고 부른다
프로퍼티 이름에 특수문자나 공백 등이 포함되어 있을 때는
객체.프로퍼티명 형식으로 값을 저장 할 수 없다
객체[프로퍼티명] 형식으로 값을 저장해야만 한다
//obj.first name = '길동' 프로퍼티 명에 공백이 있기 때문에 이 형식으로 값을 저장할 수 없다.
그래서 값을 꺼낼 수 없다.
*/
//이런 방식이 적절함  대괄호로 처 넣어봐요!
obj['first name'] = '길동' // OK!
obj['hello^^;'] = '오호라~' // OK!
