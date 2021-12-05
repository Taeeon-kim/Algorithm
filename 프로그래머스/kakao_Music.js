function solution(m, musicinfos) {
var answer=[];

var numb=[]; 
for(var i=0; i< musicinfos.length; i++){
var b= musicinfos[i].split(",");
var totalmusicplay=0;
var end= (b[1].substr(0,2)/1)*60 +(b[1].substr(3,2)/1);
var start= (b[0].substr(0,2)/1)*60 +(b[0].substr(3,2)/1);

var playinghour = end-start

var hour = 0;
var min =0;
var playingpart='' ;
var leftpart=0;
var playingleftpart='';



hour = Math.floor(playinghour/60); 
min = playinghour%60; 
totalmusicplay = 60*hour+min

if(b[3].match(/[A-Z]#/gi)!==-1){
    b[3] = b[3].replace(/C#/gi, "c");
    b[3]= b[3].replace(/D#/gi, "d");
   b[3] = b[3].replace(/F#/gi, "f");
   b[3] = b[3].replace(/G#/gi, "g");
    b[3] = b[3].replace(/A#/gi, "a");

}
if(m.match(/[A-Z]#/gi)!==-1){
    m = m.replace(/C#/gi, "c");
    m= m.replace(/D#/gi, "d");
   m = m.replace(/F#/gi, "f");
   m = m.replace(/G#/gi, "g");
   m = m.replace(/A#/gi, "a");

}
playingpart = b[3].substr(0,totalmusicplay)

 leftpart = totalmusicplay - b[3].length

while(leftpart>0){
    playingleftpart=b[3].substr(0,leftpart)
    playingpart+=playingleftpart;
    leftpart= leftpart-b[3].length;
}

let reg = new RegExp(`${m}`,"g")

if(playingpart.match(reg)!==null)
{ 
    answer.push([b[2], totalmusicplay]);
    numb.push(totalmusicplay)

}
if(i===musicinfos.length-1){
    if(answer.length>1 ){
         return  answer[numb.indexOf(Math.max(...numb))][0]

    } else if(answer.length===1 ) {
        return answer[0][0];
    }

    return "(None)";
}
}
}