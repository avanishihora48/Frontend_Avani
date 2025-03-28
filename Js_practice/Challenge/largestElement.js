let arr = [3, 6, 1, 2, 7, 8, 1]

// let max = arr[0]

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i]
//   }
// }

// console.log(`The largest number is ${max}`)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

console.log(arr)
