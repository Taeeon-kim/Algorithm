function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end / 2);
  let count = 0;
  while (arr[middle] !== elem && start <= end) {
    count++;
    // console.log(start, middle, end);
    if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end, count);
  }
  return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 3));
