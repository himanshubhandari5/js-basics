function removeDuplicate(num) {
  const countOcc = new Map()
  num.map(n => {
    countOcc.set(n, "")
  })
  return countOcc.keys()
}

console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 3, 4]))


// Create a graph using a HashMap for adjacency list
const graph = new Map();



