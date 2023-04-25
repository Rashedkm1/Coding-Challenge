// Create a function that will convert from Celsius to Fahrenheit
//Formula F = c * 1.8 + 32

function celsiusToFahrenheit(c){
    let f = c * 1.8 + 32;
    return f.toFixed(1);
}
console.log(celsiusToFahrenheit(26));