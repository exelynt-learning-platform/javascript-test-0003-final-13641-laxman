
let rows = 6;


for (let i = 1; i <= rows; i++) {
    
    let line = "";

    let value;
    if (i % 2 === 1) {
        value = 1;
    } else {
        value = 0;
    }

    
    for (let j = 1; j <= i; j++) {
        
        line += value + " ";

        
        if (value === 1) {
            value = 0;
        } else {
            value = 1;
        }
    }

    
    console.log(line);
}