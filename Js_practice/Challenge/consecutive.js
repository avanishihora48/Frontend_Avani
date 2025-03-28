let array = [1, 1, 1, 1, 0, 1]
let currentCount = 0
let maxCount = 0
for (const arr of array) {
  if (arr == 1) {
    currentCount++
    maxCount = Math.max(maxCount, currentCount)
  } else {
    currentCount = 0
  }
}

console.log(maxCount)
