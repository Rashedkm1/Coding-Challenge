// Create a function that will convert from Fahrenheit to Celsius
// Formula (°F - 32) x 5/9 = °C

function fahrenheitToCelsius(f){
    let c = (f - 32) * (5/9);
    return c;
}
console.log(fahrenheitToCelsius(68));