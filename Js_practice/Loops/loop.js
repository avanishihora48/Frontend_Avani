//++++++++++++++++++++++++++++++++++++++++++++   for     +++++++++++++++++++++++++++++++++++++++++++++++++

// for (let index = 0; index <= 10; index++) {
//   console.log(index)
// }

// for (let index = 0; index < 10; index++) {
//   if (index == 5) {
//     break
//   }
//   console.log(index)
// }

// for (let index = 0; index < 10; index++) {
//   if (index == 5) {
//     continue
//   }
//   console.log(index)
// }

//+++++++++++++++++++++++++++++++++++++++   for of: for arrays +++++++++++++++++++++++++++++++++++++++++++
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//   console.log(num)
// }

// const greetings = 'Hello world!'
// for (const greet of greetings) {
//   if (greet == ' ') {
//     continue
//   }
//   console.log(`Each char is ${greet}`)
// }

//++++++++++++++++++++++++++++++++++ Map: key and pair value and accept unique value  +++++++++++++++++++++++++++++++++++++++++++

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')
//console.log(map)

// 1.
// for (const key of map) {
//   console.log(key)
// }

// 2.
for (const [key, value] of map) {
  console.log(key, ':-', value)
}

// const myObject = {
//   game1: 'NFS',
//   game2: 'Spiderman',
// }

// for (const [key, value] of myObject) {     // not iterable for objects
//   console.log(key, ':-', value)
// }

//+++++++++++++++++++++++++++++ for in : used for objects +++++++++++++++++++++++++++++++++++++

// const programming = ['js', 'java', 'cpp', 'python']

// for (const key in programming) {
//   console.log(programming[key])
// }

// const myId = {
//   id: '1',
//   name: 'avani',
//   roll: '53',
// }

// for (const key in myId) {
//   console.log(`${key} : ${myId[key]}`)
// }

//+++++++++++++++++++++++++++++ for each :  +++++++++++++++++++++++++++++++++++++

const programming = ['js', 'java', 'cpp', 'python']

// programming.forEach(function (lang) {
//   console.log(lang)
// })

// programming.forEach((lang) => {
//   console.log(lang)
// })

// function printMe(item) {
//   console.log(item)
// }
// programming.forEach(printMe)

// programming.forEach((item, index, arr) => {
//   console.log(item, index, arr)
// })

const myCoding = [
  {
    languageName: 'javascript',
    languageFile: 'js',
  },
  {
    languageName: 'java',
    languageFile: 'java',
  },
  {
    languageName: 'python',
    languageFile: 'py',
  },
]

myCoding.forEach((item) => {
  console.log(item)
})
