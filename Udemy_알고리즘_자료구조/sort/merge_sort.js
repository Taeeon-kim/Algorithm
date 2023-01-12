function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case;
  // recursive case below
  let midpoint = Math.floor(arr.length / 2);
  let leftArray = mergeSort(arr.slice(0, midpoint)); // divide
  let rightArray = mergeSort(arr.slice(midpoint)); // divide
  return merge(leftArray, rightArray); // sort and merge
}

console.log(mergeSort([5, 1, 74, 30, 76, 70]));
