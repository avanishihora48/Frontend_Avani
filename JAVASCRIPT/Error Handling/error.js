function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.')
    }
    let result = a / b
    console.log(`Result: ${result}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

divideNumbers(10, 2)
divideNumbers(10, 0)
