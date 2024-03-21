console.log("--Empty Object--")
const obj = {}
console.log(obj)

console.log("\n--Adding elements to Objects--")
obj["key1"] = "value1" // bracket notation
obj.key2 = "value2" // dot(.) notation
const key3 = "key3"
obj[key3] = "value3" // variable key
console.log(obj)

console.log("\n--Accessing Object properties--")
console.log(obj.key1) // dot(.) notation
console.log(obj["key2"]) // bracket notation
console.log(obj[key3]) // variable key bracket notation
console.log(obj.key3) // variable key dot(.) notation

console.log("\n--Manipulation--")
obj.key1 = "updated-Value1"
obj["key2"] = "updated-Value2"
obj[key3] = "updated-Value3"
obj["key4"] = undefined
obj["key5"] = null
console.log(obj)

console.log("\n--Looping--")
for (let property in obj) {
  console.log(obj[property])
}

