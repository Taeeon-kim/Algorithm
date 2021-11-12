

function solution(arr, divisor) {
   
    var result=[]
     for(var i=0; i<arr.length;i++)
     {
         if(arr[i]%divisor === 0)
         {
             result.push(arr[i])
         }
    }
     if(result.length===0)
             {
                 return result=[-1];
             } else {
    result.sort(function(a,b){
         return a-b;
    });
             }
     return result;
 }