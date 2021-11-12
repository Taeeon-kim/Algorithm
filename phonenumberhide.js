// 1 내가 쓴답
function solution(phone_number){
    var star=''
   for(var i=0;i<phone_number.length-4; i++)
   {
       star+='*'
   }
    return star+phone_number.slice(-4)
}

console.log(solution('1111112312311112111'))



// 2번째 repeat 이용 
function solution(phone_number){
    var star=''
       star= '*'.repeat(phone_number.length-4)
   
    return star+phone_number.slice(-4)
}

console.log(solution('1111112312311112111'))

// number ='1234111111'

// frontnumber = number.slice(0,number.length-4)
// backnumber = number.slice(-4)
// console.log(frontnumber)
// console.log(backnumber)$