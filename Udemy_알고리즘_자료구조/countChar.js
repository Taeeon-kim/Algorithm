// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// 미적 리펙토링 ver1
// function charCount(str) {
//   let result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// 미적 리펙토링 ver2
function charCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCount("Hello hi!"));
console.log("A".charCodeAt(0));

// const text= "abcdefghijklmnopqrstuvwxyz";
// let char = text[1];
// let result ={};
// console.log(result[char]>0)
// result['c']++
// console.log(result)
