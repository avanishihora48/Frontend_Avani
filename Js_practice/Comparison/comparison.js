// console.log('2' > 1) // true
// console.log('02' > 1) // true

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true... the reason is that an equality check and comparison > <= < <= works differently thats why convert null to a number, treating it as 0. Thats why null >= 0 and null > 0 is false.

//console.log(undefined == 0) // false in every case

// === => strict check the value as well as data types.

//console.log('2' === 2) // false
