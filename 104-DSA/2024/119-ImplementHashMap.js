class Hashmap {
  constructor() {
    // - Creating Fixed size bucket of size 100
    // - It means 100 different values of hashes can be stored
    // - The buckets can be modeled using both arrays and binary 
    //    search trees, but to keep things simple and maximize speed, 
    //    we'll stick with using arrays.
    this.bucket = new Array(100)
    this.length = 0
  }

  set(key, val) {
    const index = this.hashStr(key)
    // If the index does not exists, initialize it with an empty Array
    if (!this.bucket[index]) {
      // Initialize with empty Array
      this.bucket[index] = []
      // Increment the length of the bucket
      ++this.length
    }
    // A single bucket, will have multiple key value pairs
    this.bucket[index].push({ key, val })
  }

  get(key) {
    const index = this.hashStr(key)
    // First find the bucket, in which key values are stored
    // Iterate through the bucket
    if (this.bucket[index]) {
      // All the keys with the same Hash values are stored in the same bucket
      // console.log(this.bucket[index])
      for (let i = 0; i < this.bucket[index].length; i++) {
        // compare the key, and get the value
        if (key === this.bucket[index][i].key) {
          return this.bucket[index][i].val
        }
      }
    }
    return undefined
  }

  size() {
    return this.length
  }

  remove(key) {
    const index = this.hashStr(key)
    if (this.bucket[index]) {
      for (let i = 0; i < this.bucket[index].length; i++) {
        // compare the key, and get the value
        if (key === this.bucket[index][i].key) {
          // Removing 1 element from the bucket
          console.log('Found element for removal: ', this.bucket[index])
          const d = this.bucket[index].splice(i, 1)
          console.log(`Deleted ${JSON.stringify(d)}`)
          console.log(`removed key ${JSON.stringify(this.bucket[index][i])}`)
          console.log("Remaining: ", this.bucket[index])
        }
      }
    }
  }

  hashStr(str) {
    let finalHash = 0
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
      finalHash += charCode
    }
    // console.log(`final hash for ${str} is ${finalHash}`)
    return finalHash
  }
}

var myMap = new Hashmap()
myMap.set("key1", "value1")
myMap.set("key2", "value2")
myMap.set("key3", "value3")
myMap.set("3key", "3value")
myMap.set("key3", "value3A")
console.log(myMap.size())
console.log(myMap.get("key3"))
console.log(myMap.get("3key"))
myMap.remove("key1")
console.log(myMap.get("key1"))
