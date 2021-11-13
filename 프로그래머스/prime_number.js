function solution(nums) {
    var result=[]
    var count=0;
     for(var i=0; i<nums.length-2;i++)
         {
             for(var j=i+1;j<nums.length-1;j++){
                 for(var k=j+1; k<nums.length;k++)
                     {
                         result.push(nums[i]+nums[j]+nums[k]);
                     }
             }
         
         }
         for(var m=0;m<result.length;m++){
           for(var n=2;n<result[m];n++)
           {
              if(result[m]%n === 0) {break}
              else if(n===(result[m]-1)){
                    count++;
              }
           }
        }
     return count;
  }
  var nums=[1,2,3,4,5]
  console.log(solution(nums))