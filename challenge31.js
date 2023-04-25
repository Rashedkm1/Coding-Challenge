
// Coding challenge #31. Create a function that will return the number of words in a text
//Mehtod 1:
// const countWords = (str) => {
//     let count = 0;
//     let wasSeperator = true;

//     for(let char of str ){
//         if(isSeparator(char)){           
//             wasSeperator = true;
//             continue
//         }
//         if(wasSeperator){
//             count++
//             wasSeperator = false;
//         }
//     }
//     return count;

//     function isSeparator(c) {
//         const separator = [' ', ',', ';', '.', '!', '?', '\n', '\t', '\r'];
//         return separator.includes(c);
//     }
// };
// const text = "hello world! How are you?";
// const countText = countWords(text);
// console.log(countText);


//==========Mehtod 2:===============
// const countWords = (str) => {
//     str = str.trim()
//     if(str === " " || str.length === 0){
//         return 0;
//     }
//     let count = 1;
//     for(let char of str){
//         if(char === ' '){
//             count++
//         }
//     }
//     return count;
// };
// const text = "I like to learn JavaScript with Lead Educare";
// const countText = countWords(text);
// console.log(countText);



//==========Mehtod 3:===============

// const countWords = (str) => {
//     let count = 0;

//     if(str == " " || str.length === 0){
//         return 0;
//     }

//     if(str.length > 0 && !isSeparator(str[0])){
//         count++
//     }

//     for(let i = 1; i < str.length; i++){
//         currChar = str[i];
//         prevChar = str[i - 1]
//         if(!isSeparator(currChar) && isSeparator(prevChar)){
//             count++
//         }
//     }  
//     return count

//     function isSeparator(c) {
//         const separator = [' ', ',', ';', '.', '!', '?', '\n', '\t', '\r'];
//         return separator.includes(c);
//     }
// };
// const text = "JavaScript!!!   ";
// const countText = countWords(text);
// console.log(countText);