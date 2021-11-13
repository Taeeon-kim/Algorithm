
// let a= 'hello world';
// let b= a.split(' ');
// var c= '';
// for(var i =0; i<b.length; i++){
//     for(var j=0; j<b[i].length; j++)
//     {
//         if(j%2==0){
//       c += b[i][j].toUpperCase();
//     } else {
//         c+= b[i][j].toLowerCase();
//     }
    
//     }
//     c+=' '
// }
// console.log(c)



function solution(a){


let b= a.split(' ');
console.log(b)
var c= '';
for(var i =0; i<b.length; i++){
    for(var j=0; j<b[i].length; j++)
    {
        if(j%2==0){
      c += b[i][j].toUpperCase();
    } else {
        c+= b[i][j].toLowerCase();
    }
    
    }
    if(i<b.length-1){
    c+=' '
    }
}
 return c-=' '
}


solution('sss sss ssss')