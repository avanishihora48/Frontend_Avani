let a = [1, 3, 5, 6, 2, 8]

let min = Number.MAX_SAFE_INTEGER
let second = Number.MAX_SAFE_INTEGER

for (let i = 0; i < a.length; i++) {
  if (a[i] < min) {
    second = min
    min = a[i]
  } else if (a[i] < second && a[i] !== min) {
    second = a[i]
  }
}

console.log(second)
