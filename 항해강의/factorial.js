function Factorial(number){
    if(number===1){
        return 1
    }
 return number*Factorial(number-1)
}

console.log(Factorial(5))