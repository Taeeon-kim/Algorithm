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

// --------카카카오-------------------------------

// var a= 'sdfds##sdfDDF';
// a=a.toLowerCase()
// console.log(a)

// var regExp = /[^a-zA-Z0-9-_.]/g;
// var a='..aaa!s..@#%&Sdfsdlakd...fldkasdasdasdSQTR..ss9..';
// if(a==='') return a='a';
// a=a.replace(regExp, '').toLowerCase();
// a=a.split('')
// for(var i=0;i<a.length;i++){
//     if(a[i]==='.'){
//         if(a[i]===a[i+1]){
//             while(a[i+1]==='.')
//             {
//             a.splice(i,1)
//             }
//         }
//      if(i===a.length-1)
//      {
//         a.splice(i,1)
//      }
//     }
// }
// if(a[0]==='.') a.splice(0,1)
// a=a.join('')
// if(a.length>15) a=a.slice(0,16)
// if(a[a.length-1]==='.')
// {while(a[a.length-1]!=='.') a.splice(a.length-1,1)
// }
// console.log(a)
///----------------------------------------------------------

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     var star ='';
//     for (var i=0; i<b; i++){
//         for(var j=0; j<a; j++)
//         {
//             star += '*';

//         }

//         star=''
//     }

// });

// var answer=0;
// // var a=5, b =3;
// var gap= b-a;
// if(a>b) gap = gap*-1
// for(var i =0; i<=gap; i++)
// {
//     if(a>b) answer+= b+i;
//     else answer+= a+i;
// }
// // console.log(answer)
// var numbers=[1,2,3,4,6,7,8,0]
// const sum = 45;
// var reg =/[0-9]/g
// var result=[];
// result= numbers.reduce((acc, curr) => acc+curr )
// result = sum - result

// console.log(result)
// var absolutes = [1,2,4];
// var signs = [false, false, true];
// var result =absolutes.reduce((acc,cur,index)=>  acc+cur*(signs[index] ? 1 : -1) ,0)

// console.log(result)

// function getDayName(a,b){
//     var date = new Date(2016, (a - 1), b);
//       return date.toString()
//   }

//   //아래 코드는 테스트를 위한 코드입니다.
//   console.log(getDayName(5,24));

// function solution(s){

//     if(s.length<=50 && s.length >0){
//         return (s.match(/p/ig) == null && s.match(/y/ig)== null) ? 'True' : (s.match(/p/ig) == null || s.match(/y/ig)== null) ?  false : (s.match(/y/gi).length === s.match(/p/gi).length)  ? true : false ;
//     }
//     }

//     var a = "ooo"

//     // var result= a.match(/p/gi).length
//     console.log(solution(a))

// function solution(s){
//     //함수를 완성하세요
//       return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
//   }

//   console.log(solution("oooyY"))

// function solution(s){

//     let b= s.split(' ');
//     console.log(b)
//     var c= '';
//    for(var i =0; i<b.length; i++){
//        for(var j=0; j<b[i].length; j++)
//        {
//            if(j%2==0){
//          c += b[i][j].toUpperCase();
//          console.log(c)
//        } else {
//            c+= b[i][j].toLowerCase();
//        }

//        }
//        if(i<b.length-1){
//        c+=' '
//        }
//    }
//     return c
//    }

//    solution("try hello world")

// function solution(n) {

//     return n.toString().split('').reverse();
// }

// var n = 12345

// console.log(solution(n))

// function solution(n){
//     var a;
//     var sum=0;
//     a= n.toString().split('').reverse()
//     // console.log(a)
//     sum= a.reduce((acc,cur) => parseInt(acc)+parseInt(cur),0)+'';
//     // console.log(sum)
//     // a=a.join('')
//     // console.log(a)
//     a=a.reduce((acc,cur)=> acc+'+'+cur)
//     // a=a[0]+'+'+a[1]
//     // console.log(a)
// //    console.log(typeof (a+'='+sum))

//    return a+'='+sum
//   }

//  console.log(typeof solution(12345))

/////항해99 알고리즘 문제 -------------------------------------------------
// function solution(n){
//     var a= n.toString().split('').reverse();
//     var sum= a.reduce((acc,cur) => parseInt(acc)+parseInt(cur))+'';
//     a=a.reduce((acc,cur)=> `${acc}+${cur}`);
//    return a+'='+sum;
//   }
//   solution(718253);

//--------------------------------------------------------------------------------

// var reg= /(\d{1,3}\.){3}\d{1,3}/g   // == /(\d{1,3}.){3}\d{1,3}/g 와 같은말

// var a=['1.1.2.3'];
// a=a.filter((value, index) => reg.test(a)===true );
// console.log(a)

// function solution(phone_number){
//     var star=''

