// function solution(lottos, win_nums) {
// var rank_best = 0;
// var rank_worst = 0;
// var rank_list = [6,5,4,3,2,1];

// var cnt=0;
// var zero =0;
// var result=[]

// for (var i=0; i<lottos.length; i++){
//   if(lottos.includes(win_nums[i]))
//   {
//     cnt++;
//    } 
// }
//  lottos.reduce((acc,curr)=> {
//    if(curr===0)  {zero+=1} 
//    else false;
//    return zero
//  },0)
// rank_worst = cnt;
// if(cnt<=1 ){ rank_worst=rank_list[0]}
// else {rank_worst = rank_list[rank_worst-1]}
// rank_best= zero+cnt;
//     if(rank_best ===0){rank_best= rank_list[0]}
// else (rank_best= rank_list[rank_best-1])
// result = [rank_best,rank_worst]
// return result;
// }

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);
// // expected output: 1


// class Node {
//     constructor(content, children = []) {
//       this.content = content;
//       this.children = children;
//     }
//   }
  
//   const tree = new Node('hello', [
//     new Node('world'),
//     new Node('and'),
//     new Node('fun', [
//       new Node('javascript!')
//     ])
//   ]);
  
//   function traverse(node) {
//     console.log(node.content);
//     for (let child of node.children) {
//       traverse(child);
//     }
//   }
  
//   traverse(tree);


//   function solution(s){
//     if(s.length>=1 && s.length<=8){ 
//         var reg = s.match(/\D/g)
//    ((s.length == 4 || s.length==6) && (reg === null)) ? true : false
        
//     }
//      else {return false}
     
//  }

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a)
//   console.log("b", b)
//   console.log("manyMoreArgs", manyMoreArgs)
// }

// myFun(1, 2, 3, 5,6, 7)



// var win_nums = [7,8,49,10,11,19];
// var lottos = [1,2,3,4,5,6];

// var rank_best = 0;
// var rank_worst = 0;
// var rank_list = [6,5,4,3,2,1];

// var cnt=0;
// var zero =0;
// var result=[]

// for (var i=0; i<lottos.length; i++){
//   if(lottos.includes(win_nums[i]))
//   {
  
//     cnt++;
//    } 
   
// }
//  lottos.reduce((acc,curr)=> {
//    if(curr===0)  {zero+=1} 
//    else false;
//    return zero
//  },0)
// rank_worst = cnt;
// if(cnt<=1  ){ rank_worst=rank_list[0]}
// else {rank_worst = rank_list[rank_worst-1]}
// rank_best= zero+cnt;
//     if(rank_best ===0){rank_best= rank_list[0]}
// else (rank_best= rank_list[rank_best-1])
// result = [rank_best,rank_worst]



// console.log(result)

// var sizes=[[60,50],[30,70],[60,30],[80,40]];
// var max;
// var min=[];
// var max2;
// var result;
// sizes=sizes.toString()
// sizes=sizes.split(',')
// // sizes=sizes.reduce((acc,curr)=> Math.max(parseInt(acc,curr)))
// // sizes = parseInt(sizes[0])
// // console.log(sizes)
// for(var i=0; i<sizes.length;i++)
// {
//   sizes[i]=parseInt(sizes[i])
// }
// // console.log(sizes)
// max= Math.max(...sizes)
//   for(var j=0; j<sizes.length/2;j++)
//   {
//     min[j]= Math.min(sizes[j*2],sizes[2*j+1])
//   }
//   if(sizes.indexOf(max)%2===0){
//    max2 =Math.max(sizes[sizes.indexOf(max)+1], ...min)
//   }
//   else{
//     max2 =Math.max(sizes[sizes.indexOf(max)-1], ...min)
//   }
//   result = max*max2;
// // console.log(sizes.indexOf(max))
// console.log(result)




// console.log(test)





// const slime = {
//   name: '슬라임'
// };

// const cuteSlime = {
//   ...slime,
//   attribute: 'cute'
// };

// const purpleCuteSlime = {
//   ...cuteSlime,
//   color: 'purple'
// };

// console.log(slime,cuteSlime,purpleCuteSlime)


// const array = ['a' , 1, 2, 'a' , 'a', 3];
// let array2;
// // 1: 'Set'
// array2=[...new Set(array)];

// console.log(array2)

// const array = ['0', 1, 2 ,3,4,'0', '0', 3]
// array.filter((item, index) => array.indexOf(item) !== index);
// // ['0', '0']
// console.log(array.filter((item, index) => array.indexOf(item) === index))   //  item 에 해당하는 index 가 현재 index 같으면 추가해주고 아니면 안넣주는데 예를들어  index가
// //5에 해당하는 값은 '0'인데 indexof(item)이 결국 indexof('0')인데 '0'을 찾은 가장 첫번째 index 를 출력해주는게 indexof 다 따라서 처음으로 발견한수의 index와 현재 index 가 같으면 중복이 없는거고
// //같지 않다면 중복이 있는것이다.

// var arr= [1,1,3,3,0,1,1]
// console.log(arr.filter((item, index) => arr[index]!==arr[index+1]))


// function solution(nums) {
//   var result=[]
//   var count=0;
//    for(var i=0; i<nums.length-2;i++)
//        {
//            for(var j=i+1;j<nums.length-1;j++){
//                for(var k=j+1; k<nums.length;k++)
//                    {
//                        result.push(nums[i]+nums[j]+nums[k]);
//                    }
//            }
       
//        }
//        for(var m=0;m<result.length;m++){
//          for(var n=2;n<result[m];n++)
//          {
//             if(result[m]%n === 0) {break}
//             else if(n===(result[m]-1)){
//                   count++;
//             }
//          }
//       }
//    return count;
// }
// var nums=[1,2,3,4]
// console.log(solution(nums))

// var a = 'adf@dfAERgfA';
// a=a.toLowerCase().slice(0,4)


// console.log(a)

// const str = 'table football';

// const regex = new RegExp('foo*');
// const globalRegex = new RegExp('foo*', 'g');

// console.log(regex);
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 0

// console.log(globalRegex.test(str));
// // expected output: true

// console.log(globalRegex);
// // expected output: 9

// console.log(globalRegex.test(str));


// var regExp = /[^a-zA-Z0-9-_.!]/g;
// var a='@'
// console.log(regExp.test(a))

var a= 'sdfds##sdfDDF';
a=a.toLowerCase()
console.log(a)


var regExp = /[^a-zA-Z0-9-_.]/g;
var a='..aaa!s..@#%&Sdfsdlakd...fldkasdasdasdSQTR..ss9..';
if(a==='') return a='a';
a=a.replace(regExp, '').toLowerCase();
a=a.split('')
for(var i=0;i<a.length;i++){
    if(a[i]==='.'){
        if(a[i]===a[i+1]){
            while(a[i+1]==='.')
            {
            a.splice(i,1)
            }
        }
     if(i===a.length-1)
     {
        a.splice(i,1)
     }
    }
}
if(a[0]==='.') a.splice(0,1)
a=a.join('')
if(a.length>15) a=a.slice(0,16) 
if(a[a.length-1]==='.')
{while(a[a.length-1]!=='.') a.splice(a.length-1,1)
}
console.log(a) 
