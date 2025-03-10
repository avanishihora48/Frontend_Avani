//The Magical Sorting Hat: Imagine you are creating a magical sorting that for a wizard school. Implement a js function that takes an array of students name and assigns the to one of the four houses (Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let nm = ['avani', 'darshan', 'dhwani', 'rudra', 'alekasandrina', 'Alexander']

// for (let i = 0; i < nm.length; i++) {
//   if (nm[i].length < 6) {
//     console.log(`${nm[i]} Your house is Gryffindor`)
//   } else if (nm[i].length < 8) {
//     console.log(`${nm[i]} Your house is Hufflepuff`)
//   } else if (nm[i].length < 12) {
//     console.log(`${nm[i]} Your house is Ravenclaw`)
//   } else {
//     console.log(`${nm[i]} your house is  Slytherin`)
//   }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let nm = ['avani', 'darshan', 'dhwani', 'rudra', 'alekasandrina', 'Alexander']
let house = []

for (const nms of nm) {
  if (nms.length < 6) {
    house.push('Gryffindor')
  } else if (nms.length < 8) {
    house.push('Hufflepuff')
  } else if (nms.length < 12) {
    house.push('Ravenclaw')
  } else {
    house.push('Slytherin')
  }
}

console.log(house)
