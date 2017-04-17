"use strict" // list의 출력

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
      return;}
      case  "add"  :
        console.log("학생 성적 입력");
      break;
      case  "delete" :
        console.log("학생 성적 삭제!");
      break;
      case  'quit' : {
        console.log("안녕히가세요!");
        return
      }
      break;
   }
   f1();
 })
};
