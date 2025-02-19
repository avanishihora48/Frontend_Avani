const mySym = Symbol('key1')

const myJs = {
  name: 'avani',
  'full name': 'Avani Shihora',
  email: 'a@gmail.com',
  [mySym]: 'myKey1', // Symbol as a key
  age: '25',
  mySym: 'myKey1', // Regular string key
}

// Two ways ..

// console.log(myJs.email)
// console.log(myJs['email'])
// console.log(myJs['full name']) // only way to declare
// console.log(myJs.mySym) // Output: 'myKey1' (string key, not Symbol) ❌
// console.log(myJs[mySym]) // Output: 'myKey1' (Symbol key) ✅
// console.log(typeof mySym)

// myJs.email = 'avani@google.com'
// Object.freeze(myJs) // after freezing the value will not change ..
// myJs.email = 'avani@microsoft.com'
// console.log(myJs)

myJs.greeting = function () {
  console.log('Hello Js User')
}

myJs.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`) // this keyword is used to pass the reference
}

myJs.greeting()
myJs.greetingTwo()
console.log(myJs.greeting) // [Function (anonymous)]
