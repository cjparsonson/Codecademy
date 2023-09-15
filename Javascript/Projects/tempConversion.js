// Define kelvine constant
const kelvin = 283;

// subtract 273 to find celsius
let celsius = kelvin - 273;

// calculate fahrenheit, use Math.floor() to round
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// log to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert celsius to newton
let newton = Math.floor(celsius * (33 / 100));

// log to console
console.log(`The temperature is ${newton} degrees Newton.`);
