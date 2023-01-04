function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`time : ${(t2-t1)/1000} seconds`)