// function calculateCartPrice(...num1) {
//   return num1
// }

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

// here val1 = 500 , val2 = 2000

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const user = {
//   username: 'avani',
//   price: 199,
// }

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   )
// }
// //handleObject(user)

// handleObject({
//   username: 'sam',
//   price: 399,
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNewArray = [200, 400, 100, 700]

function returnSecondValue(getArray) {
  return getArray[1]
}
console.log(returnSecondValue(myNewArray))
