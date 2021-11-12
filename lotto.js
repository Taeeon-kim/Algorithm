var win_nums = [7,8,49,10,11,19];
var lottos = [1,2,3,4,5,6];

var rank_best = 0;
var rank_worst = 0;
var rank_list = [6,5,4,3,2,1];
var a=[];
var cnt=0;
var zero =0;
var result=[]

for (var i=0; i<lottos.length; i++){
  if(lottos.includes(win_nums[i]))
  {
    a.push(lottos.includes(win_nums[i]));
    cnt++;
   } 
   
}
 lottos.reduce((acc,curr)=> {
   if(curr===0)  {zero+=1} 
   else false;
   return zero
 },0)
rank_worst = cnt;
if(cnt<=1  ){ rank_worst=rank_list[0]}
else {rank_worst = rank_list[rank_worst-1]}
rank_best= zero+cnt;
    if(rank_best ===0){rank_best= rank_list[0]}
else (rank_best= rank_list[rank_best-1])
result = [rank_best,rank_worst]



console.log(result)