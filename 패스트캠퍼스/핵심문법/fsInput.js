let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = input[0] / 1;
let b = input[1] / 1;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
