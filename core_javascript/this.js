// var a = 1;
// console.log(a);
// console.log(global);

var func = function(x){
    console.log(this, x);
}

func(1);

var obj = {
    method:func
};
obj.method(2);
