// var reg_y = /y/g;
// var reg_p = /p/g;
// var test = 'AcddfyYdps12ypy';
// var test2 = test.match(reg_y)
// var test3 = test.match(reg_p)
// console.log(test2.length,test3.length)

function solution(s){
    
    return s.match(/y/g).length === s.match(/p/g).length ? true : false ;
   
    // if(test2.length===test3.length){
    //     return true;
    // } else {
    //     return false;
    // }
        
    
    }

   console.log(solution('tysdfydkfjppqpdfky'))