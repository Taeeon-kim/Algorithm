function solution(a,b){

var week=['SUN','MON','TUE','WED','THU','FRI','SAT'];
let date1= new Date(2016,a-1,b)
return week[date1.getDay()];
}

console.log(solution(5,24))
// console.log(week[date1.getDay()]);