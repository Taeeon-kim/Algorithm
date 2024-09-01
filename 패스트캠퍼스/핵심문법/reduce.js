let data = [5, 2, 9, 8, 4];

const testReduceCallbackFn = (a, b, c, d, f = 1) => {
  console.log('accumulate a', a);
  console.log('current b', b);
  console.log('current index c', c);
  console.log('array', d);
  console.log('f', f); // 기존 Reduce의 제공 파라미터는 4개이고 그이후는 말그대로 커스텀 파라미터를 추가한거기때문에 정의된게 없어 undefined가 출력되고, 만약 파라미터로 콜백될때마다 활용하고싶다면, f=XX와 같이 초기화해준다
  return Math.min(a, b);
};

let minValue = data.reduce(testReduceCallbackFn, 10);
console.log(minValue);

let summary = data.reduce((a, b) => a + b);
console.log(summary);
