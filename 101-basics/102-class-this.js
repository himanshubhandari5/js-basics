// To understand 'this' in case of classes

class Animal {
  speak() {
    return this
  }
  static eat() {
    return this
  }
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
