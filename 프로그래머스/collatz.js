function solution(n){
    
let count=0;

while(1){
    if(n===1) { return count}
  else {
      (n%2 ===0)? n=n/2 : n=n*3+1
          count++;
      } 
    
  if(n!==1 &&count>500)
  {
      return -1;
  } 
}
}

console.log(solution(3))




function solution(n){
    
    let count=0;
    
    while(1){
        if(n===1) { return count}
      else {
          if(n%2 ===0){
              n=n/2;
              count++;
          } else {
              n=n*3+1;
              count++;
          }
      }
      if(n!==1 &&count>500)
      {
          return -1;
      } 
    }
    }
    
    console.log(solution(3))