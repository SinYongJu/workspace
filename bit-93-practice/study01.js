/* 중간 미들텀!
프롬프트를 이용하여 학생 성적 목록 만들기
*/
"use strict"



var studentList = [
                  ["홍길동1", 100, 90, 80, 270, 90],
                  ["홍길동2", 100, 90, 80, 270, 90],
                  ["홍길동3", 100, 90, 80, 270, 90],
                  ["홍길동4", 100, 90, 80, 270, 90]
                ];

/*console.log(studentList);
for(var student of studentList);{
  console.log(student); }
*/
//  for(var student of studentList);{
var student = studentList
    for(var i =0 ; i < student.length; i++) {
      console.log(student[i]);}
  //  }



















/*
var prompt = require('prompt');

prompt.start();



f1();


function f1() {
    prompt.get(['command'], function(err, result) {
      var a = result.command
      switch (a) {
        case 'list':
          console.log("학생목록 입니다.")
          break;
        case 'quit':
          console.log("사요나라~~~")
          return;
          //break;

    }
  f1();
  });
}
*/
//
/*
function f1() {
  prompt.get(['command'], function(err, result) {
    var a = result.command
    if (a == 'list') {
                      console.log("학생목록입니다.")
                      f1();}
      else if(a == 'quit') {
                      console.log("사요나라~~~");
                      return; }
      else f1();
      //  f1();
  });
}
*/
