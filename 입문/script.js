// 1. 두 수의 차

/* 
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 
return하도록 soltuion 함수를 완성해주세요.
*/

// function solution(num1, num2) {

//   var answer = num1 - num2;
//   return answer;
// }

// console.log(solution(2, 3)); // -1
// console.log(solution(100, 2)); // -98

// 2. 몫 구하기

/* 
정수 num1, num2가 매개변수로 주어질 때,
num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
*/

function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}

console.log(solution(10, 5));//2
console.log(solution(7, 2));//3