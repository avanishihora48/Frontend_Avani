'use strict' // treat all js code as newer version
// alert(3+3) // using nodejs not browser

/*
There are two types of data types:-
1. Primitive Datatypes => They are defined by js.They are mutable means once the value is defined they cannot be changed.
2. Non-primitive Datatypes => They are derived and mutable means that its value can be change.
*/

//Primitve Data Types:-

//a. Number => 2^23

let age = 23
console.log(typeof age)

//b. null => standalone value

let a = null
console.log(typeof a) // object
console.log(typeof null) // object

//c. bigint

let num = 23347326456543475436578n
console.log(typeof num)

//d. boolean => true or false

let isLoggedIn = false
console.log(typeof isLoggedIn)

//e. String => "" , collection of characters

let str = 'avani'
console.log(typeof str)

//f. symbol => unique

//g. Undefined

let avani
console.log(avani)
console.log(typeof undefined) // undefined

//Non Primitive Data Types:-

//a. Object

console.log(typeof Object) // function

//b. Arrays => collection of same data types value

let nums = [1, 2, 3, 4]
console.log(nums)

//c. Function => collection of valriables and methods..

const myFunction = function () {
  console.log('Hello World')
}
console.log(typeof myFunction) // function
myFunction()
