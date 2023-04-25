// Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array.

  const jaggedArr = [
    [1, 2, 3],
    [4, [5, 6]],
    [7, 8, [9]],
  ];

  const deepCopy = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            subEl = deepCopy(arr[i]);
            result.push(subEl);
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
  };
  console.log(deepCopy(jaggedArr));
