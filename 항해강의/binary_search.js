const target = 14;
const array_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


function target_number_binary(target, array){
let count=0;
 let current_min =0;
 let current_max =array.length-1
 let current_guess = Math.floor((current_min+current_max)/2)
 while(current_min<=current_max){
     count++
     if(array[current_guess]===target){
         return count;
     }
     if(array[current_guess]<target){
         current_min=current_guess+1;
     }
     else{
         current_max = current_guess-1;
     }
     current_guess =  Math.floor((current_min+current_max)/2)
 }
 return false;
}
const target2=2
const array_random=[0, 3, 5, 7, 1, 2, 4]
function find_random_number_binary(target, array){
let count=0;
let current_min=0;
let current_max=array.length-1;
let current_guess=Math.floor((current_max+current_min)/2);
while(current_min<=current_max){
    count++;
    if(array[current_guess]===target){
        return count;
    }
    if(array[current_guess]<target){
        current_min=current_guess+1;
    }
    else{
        current_max = current_guess-1;
    }
    current_guess =  Math.floor((current_min+current_max)/2)
}
}

console.log(target_number_binary(target, array_numbers))
console.log(target_number_binary(target2, array_random)) // 랜덤으로 배열 값이 지정되었다면 이진탐색을 할수가없다.