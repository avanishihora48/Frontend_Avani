// const tinderUser = new Object() // singleton object
// console.log(tinderUser) // => {}

const tinderUser = {} // non-singleton object
console.log(tinderUser) // => {}

tinderUser.id = '123abc'
tinderUser.name = 'avani'
tinderUser.age = '25'

//console.log(tinderUser) // => { id: '123abc', name: 'avani', age: '25' }
console.log(Object.keys(tinderUser))
console.log(Object.values)
console.log(tinderUser.hasOwnProperty('age'))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const regularUser = {
  email: 'a@gmail.com',
  fullname: {
    userfullname: {
      firstname: 'avani',
      lastname: 'shihora',
    },
  },
}

// console.log(regularUser.email)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const users = [
  {
    id: 1,
    email: 'a@gmail.com',
  },
  {
    id: 1,
    email: 'a@gmail.com',
  },
  {
    id: 1,
    email: 'a@gmail.com',
  },
  {
    id: 1,
    email: 'a@gmail.com',
  },
  {
    id: 1,
    email: 'a@gmail.com',
  },
]

//console.log(users[1].email)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
  coursename: 'Javascript',
  price: '999',
  courseInstructor: 'avani',
}

// insetad of course.price and gain fetch ..

const { price, coursename, courseInstructor: instructor } = course
console.log(price, coursename, instructor)
// courseInstructor: instructor => instructor is a short name of courseInstructor
