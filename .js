class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
   prepend(value){
    const newNode=new Node(value);
    if(this.isEmpty()){
        this.head=newNode
    }else{
        newNode.next=this.head;
        this.head=newNode;
    }
    this.size++;
   }
   append(value){
    const newNode=new Node(value);
    if(this.isEmpty()){
        this.head=newNode;
    }else{
        let prev=this.head;
        while(prev.next){
            prev=prev.next;
        }
        prev.next=newNode;
    }
    this.size++
   }
  
   insert(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  sum() {
    let values = this.head;
    let sum = 0;
    while (values !== null) {
      sum=sum+values.data;
      values=values.next;
    }
    return sum
  } 

      print(){
        if(this.isEmpty()){
            console.log("is Empty");
        }else{
            let curr=this.head;
            let listValue=' ';
            while(curr){
                listValue += ` ${curr.value} `
                curr=curr.next;
            }
            console.log(listValue)
        }
      }
}
const list=new linkedList();
console.log(list.getSize())
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insert(2,1);
list.print()
console.log(list.getSize())
const sumResult = list.sum();
console.log(sumResult)