// Array에 대하여
/*
반복문 for of
배열 뿐만아니라 including array, map ,set, String, typearray,
arguments object 기타 등등
값을 추출할 때 사용
for in 과의 차이점은 변수에 저장되는 것은 인덱스나 프로퍼티명이 아니라
값이라는 점이다.
*/
"use strict"

var names = ["홍길동", "임꺽정", "유관순", "안중근", "윤봉길", "김구"];

for (var index in names) {
  console.log(index);
}

hr()

for (var value of names) {
  console.log(value);
}


function hr() {
  console.log("------^-------^------^------");
};
