let isCapturing = true

document.querySelector('#grandParent').addEventListener('click', function (event) {
  console.log('grandParent clicked')
  event.stopPropagation()
}, isCapturing)

document.querySelector('#parent').addEventListener('click', function (event) {
  console.log('parent clicked')
  event.stopPropagation()
}, isCapturing)

document.querySelector('#child').addEventListener('click', function (event) {
  console.log('child clicked')
  event.stopPropagation()
}, isCapturing)

