const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(input);
  process.exit();
});
