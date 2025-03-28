// Promises: A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Asynchronous means that tasks run independently of the main program flow, allowing the program to continue executing other tasks without waiting for the previous one to finish.
// For example, in JavaScript, asynchronous operations like fetching data from a server or reading a file do not block the execution of other code.

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Async task is completed')
//     resolve()
//   }, 8000)
// })

// promiseOne.then(function () {
//   console.log('Promise consumed')
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Async task 2')
//     resolve()
//   }, 1000)
// }).then(function () {
//   console.log('Async 2 resolved')
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: 'Avani', email: 'a@example.com' })
//   }, 1000)
// })

// promiseThree.then(function (user) {
//   console.log(user)
// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: 'Chai', email: 'a@example.com' })
    } else {
      reject('ERROR : Something went wrong')
    }
  }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user)
    return user.username
  })
  .then((username) => {
    console.log(username)
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(() => console.log('the promise is either resolved or rejected'))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     if (!error) {
//       resolve({ username: 'Chai', email: 'a@example.com' })
//     } else {
//       reject('ERROR : Something went wrong')
//     }
//   }, 1000)
// })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }

// consumePromiseFive()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The async and await keywords in JavaScript simplify handling asynchronous operations, making the code more readable and easier to manage.

/*

1. async Keyword:- 
The async keyword is used before a function to make it return a Promise.
Even if the function returns a value, it is automatically wrapped in a Promise.

2. await Keyword
The await keyword is used inside an async function to wait for a Promise to resolve.
It makes asynchronous code look and behave like synchronous code.

*/

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log('E: ', error)
//   }
// }
// getAllUsers()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const users = async () => {
//   return await axios.get('localhost//:3000/api/users')
// }

// const fetchUsers = async () => {
//   const users = await users()
//   console.log(users)
// }

// fetchUsers()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// fetch('https://api.github.com/users/hiteshchoudhary')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => console.log(error))

/*

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

*/
