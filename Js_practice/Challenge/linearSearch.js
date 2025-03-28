function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i
    }
  }
  return -1
}

let arr = [0, 4, 5, 6, 7, 8, 3]

let num = 8

console.log(linearSearch(arr, num))
