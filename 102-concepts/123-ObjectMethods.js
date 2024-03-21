const obj = {
  'name': 'John Doe',
  'salary': 120000,
  'married': true,
  age: 25
}

// Object.keys(obj)
const keys = Object.keys(obj)
console.log('Keys in Object obj are: ', keys)

// Object.values(obj)
const values = Object.values(obj)
console.log('\nValues in Object obj are: ', values)

// in operator
console.log('\nDoes obj has lastName? ', 'lastName' in obj)
console.log('Does obj has name? ', 'name' in obj)

// Defining & Accessing custom methods on Object
obj.getName = function () {
  return obj.name
}

obj.getSalary = function () {
  return this.salary // using this keyword
}
console.log('\ncalling method: ', obj.getName())
console.log('calling method: ', obj.getSalary())

// Object.fromEntries(arr): Array/Map into Object
const arr = [['employee', 'john Doe'], ['salary', 120000], ['married', true], ['companies', ['X Inc.', 'Y Ltd.']]]
console.log('\nArray to Object is: ', Object.fromEntries(arr))

// Object into Array
const arrToObj = Object.entries(arr)
console.log('\nObject to Array is: ', arrToObj)

// Object.assign({}, obj): Shallow Clone
const newObj1 = Object.assign({}, obj) // 1 way
const newObj2 = { ...obj }
console.log('\nObj afer assign: ', newObj1)
console.log('\nObj afer spread operator: ', newObj2)

// Object to String
const objToStr = JSON.stringify(obj)
console.log('\nObject to String: ', objToStr)

// String to Object
const strToObj = JSON.parse(objToStr)
console.log('\nString to Object: ', strToObj)