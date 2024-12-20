// Method-1
const map1 = new Map([
  ["naveen", 89],
  ["harsh", 87],
  ["vivek", 98]
])

// Method-2
const map2 = new Map()
map2.set("naveen", "pass")
map2.set("harsh", "pass")
map2.set("vivek", "pass")

map1.forEach((key, val)=> console.log(key, val))