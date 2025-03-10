// The Mirror Mirror: imagine you having a string, and you need to create a new string that is mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
  let rev = ''

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
  }
  return str + rev
}

let arr = ['avani', 'rudra', 'dhwani', 'darsh']

for (let nm of arr) {
  console.log(mirrorString(nm))
}
