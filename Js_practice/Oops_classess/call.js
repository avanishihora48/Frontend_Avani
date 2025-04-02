function setUsername(username) {
  this.username = username
  console.log('called')
}

function createUser(username, email, password) {
  setUsername.call(this, username)
  this.email = email
  this.password = password
}

const user = new createUser('avani', 'a@gmail.com', '1234')
console.log(user)

//In JavaScript, .call() is a method that allows you to invoke a function with a specified this value and individual arguments.
