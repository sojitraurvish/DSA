class Node {
    constructor(value) {
        this.value = value;
        this.prev= null;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) { 
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode= new Node(value);
        this.head.prev= newNode;
        newNode.next = this.head 
        this.head = newNode
        this.length++;
    }

    display(){
        const linkedList=[];
        let currentNode=this.head;
        while(currentNode !== null){
            linkedList.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return linkedList
    }

    insert(index,value){
        if(index <= 0) this.prepend(value)
        else if(index >= this.length) this.append(value)
        else{
            const newNode = new Node(value);
            const indexToInsert=this.traverseToIndex(index-1)
            const temp = indexToInsert.next;
            indexToInsert.next = newNode
            newNode.prev = indexToInsert
            newNode.next =temp
            temp.prev = newNode;
            this.length++;            
        }
    }

    traverseToIndex(index){
        let currentNode= this.head;
        for(let i=0; i < index ; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(index){
        if(index < 0 || index > this.length) console.log("please enter valid index");
        else if(index ===0){ this.head= this.head.next; this.length--;}
        else {
            const leader=this.traverseToIndex(index-1);
            const unwantedNode= leader.next
            leader.next = unwantedNode.next
            this.length--
            return this.display()
        }
        
    }

    // prepend(){}
    // dispay() 
    // insert(index,value) tabrtdrtoindex
    // remove(index)  .
    // reverse() 

}

const linkList = new LinkedList(10)
 linkList.append(20)
 linkList.append(220)
 linkList.prepend(15)
 linkList.insert(2,80)
//  linkList.remove(6)

 console.log(linkList.display());
 

//doubly linked list