function count_down(number){
    if(number<0){
        return;
    }
    console.log(number);
    
    count_down(number-1);
}

count_down(60);