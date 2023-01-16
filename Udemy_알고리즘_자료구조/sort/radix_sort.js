function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  // first way to count digits
  return num.toString().length;
}
function digitCount2(num) {
  // second way to count digits
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  //first way to calculate most digits
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCount(arr[i] > largest)) {
      largest = digitCount(arr[i]);
    }
  }
  return largest;
}
function mostDigits2(arr) {
  // second way to calculate most digits
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(largest, digitCount(arr[i]));
  }
  return largest;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(nums, "1");
    nums = [].concat(...digitBuckets);
    // console.log(nums);
    return nums;
  }
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
// console.log(getDigit(12345, 4));
// console.log(digitCount2(1));
// console.log(mostDigits2([1, 10]));
