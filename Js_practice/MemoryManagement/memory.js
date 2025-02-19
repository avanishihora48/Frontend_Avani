// Stack -> (Primitive) , Heap (Non-Primitive)
// let myYoutube = 'avani@gmail.com'

// let anotherName = myYoutube
// anotherName = 'a@gmail.com'

// console.log(myYoutube)
// console.log(anotherName)

/*
  Stack :- Pass the copy but will not change the original value in stack..
  Heap :- pass the original reference 
*/

let userOne = {
  email: 'a@gmail.com',
  upi: 'user@yl',
}

let userTwo = userOne
userTwo.email = 'avani@google.com'

// console.log(userOne.email) // avani@google.com
// console.log(userTwo.email) // avani@google.com
