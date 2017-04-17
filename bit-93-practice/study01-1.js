/* 중간 미들텀!
프롬프트를 이용하여 학생 성적 목록 만들기
*/
"use strict"

var prompt = require('prompt');

prompt.start();

var studentList = [
                  ["홍길동1", 100, 90, 80, 270, 90],
                  ["홍길동2", 100, 90, 80, 270, 90],
                  ["홍길동3", 100, 90, 80, 270, 90],
                  ["홍길동4", 100, 90, 80, 270, 90]
                ];

f1();


function f1() {
    prompt.get(['command'], function(err, result) {
      var a = result.command
      switch (a) {
        case 'list':
          console.log("[학생목록이욤!]");
          //for(var i = 0 ; i < studentList.length; i++) {
            console.log(studentList)
            f1();

          return;
          break;
        case 'add':
          console.log("[입력해보던가]")
          f2();
          function f2(){
            prompt.get(['name', 'kor', 'eng', 'math'], function(err, result){
                var student =  [result.name,
                                parseInt(result.kor),
                                parseInt(result.eng),
                                parseInt(result.math),
            studentList[4]= studentList[1] + studentList[2] + studentList[3],
            studentList[5]= studentList[4] / 3 ];

            studentList[studentList.length] = student

          f1();

          });
        }
          return;
          //break;

        case 'quit':
          console.log("사요나라~~~")
          return;
          //break;

    }
    f1();
  });
}
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
