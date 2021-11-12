

function solution(n){
    var a= '수박';
    if(n%2 ===0)
    {
        var melon ='';
        melon= a.repeat(n/2)
    } else {
        melon= a.repeat(Math.round(n/2)).slice(0,n)
    }
    return melon
}
    solution(1);
