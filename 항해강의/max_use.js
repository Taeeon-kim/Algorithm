function getCount(array) {
  return array.reduce((pv, cv) => {
      
    pv[cv] = (pv[cv] || 0) + 1;
    // console.log(pv)
    return pv;
  }, {});
}

// 1. 문자열
const strings = ["a", "b", "b", "c", "c", "c", "d", "d", "d", "d"];
// const a = {"a":2};
// console.log(a["a"    ]=(a["a"]||0));

const result = getCount(strings);

let max =0;

let alphabet ='';
for(value in result){
    if(result[value]>max){
        max=result[value]
        alphabet=value;
    }
    
}
console.log(max,alphabet)
console.log(result);
// { a: 1, b: 2, c: 3, d: 4 } // 2. 숫자
// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// getCount(numbers); // { '1': 1, '2': 2, '3': 3, '4': 4 }
// // 3. 문자열+숫자
// const mix = [2, 2, 3, 3, 3, "a", "b", "b"];
// getCount(mix);
// { '2': 2, '3': 3, a: 1, b: 2 }
