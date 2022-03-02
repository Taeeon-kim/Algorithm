class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.head = null;
  }

push(value){
 const new_head= new Node(value);
 new_head.next = this.head;
 this.head = new_head
}
pop(){
    if(this.is_empty()){
        return "Stack is Empty"
    }
    const delete_head = this.head
 this.head = this.head.next
 return delete_head
}

peek(){
    if(this.is_empty()){
        return "Stack is Empty"
    }
return this.head.data;
}
is_empty(){
 return this.head===null?true:false;
}

}

function receiver_top(heights){
    let answer = new Array(heights.length).fill(0)
    // console.log(answer)
    while(heights.length){
        let height=heights.pop()
        for(let i = heights.length-1;i>=0;i--){
            if(heights[i]>height){
                answer[heights.length]= i+1;
                break
            }
        }

    }
    return answer
}
console.log(receiver_top([6,9,5,7,4]))
// const stack = new Stack()
// console.log(stack)
// stack.push(3);
// console.log(stack)
// console.log(stack.peek())
// stack.push(4);
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.pop().data)
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.is_empty())
// console.log(stack.pop().data)
// console.log(stack)
// console.log(stack.is_empty())
