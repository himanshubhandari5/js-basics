// Module Design Pattern beased on Closures
function createCounter() {
  let count = 0

  function increment() {
    count++
    return count
  }

  function decrement() {
    count--
    return count
  }

  function reset() {
    count = 0
  }

  function log() {
    console.log(count)
  }

  const counterObj = {
    increment,
    decrement,
    reset,
    log
  }

  return counterObj
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.increment()
counter.decrement()

counter.log() // 2

