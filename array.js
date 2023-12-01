let array=[1,2,3,4,4]
let array2=[4,5,6,7]
let margedarrayis=[...array,...array2]
console.log(margedarrayis);
let a=[...new Set(margedarrayis)]
console.log(a);
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
        return this.size
    }
    append(){
        const newNode=new Node();
        if(this.isEmpty){
            this.head=newNode;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next=newNode;
        }
        this.size++
    }
    
    print(){
        if(this.isEmpty){
            console.log("it is empty")
        }else{
            let curr=this.head
            while(curr!==null){
                console.log(curr.value)
                curr=curr.next
            }
        }
    }
}
function arrayCon(a){
const list=new LinkedList()
for(let i=0;i<a.length;i++){
    list.append(a[i]);
}
return list
}
arrayCon()
const list=new LinkedList()
list.append(100);
console.log(list.getSize());
