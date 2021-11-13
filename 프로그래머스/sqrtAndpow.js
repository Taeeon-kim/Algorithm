// console.log(Math.sqrt(144))
// console.log(Math.pow(12,2))
//1번째 내가 푼것


// function solution(number)
// {
//     var sqrt = Math.sqrt(number);
//    var integer = Number.isInteger(sqrt) 
//    if(integer) return Math.pow(sqrt+1,2);
//    else return -1;
// }

// //2번째 응용, 삼항연산

// function solution(number)
// {
//     var sqrt = Math.sqrt(number);
//    var integer = Number.isInteger(sqrt) ? Math.pow(sqrt+1,2) : -1;
//     return integer;
// }

function solution(number)
{
    var sqrt = Math.sqrt(number);
   var integer = sqrt%1 === 0 ? Math.pow(sqrt+1,2) : -1;
    return integer;
}

console.log(solution(121))