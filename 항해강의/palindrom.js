function palin(string){
    const length= string.length
    for(idx in string){
        if(string[idx]!==string[length-1-idx]){
            return false;
        }
    }
    return true;
}

// console.log(palin('토마토야'))
function binary(num) {
    if (num == 1 || num == 0) {
        return String(num) //종료조건
    }
    return binary(Math.floor(num/2)) + String(num % 2)
}
const a = 5;
console.log(String(a))