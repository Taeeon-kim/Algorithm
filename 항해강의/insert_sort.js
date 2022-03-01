const input = [4, 6, 2, 9, 1];
function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i - j - 1] > array[i - j]) {
        let swap = array[i - j - 1];
        array[i - j - 1] = array[i - j];
        array[i - j] = swap;
        console.log(array, i);
      } else break;
    }
  }
  return array;
}
console.log(insertion_sort(input));

// function test(){
// for(let i =0; i<5; i++){
//     for(let j=0; j<5;j++){
//         break;
//         console.log(j)
//     }
//     console.log('hi',i)
// }
// console.log('bye')
// }

// test()
