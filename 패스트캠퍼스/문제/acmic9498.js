const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString() / 1;

if (input >= 90) {
  console.log('A');
} else if (input >= 80 && input < 90) {
  console.log('B');
} else if (input >= 70 && input < 80) {
  console.log('C');
} else if (input >= 60 && input < 70) {
  console.log('D');
} else {
  console.log('F');
}
