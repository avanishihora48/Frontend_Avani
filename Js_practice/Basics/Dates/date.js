// Date .....

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 24)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate1 = new Date(2023, 0, 24, 5, 3)
// console.log(myCreatedDate1.toLocaleString())

// let myCreatedDate = new Date('2023-01-14')
// console.log(myCreatedDate.toLocaleString())

//let myCreatedDate = new Date('01-14-2023')
// console.log(myCreatedDate.toLocaleString())

//++++++++++++++++++++++  Time ++++++++++++++++++++++++++++

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

const date = newDate.toLocaleString('default', {
  weekday: 'long',
})
console.log(date)
