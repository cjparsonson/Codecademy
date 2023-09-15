// Create age constant
const myAge = 35;

// Define mutable early years value
let earlyYears = 2;
earlyYears *= 10.5;

// Subtract 2 years from myAge as these are now accounted for
let laterYears = myAge - 2;

// Now multiply laterYears by 4 to get the dog years
laterYears *= 4;

// Sum age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// store name in lower case
let myName = "Chris".toLowerCase();

// Write to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
