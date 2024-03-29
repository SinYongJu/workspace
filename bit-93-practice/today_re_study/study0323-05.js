/*
함수 재귀호출
함수를 호출한 후 다시 자기 자신을 호출하기
코드가 간단해 진다.
반복문을 사용하기 보다 속도가 느림 메모리 다량 사용
너무 깊게 호출시 스택 메모리가 부족하여 오류가 발생할 수 있다.
*/

"use strict"


var sum = 0
for (var i = 1; i <= 5; i++)  {
  sum += i
}
console.log(sum)
console.log('-----------------------')

function sigma(n) {
  if (n==1) return 1

  return n*(sigma(n-1))


}

var sum2 = sigma(5)
console.log(sum2)

// 이경우에는 디버거로 확인해 보면 되는데 이때 중요한 사실은
// stack이 쌓여서 나중꺼 먼저 지워지면서 출력된다. 이를 잘 알고 잇자
// 재귀 함수 사용시 스택 메모리가 증가한다,

/* 주제: 함수 - 재귀호출 II
- 꼬리 재귀(tail recursive call)
  - 재귀 호출하여 리턴한 값을 계산하지 않고 곧 바로 리턴하도록 만든다.
  - 이런 경우 스크립트 엔진이나 컴파일러가
    스택 메모리를 과도하게 사용하지 않도록 자동으로 최적화를 수행한다.
  - 최적화를 수행 방법
    1) 일반적인 반복문으로 코드를 바꾸기도 한다.
    2) 스택 메모리를 증가시키지 않고 재사용하기도 한다.
- nodejs에서 꼬리 재귀에 대해 최적화를 수행하려면,
  다음과 같이 실행할 때 최적화 옵션 --harmony 를 추가하라.
  > node --harmony test27.js
- 꼬리 재귀함수에 대해 최적화가 이루어지면,
  꼬리 재귀함수를 호출하더라도 스택 메모리를 증가시키지 않는다.
  기존에 생성된 변수를 재사용한다.

*/
"use strict"

// Sigma(n)을 꼬리 재귀호출로 구현하기
function sigma(n, sum) {
  if (n == 1)
    return sum * n
  return sigma(n - 1, sum * n);
}

var result = sigma(5, 1)
console.log(result)


// 예는 중간중간의 값들이 필요가 없어서 stack이 쌓이질 않는다
// 꼭 디버거로 확인해 보자!!!!
//재귀 함수의 최적화로 인해 ! 스택 메모리를 증가시키지 않는다.


//
