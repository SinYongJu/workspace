"use strict" // add 만들기

var prompt = require('prompt');

prompt.start();

var studentScore = [
  ["홍길동1", 100, 90, 80, 270, 90],
  ["홍길동2", 100, 90, 80, 270, 90],
  ["홍길동3", 100, 90, 80, 270, 90],
  ["홍길동4", 100, 90, 80, 270, 90]
];



f1();

function f1() {
  prompt.get(['command'],function(err, result) {
    var command = result.command
    switch (command){
      case  "list" : {
        console.log("학생성적 리스트");
        var count = 0
        for(var Score of studentScore) {
          console.log(count++ +":",Score[0],+ Score[1], + Score[2],
          + Score[3],+ Score[4], + Score[5])
        }
        f1();
        }
      return;

      case  "add"  : {
        console.log("학생 성적 입력");
        prompt.get(['name', 'kor', 'eng', 'math'], function(err, result){
        var insurt =[result.name,
          parseInt(result.kor),
          parseInt(result.eng),
          parseInt(result.math)
          ]
          insurt[4]= insurt[1]+insurt[2]+insurt[3]
          insurt[5]= insurt[4] / 3
           //배열에 추가시 배열을 만들어 놓고 추가 하럿!

        studentScore[studentScore.length] = insurt
        console.log("입력완료!")
        f1();

        })
      }
      return
      case  "delete" :   {
        console.log("학생 성적 삭제! 시작은 1부터!");
        prompt.get(['no'],function(err, result){
          var i = result.no-1;
          studentScore.splice(i ,1)
          f1();
        });
        return;
      }
      case  'quit' : {
        console.log("안녕히가세요!");
        return
      }
      break;

      default :
        console.log("command : list , add, delete, quit!")
        f1();

     }
 })
};
