//Kelvin is always constant
const kelvin = 0;

//Value of Celsius
const celsius = kelvin - 273;

//Equation for Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Rounding down Fahrenheit 
fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

