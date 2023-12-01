class Node{
    constructor(value){
        this.value =value ;
        this.next =null ;
    }
}
class linkedList{
    constructor(){
        this.head =null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }   
    getSize(){
        return this.size;
    }
    prepend(value){//value kodukan
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode
            
        }else{
          newNode.next=this.head;
            this.head=newNode
        }
        this.size++;
      
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size ++
    }
    // insert(value,index){
    //     if(index===0){
    //         this.prepend(value)
    //     }else{
    //         const node=new Node(value)
    //         let prev =this.head;
    //         for(let i=0;i<index-1;i++){
    //             prev=prev.next;
    //         }
    //         node.next=prev.next;
    //     }
    //     node.next=prev.next;
    //     prev.next =node
    //     this.size++
    // }
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
      insertAtEnd(value) {
        const newNode = new Node(value);
      
        if (this.isEmpty()) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
      
        this.size++;
      } 
      insertAtFirst(value) {
        const newNode = new Node(value);
      
        if (this.isEmpty()) {
          this.head = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
      
        this.size++;
      }
    //   remove(index){
    //     if(index < 0 || index >= this.size){
    //         return null
    //     }
    //     if(index===0){
    //     let removeNode=this.head;
    //     this.head=this.head.next
    //   }else{
    //     let prev =this.head;
    //     for(let i=0;i<index-1;i++){
    //         prev=prev.next;
    //     }
    //     removeNode =prev.next;
    //     prev.next=removeNode.next
    // }
    // this.size--;
    // return removeNode.value;
    //   }   
    remove(index) {
        if (index < 0 || index >= this.size) {
          return null;
        }
      
        let removeNode;
        if (index === 0) {
          removeNode = this.head;
          this.head = this.head.next;
        } else {
          let prev = this.head;
          for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
          }
          removeNode = prev.next;
          prev.next = removeNode.next;
        }
      
        this.size--;
        return removeNode.value;
      }
     
    print(){//print value
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr=this.head;
            while(curr){
              console.log(curr.value)
                curr =curr.next 
            }
        }
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

}
const list=new linkedList();
console.log(list.isEmpty());
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.print();
// list.prepend(100);
// list.prepend(150);
// list.prepend(200);
// list.prepend(150);
// list.print();
list.insert(10,0);
list.insert(20,0);
list.insert(30,2);
list.print()
list.remove(0)
list.print()
list.insertAtEnd(10)
list.insertAtEnd(110)
list.print()
list.insertAtFirst(100000)
console.log(list.print().reverse())
console.log(list.getSize());

  