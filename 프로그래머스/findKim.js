var n=1 //에러없애기위해
function solution(seoul)
{
var kim= /Kim/g;


for(var i=0 ; i<seoul.length; i++){
    if((seoul[i].match(kim))!= null){
        var string= `김서방은 ${n}에 있다`;
    }
}
return string
}



console.log(solution(["jane","Kim"]))