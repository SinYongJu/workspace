"use strict" // command의 재입력

var prompt = require('prompt');

prompt.start();

f1();

function f1() {
  prompt.get(['command'],function(err, result) {
    var command = result.command
    switch (command){
      case  "list" : {
        console.log("학생성적 리스트");
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
