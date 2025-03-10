//The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
  let sum = 0

  for (const num of arr) {
    if (num < 0) {
      break
    }
    sum += num
  }
  return sum
}

let array = [2, 3, 4, 5, 6, -7, 9]

console.log(sumUntilNegative(array))
