var n= 12345;

var a= ''+n;
a= a.split('').sort((a,b)=> b-a ).join('')
console.log(+a)

// a=a.reverse();

