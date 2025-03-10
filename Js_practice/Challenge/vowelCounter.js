// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowel(str) {
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      sum += 1
    }
  }
  return sum
}

let vowel = 'hii i am avani shihora'
console.log(countVowel(vowel))
