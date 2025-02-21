// function is a block of code.

// function addTwoNums(num1, num2) {
//   console.log(num1 + num2)
// }

// addTwoNums(10, 20)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNums(num1, num2) {
//   console.log(num1 + num2)
// }

// const result = addTwoNums(3, 5)
// console.log('Result: ', result) // gives undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNums(num1, num2) {
//   return num1 + num2
// }

// const result = addTwoNums(3, 5)
// console.log('Result: ', result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNums(num1, num2) {
//   let result = num1 + num2
//   return result
//   console.log("Avani"); // no sentence are printed after return
// }

// const result = addTwoNums(3, 5)
// console.log('Result: ', result)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addTwoNums(num1, num2) {
//   return num1 + num2
// }

// const result = addTwoNums(3, 5)
// console.log('Result: ', result)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUserMessage(username) {
//   return `${username} just logged in`
// }
// console.log(loginUserMessage('avani'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log('Please enter a username')
//     return
//   }
//   return `${username} just logged in`
// }
// console.log(loginUserMessage())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(username = 'sam') {
  if (!username) {
    console.log('Please enter a username')
    return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage('avani'))
