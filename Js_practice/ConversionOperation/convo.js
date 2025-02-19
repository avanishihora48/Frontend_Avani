let score = 33

console.log(typeof score)

let scr = '55'
let valueInNumber = Number(scr) // number
console.log(typeof scr) // 55

//But what if? ... scr = "55abc"

let score1 = '55abc' // NaN
//let score1 = null => 0 output
//let score1 = undefined => NaN output
//let score1 = true  => 1 output
let valInNumber = Number(score1) // number
console.log(valInNumber)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
//let isLoggedIn = "" => false , by default value
//let isLoggedIn = "avani" => true

let num = 44
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)
