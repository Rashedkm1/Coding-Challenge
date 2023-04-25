// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

const add = (str1, str2) => {
    let result = "";
    let carry = 0;
    let maxStr = Math.max(str1.length, str2.length);//

    for(let i = 0; i<maxStr; i++){
        let digit1 = rightMostNum(str1, i);
        let digit2 = rightMostNum(str2, i);
        let sumOfDigit = digit1 + digit2 + carry; 
        let remainderDigit = sumOfDigit % 10;
        carry = sumOfDigit > 10 ? 1 : 0;
        result = remainderDigit.toString() + result;
    }
    if(carry > 0){
        result = carry + result;
    }
    return result;
};

// Last Digit of string function
const rightMostNum = (str, num) => {

    if(num >= str.length){
     return 0;
    }
  
    let char = str[str.length - 1 - num];
    
    return parseInt(char);
  
  }
console.log(add("2909034221912398942349", "1290923909029309499"));

