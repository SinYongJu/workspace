// Array에 대하여
/*
배열의 사용법
Syntax들!
배열의 길이 : 배열명.length

배열 초기화 시키기
var 배열명 = [값, 값, 값, ....]

배열의 값을 추가하기!
배열명 [index(색인)] = 값!

값 꺼내기
배열명[index]

배열에는 서로 다른 종류의 값을 넣을 수 있다.
*/

"use strict"
//배열의 초기화

var arr1 = [] // 빈 배열 만들기
console.log("arr1's length"+":"+arr1.length)

hr();


var arr2 = [10, 20, 30, 40]; // 4개의 정수 값으로 배열 초기화
console.log(arr2.length);

hr();

arr1[0] = 150;
arr1[1] = 200;

console.log(arr1.length);

hr()
// 중간 인덱스를 건너뀌고 값을 넣으면 가장 큰 인덱스까지가 배열 크기이다.
arr1[100] = 300;
console.log(arr1.length);

hr()
//값 꺼내기
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[50]);
console.log(arr1[101]);

hr()
arr2[2] = "홍길동" // 만약에 이렇게 arr2의 이미 값이 있는 배열에 넣었을 경우
// 이렇게 원래 있던 배열의 값을 치환한다.
arr2[4] = false;
arr2[5] = function() {};
arr2[6] = null;
arr2[7] = {};

console.log(arr2);

hr()

var i = 0
while(i < arr2.length) {
  console.log(i+':'+arr2[i]);
  i++;
};
console.log(arr2[7]);
console.log(typeof(arr2[7]));//7번방의 타입이 오브젝트임!!

hr()
console.log("출력 괄호 안의 i, ':', arr2[i]로 설정한 경우")
var i = 0
while(i < arr2.length) {
  console.log(i,':',arr2[i]);
  i++;
};

// 둘의 while문을 비교해본 결과 위쪽건 보기가 편하나 {}를 오브젝트 오브젝트로 표현
// 아래꺼는 [7]에 {}이 표시되어 출력됨

hr()
console.log("for문으로 했을때")

for(var i = 0; i < arr2.length; i++) {
  console.log(i + ':' + arr2[i]);
//while의 비교시 사용한 두개의 식에서 위쪽 거와 같은 모양이나 7번방은 아래꺼와 같이 표시됨!
// 나오는 수치값의 변화와 7번방의 이상한 표시는 i + ':' + arr2[i]때문인듯!
}






function hr() {
  console.log("------^-------^------^------");
};
