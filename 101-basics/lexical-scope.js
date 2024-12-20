/* 
  To understand lexical environment
  It also shows the concept of currying
*/

const outest = () => {
  const a = 10
  return outer = () => {
    const b = 20
    return inner = () => {
      const c = 30
      return a + b + c // Note
    }
  }
}

const sum = outest()()()
console.log("sum: " + sum)

const outest1 = () => {
  const a = 10
  const outer1 = () => {
    const b = 20
    const inner1 = () => {
      const c = 30
      return a + b + c
    }
    return inner1  // Note
  }
  return outer1  // Note
}

const sum1 = outest1()()()
console.log("sum1: " + sum1)