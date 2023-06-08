const kelvin = 0;
// Kelvin 293 celcius
const celsius = (kelvin-273);
// Substrack 273 from kelvin give us to celsius
let fahrenheit = celsius * (9/5)+32;
fahrenheit = Math.floor(fahrenheit);
//fahrenheit 
console.log(`The temperature is   ${fahrenheit}   degrees Fahrenheit.`)
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temperature is   ${newton}   degrees Fahrenheit.`)