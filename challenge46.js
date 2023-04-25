// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers
// Method 1:
// const findMax = (arr) => {
//     let max = -Infinity;
//     for(let i = 0; i < ar.length; i++){
//         let el = arr[i];
//         if(Array.isArray(el)){
//             el = findMax(el)
//         }
//         if(el > max){
//             max = el;
//         }
//     }
//     return max
// }
// var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
// const max = findMax(ar);
// console.log(max);

// Method 2:

const findMax = (arr) => {
    let max = -Infinity;
    let arrays = [arr];
    // console.log(arrays);//[ [ 2, 4, 10, [ 12, 4, [Array], 4 ], [ 3, 2, 99 ], 0 ] ]

    
    for(let i = 0; i < arrays.length; i++){
        let currentArray = arrays[i];
        
        for(let j = 0; j < currentArray.length; j++){
            let el = currentArray[j];
            if(Array.isArray(el)){
                arrays.push(el)
            }
            if(el > max){
                max = el;
            }
        }
        

    }

    return max

}
var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
console.log(findMax(ar));
