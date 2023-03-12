/* 
  To understand this keyword
*/

class Car {
  setDriveSound(sound) {
    this.sound = sound
  }

  drive() {
    return this.sound
  }
}

const car = new Car()
car.setDriveSound("vroom")
car.sound // vroom

const truck = {
  sound: "putputput",
  driveMyTruck: car.drive
}

truck.driveMyTruck() // putputput


const drive = car.drive
drive() // TypeError: Cannot read property sound of undefined