//The Double Trouble: You are tasked with writing a function that doubles each element in an array.However,there's a catch: if array contains consecutive duplication elements, only double one of them.

function doubleTrouble(arr) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (i === 0 || arr[i] != arr[i - 1]) {
      result.push(arr[i] * 2)
    } else {
      result.push(arr[i])
    }
  }
  return result
}

let array = [1, 2, 3, 4, 5, 6, 1, 2, 2, 3, 3, 3, 4]

console.log(doubleTrouble(array))
