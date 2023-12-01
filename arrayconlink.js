class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
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
        this.size++
    }
    prepend(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            newNode.next=this.head
            this.head=newNode;
        }
        this.size++;
    }
    sum(){
        let sum=0;
        let temp=this.head;
        while(temp!==null){
            sum=sum+temp.value
            temp=temp.next
        }
        console.log(sum);
    }
    print() {
        if (this.isEmpty()) {
          console.log("The linked list is empty.");
        } else {
          let curr = this.head;
          while (curr !== null) {
            console.log(curr.value);
            curr = curr.next;
          }
        }
      } 
    }
    function arrToLInk(arr){
        const list =new LinkedList()
        for(let i=0;i<arr.length;i++){
            list.append(arr[i])
        }
        console.log(list);
    }
    console.log(arrToLInk([8,10]));
    const list= new LinkedList()
    list.append(1000);
    list.prepend(101010);
    list.sum();
    list.print()