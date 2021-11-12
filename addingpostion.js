let n = 987;

let a = n.toString().split('');
console.log(a)
let result=0;
for(let one of a){
   result += parseInt(one); //Number() 와 parseInt() 차이는 메모장에서 찾아보기, parseInt는 문자열을 숫자로 바꿔주고, Number은 문자열을 Number 로 바꿔준다. 소수점이있는 문자열은 Number은 그대로 바꿔줄수있고
                                  //parseFloat을 쓰면된다. 
}
console.log(result)
