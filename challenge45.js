// Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (Array.isArray(el)) {
        sum += sumArray(el);
      } else {
        sum += el;
      }
    }
    return sum;
}
var data = [1, 2, [15, [23], [5, 12]], [100]];
console.log(sumArray(data));
