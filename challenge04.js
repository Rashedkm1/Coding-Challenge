//Print all the multiplication tables with numbers from 1 to 10


function multiplicationTables(start, end){
    for(let i = start; i <= end; i++){
        console.log(`Multiplication Tables of ${i}`)
        for(let j = 1; j <= 10; j++){            
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log(`----------------------`);
    }
    
};
multiplicationTables(1, 10);