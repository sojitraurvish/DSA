class Stack{
    constructor(){
        this.stack=[];
    }
    pip(){
        return this.stack[this.stack.length-1];
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
       this.stack.pop()
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
