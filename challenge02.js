//Print the odd numbers less than 100

function oddNumbers(start, end){
    for(let i = start; i <= end; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
};
oddNumbers(1, 100)

