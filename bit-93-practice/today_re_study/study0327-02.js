/*
setTimeout(callback, delay[,...args])
지정된 시간이 지나면 자동으로 호출될 함수를 등록하는 방법
딱 한번만 호출된다.
callback : 지정된 시간이 지났을 때 호출될 함수 주소
delay : 타이아웃 시간(밀리초)
...args : call back을  호출할 때 넘겨줄 값들

*/


"use strict"


function f1() {
  console.log('1초 지났음1')
}
setTimeout(f1, 1000)
console.log('첫 번째 타임아웃 함수를 심었다.')

setTimeout(function(){
  console.log('3초 지났음')
},3000)
console.log('두 번째 타임아웃 함수를 심었다.')


'use strict'

var count = 0;

{
  let timer - setInterval(function() {
    console.log('1초 지났음')
    if (++count== 10)
      clearInterval(timer)
  },1000)
}
클로저 응용법!

var timer = 'ok'
console.log(timer)
