/*
IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after its definition. It is often used to avoid polluting the global scope and create private variables.
*/

;(function chai() {
  console.log(`DB Connected`)
})()
;(function chai() {
  console.log(`DB2 Connected`)
})()
;((name) => {
  console.log(`DB3 Connected ${name}`)
})('avani')
