const displayInfo = function (city, country, vehicle) {
  console.log(this.name + " lives in " + city + " " + country + " and drive " + vehicle)
}

const emp1 = {
  name: "Ram"
}

const emp2 = {
  name: "Lakshaman"
}

// Here we need to write our own bind method
Function.prototype.myBind = function (...args1) {
  console.log("---These are bind args: ", ...args1)
  const thisObj = this
  return function (...args2) {
    console.log("---These are function args: ", ...args2)
    thisObj.apply(args1[0], [...args1.slice(1), ...args2])
  }
}

// Calling custom bind i.e. myBind() method
const printEmp1 = displayInfo.myBind(emp1, "Pune,", "India")
printEmp1("Car")
const printEmp2 = displayInfo.myBind(emp2, "Ahmedabad,", "India")
printEmp2("Truck")
