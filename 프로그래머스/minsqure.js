var sizes=[[60,50],[30,70],[60,30],[80,40]];
var max;
var min=[];
var max2;
sizes=sizes.toString().split(',')
for(var i=0; i<sizes.length;i++)
{
  sizes[i]=parseInt(sizes[i])
}
max= Math.max(...sizes)
  for(var j=0; j<sizes.length/2;j++)
  {
    min[j]= Math.min(sizes[j*2],sizes[2*j+1])
  }
  if(sizes.indexOf(max)%2===0){
   max2 =Math.max(sizes[sizes.indexOf(max)+1], ...min)
  }
  else{
    max2 =Math.max(sizes[sizes.indexOf(max)-1], ...min)
  }
  result = max*max2;
console.log(result)