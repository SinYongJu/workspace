// Array에 대하여
/*
한번에 여러개의 메모리를 준비하는 방법
변수명과 인덱스 번호를 사용하여 메모리의 위치를 제어한다.
인덱스는 0부터 시작한다.
여러개의 값을 다루기 편하다. 특히 반복문을 사용해값을 다루기 편하다.
Syntax
var names = []; <-----빈 배열 생성
names[0] = "홍길동";
*/

"use strict"

// 배열 사용 전

var kor = 100, eng = 100, math = 100;
var sum = kor + eng + math;
var aver = sum / 3
console.log(kor, eng, math, sum, aver);


hr()

var score = [];
score[1] = 90; // []요기 안의 방번호 대신에 kor을 넣으면 방이름이 앙대요! ''''''''''하고 1 more item이 있다 나옴!
score[0] = 80
score[2] = 70
score[3] = score[1] + score[2] +  score[0]
score[4] = score[3] / 3;
// 3 대신에 score.length를 넣으면 NaN이 나옴!
console.log(score);



console.log(score.length);








function hr() {
  console.log("------^-------^------^------");
};
