let count = 0
const searchSuggetions = function (searchTerm) {
  console.log(`Fetching suggestion for ${searchTerm} :  ${++count}`)
}

const debounceSearch = function (callback, delay) {
  let timer
  return function (event) {
    // Setting the correct 'this'
    let context = this
    // Clear the previous timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      // to bind this 
      callback.apply(context, [event.value])
    }, delay)
  }
}

// This is called from ./html/debounce.html
const search = debounceSearch(searchSuggetions, 500)