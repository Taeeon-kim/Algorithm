var arr = 1;
var arr2;
var result=0;
if(arr>=1 && arr<=10000 && Number.isInteger(arr))
{
if(arr<10){arr2= true}
else {arr2=(''+arr).split('').reduce((acc, curr) => parseInt(acc)+parseInt(curr));
arr/arr2 % 2 === 0 ? true :false;
}}
else {arr2= false}
console.log(arr2)