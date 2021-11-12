
//------오름차순,내림차순 정렬하는법 기초 ----------------
const arr =[2,1,3,10,5,7,8,9,0,11,12,13,15,20];


//첫번째 방식
arr.sort(function(a,b){
 if(a>b) return 1;
 if(a===b) return 0;
});
console.log(arr)

//두번째 방식


arr.sort(function(a,b){
    return a-b;
   });
   console.log(arr)

//---------------------------------------------------

