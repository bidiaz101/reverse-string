function reverseString(str) {
  // type your code here
  const newString = []

  str.split("").forEach(char => {
    newString.unshift(char)
  })

  return newString.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

//Take String
//Split string in array
//add string to the front of a new array with iteration
//return array joined back into string

// And a written explanation of your solution

//the string was split into an array. 
//They array elements were then added to the beginning of the array
//The array was joined together back into a string and returned
