// Coding challenge #44. Create a function that will convert a string containing a binary number into a number

const binaryToDecimal = (num) => {
    return parseInt(num, 2)//always have to use 2 as the base of the number system, because binary is a base-2 number system.
}
const result = binaryToDecimal(1010);
console.log(result);