
var regExp = /[^a-zA-Z0-9-_.]/g;
var new_id='=.=';
if(new_id==='') new_id='a';
new_id=new_id.replace(regExp, '')
.toLowerCase()
.split('')
for(var i=0;i<new_id.length;i++){
    if(new_id[i]==='.'){
        if(new_id[i]===new_id[i+1]){
            while(new_id[i+1]==='.')
            {
            new_id.splice(i,1)
            }
        }
     if(i===new_id.length-1)
     {
        new_id.splice(i,1)
     }
    }
}
console.log(new_id)
if(new_id.length===0) new_id.push('a');
console.log(new_id)
if(new_id[0]==='.') new_id.splice(0,1)

if(new_id.length>15) new_id=new_id.slice(0,15)
// console.log(new_id) 
if(new_id[new_id.length-1]==='.')
{
   new_id.splice(new_id.length-1,1)
}
if(new_id==='') new_id='a'
if(new_id.length<3)
{
    while(new_id.length<3){
         new_id.push(new_id[new_id.length-1])
    }
}
new_id=new_id.join('')
console.log(new_id) 


// a=a.filter((value, index) => (a[index]!==a[index+1])))

// if(a[a.length-1]==='.'){

