function callback() {
  console.log("I am callback")
}

function higherOrder(callback) {
  console.log("Higher order method is called, now calling callback")
  callback()
}

higherOrder(callback)