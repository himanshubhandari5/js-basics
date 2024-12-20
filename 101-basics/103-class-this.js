// Re-writing of the previous class in Function without strict-mode

function Animal() { }

Animal.prototype.speak = function () {
  return this
}

Animal.eat = function () {
  return this
}

const animal = new Animal()

const a = animal.speak()
// calling with object, the value of this is:
console.log('Note-1: ', a)

const b = animal.speak
// calling after assigning object's method to a variable, the value of this is: 
console.log('Note-2: ', b())

const c = Animal.eat()
// calling static method, the value of this is:
console.log('Note-3: ', c)

const d = Animal.eat
// calling static method after assigning to a variable, the value of this is: 
console.log('Note-4: ', d())
