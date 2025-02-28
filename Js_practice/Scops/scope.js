/*
Two types :-
1. Local Scope.
2. Global Scope.
*/

// let a = 300
// var b = 200
// const c = 100
// {
//   let a = 30
//   console.log('INNER: ' + a)

//   var b = 20
//   console.log('INNER: ' + b)

//   const c = 10
//   console.log('INNER: ' + c)
// }

// console.log('OUTER: ' + a) // 300
// console.log('OUTER: ' + b) // 20
// console.log('OUTER: ' + c) // 100

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function one() {
//   const username = 'avani'

//   function two() {
//     const website = 'youtube'
//     // console.log(username) // we can access the global scope variable
//   }
//   // console.log(website) => cannot execute because we can`t access the value of scope globally..

//   two()
// }

// one()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if (true) {
//   const username = 'avani'

//   if (username === 'avani') {
//     const website = ' youtube'
//     console.log(username + website)
//   }
//   //console.log(website) => can't access
// }

//console.log(username) => can't access

//++++++++++++++++++++++++++++++++++  Interesting  ++++++++++++++++++++++++++++++++++++++

console.log(addone(5)) // will execute

function addone(num) {
  return num + 1
}
//console.log(addone(5))

console.log(addTwo(8)) // not execute

const addTwo = function (num) {
  return num + 2
}
//console.log(addTwo(8))
