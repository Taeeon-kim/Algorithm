function palin(string){
    const length= string.length
    for(idx in string){
        console.log(idx)
        let swap;
        for(let j =0;j<length-idx-1;j++){
            if(string[j]>string[j+1]){
                swap= string[j], 
                string[j] = string[j+1]
                string[j+1]=swap
            }
            
        }
       
    }
  return string
}

console.log(palin([2,1,6,4,9])) // O(N^2) 