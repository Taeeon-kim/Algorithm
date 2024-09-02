let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let firstInput = input[0];
let secondInput = input[1];
const array = [];
let total = 0;
for (let j = secondInput.length - 1; j >= 0; j--) {
  const convertedFirstInput = firstInput / 1;
  console.log(convertedFirstInput * secondInput[j]);
  array.push(convertedFirstInput * secondInput[j]);
}

total = array.reduce(
  (accumulate, currentValue, index) =>
    (accumulate += currentValue * 10 ** index),
  0
);

console.log(total);
