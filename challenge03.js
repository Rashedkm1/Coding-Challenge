//  Print the multiplication table with 7

function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        let table = num * i;
        console.log(`${num} * ${i} = ${table}`);
    }
}
multiplicationTable(7);