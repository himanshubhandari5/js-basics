const x = 5
const y = 5
if (x === y) {
  console.log("x is equal to y, because in case of primitives the values are being compared.")
}

const obj1 = {
  a: 10
}

const obj2 = {
  a: 10
}

if (obj1 === obj2) {
  console.log("obj1 is equal to obj2")
} else {
  console.log("obj1 is NOT equal to obj2 because in case of Objects the Object Reference is being compared.")
}

const obj3 = obj1
if (obj1 === obj3) {
  console.log("obj1 is equal to obj3 because both are referencing to the same Memory Location.")
}

const arr1 = [1, 2]
const arr2 = [1, 2]

if (arr1 === arr2) {
  console.log("arr1 is equal to arr2")
} else {
  console.log("arr1 is NOT equal to arr2, because Arrays are also Objects in JS.")
}