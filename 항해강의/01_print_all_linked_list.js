class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const node = new Node(3);
// const first_node = new Node(4);
// node.next = first_node;
// console.log(node.next.data)

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }
  append(data) {
    // this.head.next = new Node(data);

    if (this.head.data === undefined) {
      this.head = new Node(data);
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }

  get_node(index){
    let node = this.head
    let count = 0;
    while(count<index){
      node = node.next;
      console.log(node)
      count+=1;
    }
    return node;
  }

  add_node(index, value){
    let new_node = new Node(value); //[6]
    if(index===0){
      new_node.next=this.head
      this.head=new_node
      return; // 아래 코드 읽지않고 함수빠져나옴
    }
    let node = this.get_node(index-1); // [5]->[12]->[8]
    let next_node = node.next; //[12]->[8]
    new_node.next = next_node; // [12]->[8]
    node.next=new_node // [6]->[12]->[8]
  }

  delete_node(index){
    if(index===0){
      this.head = this.head.next
      return;
    }
    let node = this.get_node(index-1);
    node.next = node.next.next
  }

}

function linked_list_sum(linked_list_1, linked_list_2){
let sum_1 = 0, sum_2=0;
let head_1 = linked_list.head, head_2 = linked_list2.head;
while(head_1){
sum_1 = sum_1*10 + head_1.data 
 head_1=head_1.next
}
while(head_2){
  sum_2=sum_2*10+head_2.data
  head_2=head_2.next
}
return sum_1+sum_2
}
// const test= new LinkedList();
// console.log(test.append(3))
const linked_list = new LinkedList(5);
// console.log(linked_list);
linked_list.append(7);
linked_list.append(8);
// linked_list.add_node(1,6)
// linked_list.delete_node(0)
const linked_list2= new LinkedList(3);
linked_list2.append(2);
linked_list2.append(5);
console.log(linked_list_sum(linked_list, linked_list2))
// console.log(linked_list)
// console.log(linked_list.get_node(1))
// console.log(linked_list.head);
// linked_list.append(5)
// console.log(linked_list.head);
// linked_list.append(6)
// console.log(linked_list.head.next.next);
