// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// RED:

describe("testPeople", () => {
  it("returns an array with name capitalized in a sentence", () =>{
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(testPeople(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// FAIL  ./code-challenges.test.js
// testPeople
//   ✕ returns an array with name capitalized in a sentence

// ● testPeople › returns an array with name capitalized in a sentence

//   ReferenceError: testPeople is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:

// declare a function testPeople
// input: array of objects
// output: array of strings with first letter capitalized
// Process: create a variable capital1 which will take zero index of the value name and use map to iterate through the of the array to capitalize the first letter. create a variable capital2 and take key name and split at the space then map through the strings. Uppercase at the zero index of the string plus slice and join back together. return the sentence by utilizing string interpolation.

const testPeople = (array) => {
  let capital1 = array.map(value => {
    let capital2 = value.name.split(" ").map(string => 
    string[0].toUpperCase() + string.slice(1)).join(" ")
    return `${capital2} is ${value.occupation}`
})
return capital1
}
// *** Note: Not sure why it is not passing. The expected and the received are identical in the terminal. ***
// FAIL  ./code-challenges.test.js
// testPeople
//   ✕ returns an array with name capitalized in a sentence (2 ms)

// ● testPeople › returns an array with name capitalized in a sentence

//   expect(received).toEqual(expected) // deep equality

//   - Expected  - 3
//   + Received  + 3

//     Array [
//   -   "Ford Prefect is a hitchhiker.",
//   -   "Zaphod Beeblebrox is president of the galaxy.",
//   -   "Arthur Dent is a radio employee.",
//   +   "Ford Prefect is a hitchhiker",
//   +   "Zaphod Beeblebrox is president of the galaxy",
//   +   "Arthur Dent is a radio employee",
//     ]

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// RED:

describe("remaindersDivided", () => {
  it("returns array of remainders divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remaindersDivided(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaindersDivided(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// FAIL  ./code-challenges.test.js
// remaindersDivided
//   ✕ returns array of remainders divided by 3

// ● remaindersDivided › returns array of remainders divided by 3

//   ReferenceError: remaindersDivided is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:

// delcare a function called remaindersDivided
// input: array of numbers, strings and boolen values
// output: array of numbers
// Process: create variable newArray and set to an empty array. use a for loop to iterate through array that was set as placeholder. using the typeof method, if within the array at an index the data type is a number push the remainder once divided by 3 into newArray and return.

const remaindersDivided = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === "number"){
      newArray.push(array[i] % 3)
    }
  }
  return newArray
}
// PASS  ./code-challenges.test.js
// remaindersDivided
//   ✓ returns array of remainders divided by 3 (1 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// RED:

describe("sumCubed", () => {
  it("returns sum of all numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})
// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ returns sum of all numbers cubed

// ● sumCubed › returns sum of all numbers cubed

//   ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:

// declare a function called sumCubed
// input: array of numbers
// output: a number
// Process: map through the array and take each number within that array and cube it. once cubed use reduce method which reduces until one number that is the sum is left.

const sumCubed = (array) => {
 return array.map(value => value**3).reduce((partialSum, a) => partialSum + a, 0)
}
// PASS  ./code-challenges.test.js
// sumCubed
//   ✓ returns sum of all numbers cubed (1 ms)