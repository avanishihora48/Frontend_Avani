// How do you reverse a string in JavaScript?

let str = 'hello'

let rev = ''
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i]
}

console.log(rev)
