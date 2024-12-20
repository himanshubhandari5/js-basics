function firstNonRepeat(str) {
  if (str !== '') {
    let hMap = new Map()
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ")
        hMap.has(str[i]) ? hMap.set(str[i], hMap.get(str[i]) + 1) : hMap.set(str[i], 1)
    }
    for (let key of hMap.keys()) {
      console.log(key + " : " + hMap.get(key))
      if (hMap.get(key) == 1) {
        return `${key}`
      }
    }
  }
  return ''
}

console.log('My: ', firstNonRepeat('oh my god dude where is my car'))// 'g'
console.log('My: ', firstNonRepeat(''))