//        star='*'.repeat(phone_number.length-4)
//   console.log(star)
//     return console.log(star+phone_number.slice(-4))
// }

// solution(`01020556431`)

// 코테 1번문제
// function solution(n) {
//     let str = n+'';
//     let str2;
//     let check;
//     let sub=[]
//     for(let i=1; i<10;i++){
//         str2=i+'';
//     check=str.indexOf(str2)
//     if(check!==-1){
//         sub.push(i)
//     }
//     }
//  let answer=sub.filter((i)=> n%i===0)
//     return answer.length;
// }

//     console.log(solution(1234))

//코테 2번문제
// function solution(s) {
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(i%2===0){
//             if(s[i]>s[i+1]||s[i]===s[i+1]){
//                 s.splice(i+1,0,s[i]+1)
//                 console.log(s);
//                 count++
//             }
//         }
//         else{
//             if(s[i]<s[i+1]||s[i]===s[i+1]){
//                 s.splice(i+1,0,s[i]-1)
//                 count++
//             }
//         }
//     }
//     return count;
// }
// console.log(solution([2,1,3,20,2,2,2]))

//3번문제 실패, 아직 다못함

// function solution(board, c) {
//     let totalX=board[0].length
//     let totalY=board.length
//     let start;
//     let a= board
//     console.log(a)
//     for(let i=0; i<totalX; i++){
//         // console.log(board[i].indexOf(2))
//         for(let j=0; j<totalY;j++){
//             if((a[i][j].indexOf(2))!==-1){
//                 console.log(i)
//             }
//         }

//     }
//     var answer = 0;
//     return answer;
// }

// solution([[0,0,2,0],[0,1,0,0],[0,3,0,0]],2)

//그라운드엑스 코테

//1번째 문제
//result 는 걸리는 분
//k 는 만들 자연수 갯수
//24시간 이내에 k개를 만들지 못하는 스케쥴이면 result는 -1
//스케쥴은 오름차순으로 이미 들어가있음

// function solution(bakery_schedule, current_time, K) {
//   const current_hour = current_time.split(":")[0];
//   const current_min = current_time.split(":")[1];
//   for (let i = 0; i < bakery_schedule.length; i++) {
//     const schedule_hour = bakery_schedule[i].split(" ")[0].split(":")[0];
//     const schedule_min = bakery_schedule[i].split(" ")[0].split(":")[1];
//     const making_bread = bakery_schedule[i].split(" ")[1];
//     if (
//       schedule_hour - current_hour < 0 ||
//       (schedule_hour - current_hour === 0 && schedule_min - current_min < 0)
//     ) {
//       continue;
//     } else {
//       K -= making_bread;
//       if (K <= 0) {
//         return (
//           (schedule_hour - current_hour) * 60 + (schedule_min - current_min)
//         );
//       }
//     }
//   }
//   if (K > 0) {
//     return -1;
//   }
// }

// console.log(solution(["12:00 10"], "12:05", 11));

// 입력값들 샘플 보기
// ["12:00 10",], "12:00", "12:00",10
//  ["09:05 10", "12:20 5","13:25 6","14:24 5"], "12:05", 10

// 2번째 문제
// function solution(maps){
//     var answer = -1;
//     return answer;
// }
// [[1,0,1,1],
//  [0,0,1,1],
//  [1,1,0,1],
//  [1,1,0,0]]

//3번째 문제
// function solution(friends, user_id) {
//   const user_friends = [];
//   let mutual_friends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i][0] === user_id) {
//       user_friends.push(friends[i][1]);
//     }
//     if (friends[i][1] === user_id) {
//       user_friends.push(friends[i][0]);
//     }
//   }
//   for (let j = 0; j < user_friends.length; j++) {
//     let friend_name = user_friends[j];
//     for (let k = 0; k < friends.length; k++) {
//       if (friends[k][0] === friend_name && friends[k][1] !== user_id) {
//         mutual_friends.push(friends[k][1]);
//       }
//       if (friends[k][1] === friend_name && friends[k][0] !== user_id) {
//         mutual_friends.push(friends[k][0]);
//       }
//     }
//   }
//   const best = mutual_friends.reduce((pv, cv) => {
//       console.log(pv)
//     pv[cv] = (pv[cv] || 0) + 1;
//     return pv;
//   }, {});
//   let max = 0;
//   let best_friend = "";
//   for (key in best) {
//     if (best[key] > max ||best[key]===max&& max!==0) {
//       max = best[key];
//       best_friend = [...best_friend, key];
//     }
//   }
//   return best_friend;
// }

// console.log(
//   solution(
//     [["david","demi"], ["frank", "demi"], ["demi", "james"]],
//     "frank"
//   )
// );

let a = [["a","b"],["c","d"]]
console.log(a[0][1])