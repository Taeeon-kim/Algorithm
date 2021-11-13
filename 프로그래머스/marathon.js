// var participant=["kim",'neo','haha'];
// var completion =['neo','kim'];
// if((participant[0].match(completion[1])) === null)
// {
//    return (participant[0].match(completion[1]))
//     // console.log((participant[0].match(completion[1])))
// }
// function solution(participant,completion){
// for(var i=0; i<participant.length; i++){
//     for(var j=0; j<completion.length; j++ )
//     {
//         if((participant[i]!=completion[j]) &&(j===(completion.length-1))&&(i===(participant.length-1)))
//         {
//           return console.log(participant[i])
//             // console.log((participant[0].match(completion[1])))
//         }
        
//     }
// }
// }

// 하다가 실패
// function solution(participant,completion){
//     for(var i=0; i<participant.length; i++){
//         for(var j=0; j<completion.length; j++ )
//         {
//             if((participant[i]!=completion[j])&& (j===(completion.length-1)))
//             {
//                 return console.log(participant[i])
//                 // console.log((participant[0].match(completion[1])))
//             }
           
//         }
//     }
//     }

// solution(["kiki","eden","kim"], ["eden","kiki"]);


//--------------------------------------------------


// function solution(participant, completion){
//     for(const finish of completion){
//         if(participant.includes(finish)){
//             participant.splice(participant.indexOf(finish),1)
//         } else {return console.log(participant)}
//     }
//     return console.log(participant)
// }
// solution(["kiki","eden","kim"], ["eden","kiki"]);

 
 // 구현은 되지만 효율성에서 시간 초과됨, 메서드를 많이 쓰고 for문을 이중이라 그런듯하다.
// function solution(participant, completion){
//         participant.sort();
//         completion.sort();
//         for(const finish of completion){
//             if(participant[participant.indexOf(finish)]=== completion[completion.indexOf(finish)])
//             {
//                 participant.splice(participant.indexOf(finish),1)
//             }
//         }
        
//         return console.log(participant)
//     }


function solution(participant, completion) {

    participant.sort();
    completion.sort(); 

    for(let i = 0; i < participant.length; i++) { 

      if (participant[i] != completion[i]) {

            return participant[i];
      }
    }
}




solution(["kiki","eden","kim"], ["eden","kiki"]);