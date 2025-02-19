const name = 'avani'
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('avanihc')

console.log(gameName[0]) // character position.
console.log(gameName.__proto__) // prototype
console.log(gameName.length) // length
console.log(gameName.charAt(5))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(2, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = ' avani '
console.log(newStringOne)
console.log(newStringOne.trim())

const url = 'https://avani.com/avani%20shihora'

console.log(url.replace('%20', '-'))
console.log(url.includes('avani'))

console.log(gameName.split('-'))

// there are many methods...
