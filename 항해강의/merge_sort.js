const array_a=[1,2,3,5];
const array_b=[4,6,7,8];
const a = array_a.length
// const a = [1,2,3,4];
// a.splice(1)
// console.log(a)
function merge_sort(array1, array2){
 const array_c=[];
 let array1_index=0
 let array2_index=0
 while(array1_index<array1.length && array2_index<array2.length){
     if(array1[array1_index]<array2[array2_index]){
         array_c.push(array1[array1_index])
         array1_index+=1;
     }
     else {
        array_c.push(array2[array2_index])
        array2_index+=1;
     }
 }
 if(array1_index===array1.length){ // array1 이 끝까지 갔으면 array2가 남았음
    while(array2_index<array2.length){
        array_c.push(array2[array2_index])
        array2_index+=1
    }
}

if(array2_index===array2.length){ // array2가 끝까지 갔으면 array1이 남아있음
    while(array1_index<array1.length){
        array_c.push(array1[array1_index])
        array1_index+=1
    }
}

return array_c

}

// console.log(merge_sort(array_a, array_b))

const array3=[5,3,2,1,6,8,7,4]

function merge_sort2(array){
    if (array.length<=1) {
        return array;
    }
    let mid = Math.floor((array.length)/2)
    // console.log(mid)
    // console.log(array.slice(0,mid))
    let left_array = merge_sort2(array.slice(0,mid))
  
    let right_array = merge_sort2(array.slice(mid))

    console.log("left",left_array, "right",right_array)
    return merge_sort(left_array, right_array)
}
merge_sort2(array3)