console.log('Hello world!');

result = 35;

console.log(`정답은 ${result}입니다. `);

a = 7;
b = 3;

console.log(a + b);
console.log(a - b);
console.log(parseInt(a / b));
console.log(a % b);

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

console.log(input);
