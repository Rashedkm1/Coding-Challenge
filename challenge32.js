// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

// Method 1:

// const wordCapitalized = (str) => {
//     const words = str.split(" ");
//     capitalizedWords =  words.map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
//     return capitalizedWords;
// };

// const text = "Create a function that will capitalize the first letter of each word in a text"
// const convertToUppeerCase = wordCapitalized(text);
// console.log(convertToUppeerCase);



//================ Method 2:================
// const capitalizeWords = (str) => {
//     result = "";
//     for(let i = 0; i < str.length; i++){
//         let currentChar = str[i];
//         let previusChar =str[i - 1];   
        
//         if(!isSeperator(currentChar) && isSeperator(previusChar)){
//             currentChar = currentChar.toUpperCase();
//         }
//         result += currentChar;

//     } 

//     function isSeperator(c){
//         const ceperaotrChar = [' ', ',', '.', '\n', '\r', '\t', ';', '!', '?'];
//         return ceperaotrChar.includes(c)
//     }
//     return result
// };

// const text = "Create a function that will capitalize the first letter of each word in a text"
// const convertToUppeerCase = capitalizeWords(text);
// console.log(convertToUppeerCase);


