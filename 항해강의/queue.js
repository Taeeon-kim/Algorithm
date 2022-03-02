class Node{
 constructor(data){
    this.data = data;
    this.next = null;
 }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(value){
        let new_node = new Node(value);
        if(this.is_empty()){
            this.head= new_node;
            this.tail= new_node;
            return;
        }
       
        this.tail.next = new_node
        this.tail = new_node
    }
    dequeue(){
        if(this.is_empty()){
            return "Queue is empty";
        }
        const delete_head = this.head;
        this.head=this.head.next;
        return delete_head.data
    }
    peek(){
        if(this.is_empty()){
            return "Queue is empty"
        }
        return this.head.data;
    }
    is_empty(){
        return (this.head === null)
    }
}

const queue = new Queue();
queue.enqueue(3);
console.log(queue.peek())
queue.enqueue(4);
console.log(queue.peek())
queue.enqueue(5);
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.is_empty())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
