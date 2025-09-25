class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) { // time complexity: O(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    console.log(hash);
    return hash;
  }

  set(key, value) { // time complexity: O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) { // time complexity: O(1)
    let address = this._hash(key);

    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0]);
      }
  }
  }

}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("bananas", 10);
myHashTable.set("bananas", 14);
myHashTable.set("oranges", 11);
myHashTable.set("pears", 12);
myHashTable.set("apples", 2);
// myHashTable.get("grapes");
console.log(myHashTable.get("apples"));  

// console.log(JSON.stringify(myHashTable, null, 2));