const a = 1
const b = 2
const c = 0

// a is typecasted to bool
if (a == true) {
  console.log("a is true")
}

if (a) {
  console.log("a acts as true")
}
if (b) {
  console.log("b acts as true")
}

if (c) {
  console.log("b acts as true")
} else {
  console.log("c is false")
}

// a is not typecasted to bool
if (a === true) {
} else {
  console.log("a is false")
}