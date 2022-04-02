function calculateLength(input, input2, input3) {
    let total = 0;
    total += input.length;
    total += input2.length;
    total += input3.length;
    let avg = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
    
    
    
    
}

calculateLength('pasta', '5', '22.3')