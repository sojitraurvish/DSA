class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    pip(){
        return this.top;
    }
    push(value){
        const newItem=new Node(value)
        if(this.length === 0){
            this.top=newItem;
            this.bottom=newItem;
        }
        else{
            newItem.next = this.top;
            this.top = newItem;
        }
        this.length++;

    }
    pop(){
        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push("google")
myStack.push("udamy")
myStack.push("discord")
myStack.pop()
myStack.pop()
myStack.pop()

console.log(myStack);
