function calculateArea(input) {

 

    if(isNaN(input) || typeof input == 'boolean') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);     
    } else {
        const result = Math.PI * input * input;
        console.log(result.toFixed(2));
        
    }

}

calculateArea(5)