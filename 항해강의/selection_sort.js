function selection_sort(string) {
  const length = string.length;
  for (idx in string) {
    let minIndex = +idx;
    for (let j = +idx + 1; j < length; j++) {
      if (string[minIndex] > string[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== +idx) {
      let swap = string[minIndex];
      string[minIndex] = string[idx];
      string[idx] = swap;
    }
  }
  return string;
}

console.log(selection_sort([2, 1, 6, 4, 9])); // O(N^2)
