let array = [1, 2, 3, 4, 5, 6]

let first = array[0]
let n = array.length

for (let i = 0; i < n - 1; i++) {
  array[i] = array[i + 1]
}

array[n - 1] = first

let result = '['

for (let i = 0; i < n; i++) {
  result += array[i]

  if (i < n - 1) {
    result += ','
  }
}

result += ']'

console.log(result)
