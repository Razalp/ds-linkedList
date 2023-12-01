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
        return this.size;
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
    sum(){
        let sum=0;
        let temp=this.head;
        while(temp!==null){
            sum=sum+temp.value;
            temp=temp.next
        }
        console.log("sum is =" + sum)
    }
    addMid(value){
        const newNode= new Node(value)
        let slow=this.head;
        let fast=this.head;
        let prev=null;
        while(fast&&fast.next){
             prev=slow;
             slow=slow.next;
             fast=fast.next.next;
        }
        newNode.next=slow;
        prev.next=newNode
        this.size++;
    }
    rev(){
        let prev=null;
        let curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next
        }
        this.head=prev;
        }

    print(){
        if(this.isEmpty()){
            console.log("is empty");
        }else{
            let curr=this.head;
            while(curr !== null){
                console.log(curr.value);
                curr=curr.next;
            }
        }
    }
}
let list =new linkedList()
list=arrayToLinkedList([1,2,3,4,5,6,7]);
list.print()
// const list=new linkedList();
// list.append(10010);
// list.prepend(1010202020)
// list.append(1);
// list.append(2)
// list.addMid(999999)
// list.rev()
// list.print()
// list.sum()  
