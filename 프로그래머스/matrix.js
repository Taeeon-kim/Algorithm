//1 번째 방법 , 실패 코드 실행 통과, 테스트 케이스 모두 실패

// function solution(arr1, arr2) {
//     let sum;
// if(arr1[0][1]!=undefined){
//      sum = [[0,0],[0,0]];
// }
//     else {
//         sum = [[0],[0]]
//     }
// for(var i = 0; i<sum.length; i++)
// {
//     for(var j =0;j<sum[i].length; j++)
//     {
//         sum[i][j] = arr1[i][j]+arr2[i][j] 
//     }


//1.1 번째, 아래 참고후 위에 내 코드 수정하여 성공함

function solution(arr1, arr2) {
    let sum =[];

for(var i = 0; i<arr1.length; i++)
{ sum[i]=[];
    for(var j =0;j<arr1[i].length; j++)
    {
        sum[i][j] = arr1[i][j]+arr2[i][j] 
    }


}
    return sum
}


// //push 로 응용
// function solution(arr1, arr2) {
//     let sum =[];

// for(var i = 0; i<arr1.length; i++)
// { sum[i]=[];
//     for(var j =0;j<arr1[i].length; j++)
//     {
//         sum[i].push(arr1[i][j]+arr2[i][j])
//     }


// }
//     return sum
// }

// }
//     return sum
// }


// --------------------

//2번째, 실패 

// let a = [[],[]]
// let arr1 = [[0,1],[2,1]]
// let arr2 = [[2,3],[3,4]]
// for (var i of arr1)
// {
    
//       for ( var j of arr2){
//         console.log(i[0],j[0])
//       }
    
// }

// console.log(a)

//3번째, 답 참고


// function sumMatrix(A,B){
  

//     return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 


function solution(arr1, arr2) {
    var answer = [];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

console.log(solution([[2,3],[3,4]],[[1,2],[3,4]]))