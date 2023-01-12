function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
      console.log(currentValue);
    }
    console.log("********************************");
    console.log("j: ", j);
    console.log("j+1: ", j + 1);
    arr[j + 1] = currentValue;
    console.log(arr);

    console.log("end");
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
