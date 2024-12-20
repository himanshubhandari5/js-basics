const a = undefined || 1
console.log(a)

const b = undefined && 1
console.log(b)

const c = [2, 3, 4, 5]
console.log(2 in c)
console.log(6 in c)

const d = "String"
d.split("")

const e = 10
console.log(e in [4, 3, 5, 10])

const f = "String"
f[2]

const g = "abc"
g[0] = 'x'
console.log(g)

if (undefined) {
  console.log('undefined is true')
} else {
  console.log('undefined is false')
}

if (null) {
  console.log('null is true')
} else {
  console.log('null is false')
}

if (0) {
  console.log('0 is true')
} else {
  console.log('0 is false')
}

