/* 

- Javascript arrays are resizable.
- can contain a mix of different data types.
- When we create copy of arrays it creates shallow copy.

- Shallow Copy: Copies only the reference of nested objects, so changes in the copy affect the original.
- Deep Copy: Creates a completely independent copy, so changes in the copy do not affect the original.
*/

// let obj1 = { x: 10 }
// let obj2 = obj1 // Shallow copy
// obj2.x = 20
// console.log(obj1.x) // Output: 20 (original also changes)

// let obj1 = { x: 10 }
// let obj2 = obj1 // Deep Copy
// obj2.x = JSON.parse(JSON.stringify(obj1))
// console.log(obj1.x) // Output: 10 (original doesn`t change)

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2)

// Methods ...

const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6) // add values in last
// console.log(myArr)

// myArr.pop() // removes from last
// console.log(myArr)

// myArr.unshift(7)
// console.log(myArr) // add in first

// myArr.shift(7)
// console.log(myArr) // removes from first

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(newArr)

// console.log('A', myArr)
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)

// console.log('B', myArr)
// const myn2 = myArr.splice(1, 3)
// console.log(myn2)

// console.log('C', myArr)
// console.log(myn2)

/*

-- difference between slice and splice ..

1. slice() (Does NOT modify original array)
✅  Extracts a portion of an array.
❌  Does not modify the original array.
✅  Returns a new array.
Syntax: arr.slice(start, end) (end index not included).

2. splice() (MODIFIES original array)
✅ Adds, removes, or replaces elements.
✅ Modifies the original array.
✅ Returns an array of removed elements (or empty array if none).
Syntax: arr.splice(start, deleteCount, item1, item2, ...). 

*/

const marvel_heros = ['ironman', 'thor', 'spiderman']
const dc_heros = ['superman', 'batman', 'flash']

//marvel_heros.push(dc_heros)
//console.log(marvel_heros) // gives array inside of array which is bad practice
//console.log(marvel_heros[3][1])

// let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

let allHeros = [...marvel_heros, ...dc_heros]
console.log(allHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//let realArray = another_array.flat(1)
let realArray = another_array.flat(Infinity)
console.log(realArray)

console.log(Array.isArray('avani'))
console.log(Array.from('avani')) // [ 'a', 'v', 'a', 'n', 'i' ]
console.log(Array.from({ name: 'avani' }))

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3))
