class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size
    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=newNode;
        }
        this.size++;
    }
}
const list= new LinkedList();
list.append(10);
console.log(list.getSize());
list.insert(10);
console.log(list.getSize());

