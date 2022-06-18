var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func.call({ x: 1 }, 4, 5, 6);
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);
obj.method.apply({ a: 4 }, [5, 6]);

var obj2 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
Array.prototype.push.call(obj2, 'd');
console.log(obj2);

var arr = Array.prototype.slice.call(obj2);
console.log(arr);