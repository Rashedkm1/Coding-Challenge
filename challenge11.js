// Calculate the average of the numbers in an array of numbers;

function calculationOfAverage(array){

    if(array.length == 0){
        return 0;
    }

    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        sum += element;
    }
    let avgNum = sum / array.length;
    return avgNum;
}

let array = [3, 7, 10, 20];
let result = calculationOfAverage(array);
console.log(result);