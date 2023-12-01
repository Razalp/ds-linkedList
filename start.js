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
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const nweNode=new Node(value);
        if(this.isEmpty()){
            this.head=nweNode
        }else{
            nweNode.next=this.head;
            this.head=nweNode
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
    addMid(value){
        const newNode=new Node(value);
        let show=this.head;
        let fast=this.head;
        let prev=null;
        while(fast&&fast.next){
            prev=show;
            show=show.next;
            fast=fast.next.next;
        }
        newNode.next=show;
        prev.next=newNode;
        this.size++;
    }
    sum() {
        let temp = this.head;
        let sum = 0;
        while (temp !== null) {
          sum += temp.value;
          temp = temp.next;
        }
        console.log(sum);
      }
    print(){
        if(this .isEmpty()){
            console.log("is empty");
        }else{
            let curr=this.head;
            while(curr!==null){
               console.log(curr.value)
               curr = curr.next;
            }
        }
    }
    }
const list=new linkedList()
list.append(10);
list.append(10);
list.append(10);
list.append(10);
list.append(1000)

console.log("sum is =");
list.sum();
console.log(list.getSize())
list.addMid(10101010)
list.print()
