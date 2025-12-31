class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}

class Queue{
    constructor(value){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    peek(){
        return this.first
    }
    enqueue(value){
        const newItem= new Node(value);
        if(this.length === 0){
            this.first = newItem;
            this.last = newItem;
        }else{
            this.last.next = newItem;
            this.last = newItem
        }
        this.length++;
    }
    dequeue(){
        this.first= this.first.next;
        this.length--;
    }
}
 