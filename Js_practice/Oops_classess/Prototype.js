// let myName = "avani           "
// let name = "darsh       "

// console.log(myName.trueLength);  // can do with the help of trim too..

// let myHero = ['thor', 'spiderman']

// let heroPower = {
//   thor: 'hammer',
//   Spiderman: 'sling',

//   getSpiderPower: function () {
//     console.log(`Spiderman power is ${this.Spiderman}`)
//   },
// }

// Object.prototype.avani = function () {
//   console.log(`Avani is present in all objects`)
// }

// heroPower.avani()

// Array.prototype.heyAvani = function () {
//   console.log(`Array is present in all objects`)
// }

// myHero.heyAvani()
//heroPower.heyAvani() // will not get any access

// =======================================================================================

let userName = 'avani   '

String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`True length is : ${this.trim().length}`)
}
userName.trueLength()
'Hii   '.trueLength()
'helloooo'.trueLength()
