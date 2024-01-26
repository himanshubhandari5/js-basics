/* 
  * we are creating a wrapper execution context (createCounter) * to store our numOfExecutions variable
*/
function createCounter() {
  // creating a wrapping execution context
  // so we won't pollute the global environment
  let numOfExecutions = 0

  // creating and returning an inner function
  // that closes over the lexical environment
  function counter() {
    numOfExecutions++
    console.log(numOfExecutions)
  }

  /*
   * we are returning the counter function, This way, every time * we invoke counter it has access to the numOfExecutions variable
  */
  return counter
}

const counter = createCounter()

counter() // 1
counter() // 2
counter() // 3
counter() // 4
counter() // 5
