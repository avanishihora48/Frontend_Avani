class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username is ${this.username}`)
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`A new course is added by ${this.username}`)
  }
}

const teach = new Teacher('avani', 'a@gmail.com', '111')
console.log(teach)

const newUser = new User('darsh')
console.log(newUser)

//newUser.addCourse() // no access

// newUser.logMe() // Username is darsh

//teach.addCourse() // A new course is added by avani

//teach.logMe() // Username is avani

// console.log(teach === newUser) // false

console.log(teach instanceof User) // true

console.log(newUser instanceof User) // true

console.log(newUser instanceof Teacher) // false

console.log(teach instanceof Teacher) // true
