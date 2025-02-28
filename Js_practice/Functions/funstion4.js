const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)
// console.log(newNums)

// myNums.forEach((nums) => {
//   console.log(nums + 10)
// })

//+++++++++++++++++++++++++++++ chaining ++++++++++++++++++++++++++++++++++++++++++++

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 10)
//   .filter((num) => num >= 20)
// console.log(newNums)

//++++++++++++++++++++++++++++ accumulator ++++++++++++++++++++++++++++++++++++++++++

// const nums = [1, 2, 3]

// const myTotal = nums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`)
//   return acc + currval
// }, 0)
// //console.log(myTotal)

// nums.unshift(4, 5)

// const updateNums = nums.reduce((acc, currval) => acc + currval, 0)
// console.log('updated sum: ', updateNums)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
  {
    itemName: 'js course',
    price: 2999,
  },
  {
    itemName: 'py course',
    price: 999,
  },
  {
    itemName: 'java course',
    price: 1999,
  },
  {
    itemName: 'c++ course',
    price: 3000,
  },
  {
    itemName: 'data dev course',
    price: 12999,
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)
