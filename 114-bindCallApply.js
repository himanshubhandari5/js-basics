const displayInfo = function (city, country, vehicle) {
  console.log(this.name + " lives in " + city + " " + country + " and drive " + vehicle)
}

const emp1 = {
  name: "Ram"
}

const emp2 = {
  name: "Lakshaman"
}
// call()
displayInfo.call(emp1, "Pune,", "India", "Car")

// apply()
displayInfo.apply(emp1, ["Ahmedabad,", "India", "Truck"])

// bind()
const printEmp1 = displayInfo.bind(emp1, "Pune,", "India", "Car")
printEmp1()
const printEmp2 = displayInfo.bind(emp2)
printEmp2("Ahmedabad,", "India", "Truck")