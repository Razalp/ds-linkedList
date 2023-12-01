class node{
    constructor(value){
        this.value =value ;
        this.next =null ;
    }
}
class linkedList{
    constructor(){
        this.head =null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0; 
    }   
    getSize(){
        return this.size;
    }
append(value){
    const newNode=new node(value);
    if(this.isEmpty()){
        this.head=newNode;
    }else{
        let prev=this.head;
        while(prev.next){
            prev=prev.next;
        }
        prev.next=newNode
    }
    this.size++;
}
sum(){
    let temp=this.head;
    let sum=0;
    while(temp!==null){
        sum=sum+temp.value;
        temp=temp.next;
    }
    console.log(sum)
}

print(){
    if(this.isEmpty()){
        console.log("is empty");
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
list.append(10);
list.append(100);
list.print()
console.log("sum is =  ")
list.sum()
console.log(list.getSize());