// 1번 . 실패, toString 이용하여 length 를 알면 i번째부터 length 까지 길이의 문자열을 -i 번째 맨뒤에 값을 i번째에 두는 식으로 i++ 을 할려고 했다. 그리고 바꾸는건 반반 왔다갔다 이므로
//범위는 나누기 2 를 했는데, 구현하기 쉽지가 않다.

var s = 46;

var b=s.toString(3);
// console.log(typeof b)
var c=b.toString(10)
var aa=[]
var reversestr= b.split("").reverse().join('');
// console.log(reversestr)


console.log(parseInt(reversestr,3))

