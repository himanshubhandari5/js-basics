const obj1 = {
  name: 'John',
  age: 24,
  salary: 120000
}

const obj2 = {
  country: 'India',
  play: 'Cricket',
  name: 'Rock'
}

// Merge objects into a new variable
const obj3 = { ...obj1, ...obj2 } // will copy obj2 onto obj1
console.log('\nMerge both the objects with destructuring: ', obj3)
const obj4 = { ...obj2, ...obj1 } // will copy obj1 onto obj2
console.log('\nMerge both the objects with destructuring: ', obj4)

// Object.assign(obj1, obj2): Merge 2 objects
Object.assign(obj1, obj2)
console.log('Everything from obj2 is copied into obj1, if common keys are there, it will override e.g. name', obj1)
console.log('\nobj2 is untouched', obj2)

// Object.preventExtensions(obj): Prevent Object from adding new keys, existing can be updated
Object.preventExtensions(obj1)
obj1.name = 'Jack' // It is allowed
obj1.lastName = 'Doe' // Adding a new property is not allowed
obj1.city = 'Pune' // Adding a new property is not allowed
console.log('\nupdated obj1', obj1)

// Object.freeze(obj): Prevent any changes to the Object
Object.freeze(obj2)
obj2.city = 'Pune' // Adding a new property is not allowed
obj2.country = 'USA' // updating existing property is not allowed
console.log('\nupdated obj2', obj2)

// Object.defineProperty(): Prevent a particular key from updation
console.log('\nobj4 play property before update is: ', obj4.play)
Object.defineProperty(obj4, 'play', { writable: false })
obj4.play = "Football"
console.log('obj4 play property after update is: ', obj4.play)

// Prevent a property from iteration
Object.defineProperty(obj4, 'play', { enumerable: false })
console.log('Iterating all the properties from obj4: note that "play" is missing')
for (let property in obj4) {
  console.log(property)
}

// console.log('\nobj1', obj1)
// Check if property of key exists on an Object
obj3.fullName = { firstName: "Obj3", middleName: "Obj3Middle", lastName: "Obj3Last" }
console.log('\nobj3: ', obj3)
console.log('\nDoes obj3 have salary property?', obj3.hasOwnProperty('salary'))
console.log('Does obj3 have totalsalary property?', obj3.hasOwnProperty('totalsalary'))
console.log('Does obj3 have middleName property?', obj3.hasOwnProperty('middleName')) // It will not check nested keys

