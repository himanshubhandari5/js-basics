const message = "Hello World"

function displayMsg() {
  console.log(message)
}

const displayCustomMsg = () => {
  console.log(message + " Custom")
}

class Test {
  constructor() {
    console.log("class initialized")
  }

  classFun() {
    console.log("calling method() classFun")
    displayMsg()
    displayCustomMsg()
  }
}

const test = new Test()
test.classFun()