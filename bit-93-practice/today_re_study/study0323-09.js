/*
객체 저장할 수 있는 값
일반 변수와 같다
*/
"use strict"
// 배열에 여러 종류의 값을 저장할 수 있다.
var values = [
  "홍길동",
  100,
  3.14,
  true,
  [100, 90, 80],
  {"email": "test@test.com", "tel": "111-1111", "age": 20 },
  function(a, b) {return a + b},
  null,
  undefined,
  NaN,
  Infinity,
  -Infinity
]
// 배열은 숫자에 의해 저장됨 그리고 출력창에서는 ','에의해 일렬로 표기
console.log(values)
console.log('---------------------')

// 배열과 마찬가지로 객체에 여러 종류의 값을 저장할 수 있다.
var obj1 = {
  "v1": "홍길동",
  "v2": 100,
  "v3": 3.14,
  "v4": true,
  "v5": [100, 90, 80],
  "v6": {"email": "test@test.com", "tel": "111-1111", "age": 20 },
  "v7": function(a, b) {return a + b},
  "v8": null,
  "v9": undefined,
  "v10": NaN,
  "v11": Infinity,
  "v12": -Infinity
}
// 객체는 "문자열"로 입력되어 저장되는데 출력창에서 라벨과 할께 표기됨 읽기 핵쉬움!

console.log(obj1)







//
