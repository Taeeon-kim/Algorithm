var arr= [10];
function solution(arr) {
    if (arr.length <= 1) return [-1];
    let min;
    arr.reduce((acc, cur) => min = cur > acc ? acc : cur);
    return arr.filter(e => e !== min);
  }
// sort((a,b)=> b-a ).join('')
console.log(solution(arr))