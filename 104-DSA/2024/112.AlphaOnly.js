const alphaOnly = (str) => {
  // We can also user "Array.from(str)"
  return str.split('').filter(c => c.match(/[A-Za-z]/)).join('')
}

alphaOnly("AB!D$F") == "ABDF" ? console.log('ok') : console.log('not ok')