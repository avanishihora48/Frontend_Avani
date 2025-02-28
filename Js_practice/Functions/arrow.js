// this keyword refers the current context

// const user = {
//   username: 'avani',
//   price: '999',

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`)
//     //console.log(this)
//   },
// }

// user.welcomeMessage() // avani, welcome to website
// user.username = 'sam'
// user.welcomeMessage() // sam, welcome to website
// console.log(this) // {}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai() {
//   let username = 'avani'
//   console.log(this.username)
// }
// chai() // undefined

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const chai = function () {
//   let username = 'avani'
//   console.log(this.username)
// }
// chai() // undefined

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const chai = () => {
//   let username = 'avani'
//   console.log(this.username)
//   console.log(this) // {}
// }
// chai() // undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//   return num1, num2
// }
// console.log(addTwo(3, 4))

// implicite return

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({ username: 'avani' })
console.log(addTwo())
