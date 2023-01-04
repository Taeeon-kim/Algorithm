// const array1 = [1,2,3,2]
// let frequencyCounter1 = {}
// for(let val of array1){
//     console.log(val, frequencyCounter1[val]);
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1;
//     console.log(frequencyCounter1)
// }

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of string1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of string2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let val in frequencyCounter1) {
    if (!(val in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[val] !== frequencyCounter1[val]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("sstring", "ssrting"));
