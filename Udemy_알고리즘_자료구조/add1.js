function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`time : ${(t2-t1)/1000} seconds`)
console.time(addUpTo)
addUpTo(100000000)
console.timeEnd(addUpTo)