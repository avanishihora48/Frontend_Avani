/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

//  BMI = mass / (height * height)

let massMark = 78
let heightMark = 1.69

let massJohn = 92
let heightJohn = 1.95

let BMIMark = Math.floor(massMark / (heightMark * heightMark))
let BMIJohn = Math.floor(massJohn / (heightJohn * heightJohn))

console.log('BMI of Mark`s is: ' + BMIMark)
console.log('BMI of John`s is: ' + BMIJohn)

// let markHigherBMI = false

// if (BMIMark > BMIJohn) {
//   markHigherBMI = true
// }
// console.log(markHigherBMI)

let markHigherBMI = BMIMark > BMIJohn
console.log('Does Mark have a higher BMI than John? ' + markHigherBMI)
