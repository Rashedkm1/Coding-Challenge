//Reverse a string

// Method 1:

let myArr = "Rashed";
const reverseStr = (str) => {
    let newArr = "";
    for(let i = str.length -1; 0 <= i; i--){
        let ele = str[i];
        newArr += ele;
    };
    return newArr;
};
console.log(reverseStr(myArr));


// Method 2: Using split(), reverse(), and join() 

/*let myArr = "Rashed"
const reverseStr = (str) => {
    let splitStr = str.split("").reverse().join("");
    return splitStr
};
console.log(reverseStr(myArr));*/


//Method 3: Using the reduce()
/*let myArr = "Rashed"
const reverseStr = (str) => {
    return str.split("").reduce((accu, curr) => {
        return curr + accu
    }, '');
};
console.log(reverseStr(myArr));*/



//Method 4: Using the Array.from() method

// Array.from() is a static method in JavaScript that creates a new Array instance from an array-like or iterable object. 

/*let myArr = "Rashed"
const reverseStr = (str) => {
    return Array.from(myArr).reverse().join("");
};
console.log(reverseStr(myArr));*/




//Method 5: Using the spread operator
/*let myArr = "Rashed"
const reverseStr = (str) => {
    return [...str].reverse().join("");
};
console.log(reverseStr(myArr));*/

//Method 6: Using the substring()
//substring() is a method in JavaScript that extracts a part of a string and returns a new string containing the extracted characters. The method takes two arguments:(start, end)
/*
let myArr = "Rashed"
const reverseStr = (str) => {
    let reverseArr = "";
    for(let i = str.length - 1; 0 <= i; i--){
        reverseArr = reverseArr + str.substring(i, i +1)
        // First iteration: i = 5, i+1 = 6
        // Second iteration: i = 4, i+1 = 5
        // Third iteration: i = 3, i+1 = 4
        // Fourth iteration: i = 2, i+1 = 3
        // Fifth iteration: i = 1, i+1 = 2
        // Sixth iteration: i = 0, i+1 = 1
    }
    return reverseArr;
};
console.log(reverseStr(myArr));*/

//Method 7: Using the split() and Map();
/*
let myArr = "Rashed"
const reverseStr = (str) => {
    // return str.split("").map(x => x).reverse().join("");
    return str.split("").map((value, index, arr) => {
        return arr[arr.length - index - 1]
        // First iteration: arr.length = 6, index = 0, arr[arr.length - index - 1] = arr[6 - 0 - 1] = arr[5] = "d"
        // Second iteration: arr.length = 6, index = 1, arr[arr.length - index - 1] = arr[6 - 1 - 1] = arr[4] = "e"

    }).join("");
};
console.log(reverseStr(myArr));*/





