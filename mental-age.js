const getInput = require("./get-input.js");

// 1
const userAge = getInput();

// 2
if (userAge === "--help") {
    console.log("This function returns your mental age.");
    console.log('Please enter your age after "node mental-userAge.js" and a space.');

}

// 2
const mentalAge = userAge / 2 + 3;
const ageNextYear = userAge + 1;

// 3
console.log("You are " + userAge + " years old")
console.log("Next year you'll be " + ageNextYear + " years old.")

console.log("Your mentalAge is " + mentalAge + " years old.");