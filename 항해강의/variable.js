// let a =1;
// let b = a;
// b =2;
// console.log(a,b)

// class node{
//     constructor(data){
//         this.data =data;
//         this.next = null;
//     }
// }

// let b = new node(3);
// let a = b;
// console.log(a, b)
//     a.next = 4
//     console.log("2", a, "term",b)
//     b.next = 1;
//     console.log("33", a, "term", b)

// class test{
// constructor(data){
//     this.haha=new node(data)
// }
// test2(){
//     // let a = this.haha;
//     let b = new node(3)
//     let a = b;
//     console.log(a, b)
//     a.next = 4
//     console.log("2", a, "term",b)
//     b.next = 1;
//     console.log("33", a, "term", b)
// }
// }



// const aa = new test(5);
// aa.test2()
// console.log(aa.test2()+ "dd")

const person = {
    data : 1
}

const secondperson = {...person};
console.log(person, secondperson)
person.data =2;
console.log(person, secondperson)
secondperson.data=3;
console.log(person, secondperson)