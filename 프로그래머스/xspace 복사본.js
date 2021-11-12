
//1번째 시도, 알고리즘은 되지만 += 은 string 타입으로 바꾸기때문에 실패한다.
// var x, n;
// var sum=[];
// x=-2, n=2

// for(var i=0;i<n;i++){
//     sum[i]=[]
//     sum[i]+=x*(i+1);
// }
// console.log(typeof sum[0])

//1.2 map 과 parseInt 사용하여 잘된다.

function solution(x, n) {
    var sum=[];
    
    for(var i=0;i<n;i++){
        sum[i]=[]
        sum[i]+=x*(i+1);
    }
        
        return sum.map((x) => parseInt(x,10));
    }








//----------------------------------------------
//2번째 push 를 이용하여 number에서 string으로 바뀌지않고 정수 그대로를 밀어 넣는다.
function solution(x, n) {
    
    var sum=[];
    // x=-2, n=2
    
    for(var i=0;i<n;i++){
        
        sum.push(x*(i+1));
    }
        return sum;
    }