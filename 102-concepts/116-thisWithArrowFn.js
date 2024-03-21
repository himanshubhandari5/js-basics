const logThisValue = () => {
  console.log(this)
}

const logArgsValue = () => {
  console.log(this.a)
}

const obj = {
  thisVal: logThisValue,
  thisArgs: logArgsValue,
  a: 10
}

logThisValue()
obj.thisVal()
obj.thisArgs()