// var numbers = [10, 20, 3, 16, 45];
// var max = Math.max.apply(null, numbers);
// var max2 = null.max(numbers)
// console.log(max2)

function test() {
    // body
    console.log(this)
}
test.apply(null)
// console.log(test)