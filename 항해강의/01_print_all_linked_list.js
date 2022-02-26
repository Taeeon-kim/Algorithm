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
      console.log("dd", cur.next);
      cur = cur.next;
    }
    cur.next = new Node(data);
  }
}
// const test= new LinkedList();
// console.log(test.append(3))
const linked_list = new LinkedList(3);
console.log(linked_list);
linked_list.append(4);
// console.log(linked_list.head);
// linked_list.append(5)
// console.log(linked_list.head);
// linked_list.append(6)
// console.log(linked_list.head.next.next);
