let times = 0
const someHeavyOperation = function (event) {
  console.log(`Width: ${event.target.outerWidth} and Height is: ${event.target.outerHeight} and counted ${++times}`)
}

const throttleFunction = function (callback, limit) {
  const context = this
  let flag = true
  return function (event) {
    if (flag) {
      callback.apply(context, [event])
      flag = false
      setTimeout(() => {
        flag = true
      }, limit)
    }
  }
}

const throttle = throttleFunction(someHeavyOperation, 1000)

window.addEventListener("resize", throttle)

