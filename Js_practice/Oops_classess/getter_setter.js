// class User {
//   constructor(email, password) {
//     ;(this.email = email),
//      (this.password = password)
//   }

//   get email() {
//     return this._email.toUpperCase()
//   }

//   set email(value) {
//     this._email = value
//   }

//   get password() {
//     return this._password.toUpperCase()
//   }

//   set password(value) {
//     this._password = value
//   }
// }

// let av = new User('a@gmail.com', '123')
// console.log(av.email)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function User(email, password) {
  ;(this._email = email),
    (this._password = password),
    Object.defineProperty(this, 'email', {
      get: function () {
        return this._email.toUpperCase()
      },
      set: function (value) {
        this._email = value
      },
    })

  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase()
    },
    set: function (value) {
      this._password = value
    },
  })
}

let av = new User('a@gmail.com', '123')
console.log(av.email)
