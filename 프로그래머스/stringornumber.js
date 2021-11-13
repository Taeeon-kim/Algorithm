
// function solution(a){
//     if(a.length == 4 || a.length==6){
//     var b = Number(a)
//      if(isNaN(b))
//     {
//      return console.log(!isNaN(b))
//     }     else {
//      return console.log(!isNaN(b))
//     }
//     }
    

// }
// solution("12345") 


// isNaN 방식은 e22 등의 지수가 나오면 문자가아닌 숫자로 인식하기때문에 테스트11이 실패가 뜬다.

function solution(s){
    if(s.length>=1 && s.length<=8){ 
        var reg = s.match(/\D/g)
     if((s.length == 4 || s.length==6) && reg === null){
        return console.log(true)
        }
        else {return false}
   }
     else {return false}
     
 }

 solution('12234')