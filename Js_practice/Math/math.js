// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance) // [Number: 100]

// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(3)) // 100.000

// const otherNumber = 123.89274
// console.log(otherNumber.toPrecision(4))

// const hundred = 10000000
// console.log(hundred.toLocaleString()) // 10,000,000
// console.log(hundred.toLocaleString('en-IN')) // 1,00,00,000

// ++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math) // Object [Math] {}
// console.log(Math.abs(-4)) // 4 => negative to positive conversion
// console.log(Math.round(5.1)) // 5 => round figure
// console.log(Math.ceil(7.3)) // 8 => bigger number
// console.log(Math.floor(4.3)) // 4 => smaller number

console.log(Math.random()) //(value between 0-1) generates new number everytime..
console.log(Math.random() * 10 + 1) // 1-9
console.log(Math.floor(Math.random() * 10 + 1)) // gives round figured value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // give bigger values
