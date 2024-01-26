function setA() {
  this.a = 10
  console.log(this.a)
  console.log(this.b)
}

const obj = {
  objSetA: setA,
  b: 20
}

setA()
// const newContextForA = new setA()
// console.log(newContextForA.a)
// obj.objSetA()