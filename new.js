class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        console.log(this.size)
    }
    prepend(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else
        newNode.next=this.head;
        this.head=newNode;
        this.size++
    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let prev=this.head;
            while(prev.next){
            prev=prev.next
        }
        prev.next=newNode
    }
        this.size++;
}
sum(){
    let sum=0;
    let temp=this.head;
    while(temp!==null){
        sum=sum+temp.value;
        temp=temp.next
    }
    console.log("sum is =" + sum);
}
insert(value ,index){
    if(index < 0 || index>=this.size ){
        return null;
    }
    if(index===0){
        this.prepend(value);
    }else{
        const newNode=new Node(value);
        let prev=this.head;
        for(let i=0;i<index-1;i++){
            prev=prev.next;
        }
        newNode.next=prev.next;
        prev.next=newNode
    }
    this.size++;
}
addMid(value){
    let newNode=new Node(value);
    let slow=this.head;
    let fast=this.head;
    let prev=null;
    while(fast &&fast.next){
        prev=slow
        slow=slow.next;
        fast=fast.next.next;
    }
    newNode.next=slow;
    prev.next=newNode;
    this.size++;
}
remove(index){
    if(index<0||index>=this.size){
        return null;
    }
    let removeNode
    if(index===0){
    removeNode=this.head;
    this.head=this.head.next
    }else{
        let prev=this.head;
        for(let i=0;i<index-1;i++){
            prev=prev.next;
            
        }removeNode=prev.next;
        prev.next=removeNode.next;
    }
    this.size--;
    return removeNode.value
}
revers(){
    let prev=null;
    let curr=this.head;
    while(curr){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    this.head=prev;
  }
print(){
    if(this.isEmpty()){
        console.log("its empty")
    }else{
        let curr=this.head;
        while(curr!==null){
            console.log(curr.value);
           curr=curr.next;
        }
    }
}
}
const list=new linkedList()
list.append(10)
list.append(20);
list.prepend(1000);
list.sum()
list.remove(2)
list.insert(101111111,2)
list.remove(2)
list.print()
list.getSize()
list.revers();
list.print();
list.addMid(1010101010110);
list.print();