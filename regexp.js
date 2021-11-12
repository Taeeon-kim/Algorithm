var re = /ab+c/;
console.log(re)

var re1 = new RegExp("ab+c");
console.log(re1)  // 결과값이 위 /ab+c/ 와 같다.

var re2 = /\D/g
var a='12a3dEgaQaA'
console.log(a.match(re2))

var reg = /[a-e]/gi
var test = a.match(reg)
console.log(test)
console.log(test[2])
var str = "Nothing will come of nothing.";

console.log(str.match("will")); 

var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";

console.log(str1.match("number")); 
console.log(str2.match(65));