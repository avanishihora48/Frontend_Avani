/*
Use the BMI example from Challenge BMI.js, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

*/

let massMark = 78
let heightMark = 1.69

let massJohn = 92
let heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

console.log('BMI of Mark`s is: ' + BMIMark)
console.log('BMI of John`s is: ' + BMIJohn)

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI ${BMIMark.toFixed(
      2
    )} is higher than John's BMI ${BMIJohn.toFixed(2)}!`
  )
} else if (BMIJohn > BMIMark) {
  console.log(
    `John's BMI ${BMIJohn.toFixed(
      2
    )} is higher than Mark's BMI ${BMIMark.toFixed(2)}`
  )
} else {
  console.log(
    `John's BMI ${BMIJohn.toFixed(2)} is equals to Mark's BMI ${BMIMark.toFixed(
      2
    )}`
  )
}
