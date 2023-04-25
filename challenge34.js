// Coding challenge #34. Create a function that will return an array with words inside a text

const getWords = (text) => {
    const separator = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?', '(', ')'];
    let words = [];
    let currentWord = '';
    let isWord = false;

    for(let i = 0; i < text.length; i++){
        let char = text[i];

        if(separator.includes(char)){
            if(isWord){
                words.push(currentWord);
                currentWord = '';
                isWord = false;
            }
        }
        else {
            currentWord += char;
            isWord = true;
        }
    }
    if(isWord){
        words.push(currentWord);
    }
    return words;
}

const text = "This is a sentence.     It has some words in it";
const words = getWords(text);
console.log(words);
