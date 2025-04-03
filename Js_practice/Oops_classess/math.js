// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor)

/*
The Math.PI property is defined with property attributes that make it immutable:

Writable: false → Cannot be reassigned.

Enumerable: false → Does not show up in object loops.

Configurable: false → Cannot be deleted or modified.

The Object.getOwnPropertyDescriptor() method in JavaScript allows you to retrieve the property attributes of a specific property from an object.

Object.getOwnPropertyDescriptor(object, propertyName)
object → The object containing the property.

propertyName → The name of the property whose descriptor you want to retrieve.
*/

const subject = {
  name: 'js',
  price: '1999',
  isAvailable: true,

  orderCourse: function () {
    console.log('not available')
  },
}

console.log(Object.getOwnPropertyDescriptor(subject, 'name'))
Object.defineProperty(subject, 'name', {
  writable: false,
  enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(subject, 'name'))

for (let [key, value] of Object.entries(subject)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value}`)
  }
}
