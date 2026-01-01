class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{

            let temp = this.root
            while(true){
                if(temp.value > value){
                    if(temp.left === null){
                        temp.left=newNode;
                        break;
                    }
                    temp = temp.left
                }else if(temp.value < value){
                    if(temp.right === null){
                        temp.right=newNode;
                        break;
                    }
                    temp = temp.right
                }
            }
        }
    }
    lookup(value){
        let currentItem= this.root
        while(currentItem != null){
            if(currentItem.value===value) return currentItem;
            else if(currentItem.value > value){
                currentItem= currentItem.left;
            }else if(currentItem.value < value){
                currentItem= currentItem.right;
            }
        }
        return false
    }

    remove(value){
        const currentItem=this.root;
        while(currentItem !== null){
            if(currentItem.value > value){
                 
            }else if(currentItem.value < value){

            }
        }
    }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(4));



console.log(JSON.stringify(tree));
