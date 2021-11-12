// var answer = '';
// function solution(num) {
    
//     if(num %2 ==0){
//         answer = 'even';
//     } else {
//         answer ='odd'
//     }
//     return answer;
// }

// console.log(solution(2));

function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + evenOrOdd(2));
  console.log("결과 : " + evenOrOdd(3));