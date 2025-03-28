let arr = [1, 2, 0, 0, 2, 3]
let j = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    j++
  }
}

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     ;[arr[j], arr[i]] = [arr[i], arr[j]]
//     j++
//   }
// }

console.log(arr)
