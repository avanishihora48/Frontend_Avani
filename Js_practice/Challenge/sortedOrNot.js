function isShorted(a) {
  for (let i = 1; i < arr.length; i++) {
    if (a[i] < a[i - 1]) {
      return 0
    }
  }
  return 1
}

let arr = [0, 0, 0, 1]
console.log(isShorted(arr))
