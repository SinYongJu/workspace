/*
객체-함수를 이용하여 객체를 생성하기
*/
"use strict"

// 배열에 여러 종류의 값을 저장할 수 있다.

function createScore(name, kor, eng, math) {
  return {
    name : name,
    kor : kor,
    math: math,
    sum : kor + eng + math,
    aver : (kor + eng + math)/3
  }
}
// 한 학생의 이름 및 성적을 객체에 담는다.
var scores2 = [
  createScore("홍길동1", 100, 100, 100),
  createScore("홍길동2", 90, 90, 90),
  createScore("홍길동3", 80, 80, 80),
  createScore("홍길동4", 70, 70, 70),
  createScore("홍길동5", 60, 60, 60),

]



console.log( scores2[2].sum)
