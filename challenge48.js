//Coding challenge #48. Create a function to return the longest word(s) in a string

const getLongestWords = (str) => {
    str = str.split(" ");
    let longestWords = [];

    str.forEach(word => {
        if(word.length > longestWords[0]?.length || !longestWords.length){
            longestWords = [word];
        } else {
            if(word.length === longestWords[0]?.length){
                longestWords.push(word);
            }
        }
    });
    return longestWords;
};
let text = "Create a function to return the longest sentence in a string";
console.log(getLongestWords(text));