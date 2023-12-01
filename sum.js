class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}
class LinkedList{
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
  append(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
      this.head=newNode
    }else{
      let prev=this.head;
      while(prev.next){
        prev=prev.next;
      }
      prev.next=newNode
    }
    this.size++;
  }
  prepend(value){
    const newNode=new Node(value);
    if(this.isEmpty()){
      this.head=newNode;
    }else{
    newNode.next=this.head;
    this.head=newNode;
  }
  this.size++
}

  print(){
    if(this.isEmpty()){
      console.log("is empty")
    }else{
      let curr=this.head;
      while(curr!==null){
        console.log(curr.value)
        curr=curr.next;
      }
    }
  }
}
const list=new LinkedList();
list.append(10);
list.append(101001);
list.prepend(1111);
list.print()
console.log(list.getSize())