function solve(input) {

    let result = '';
    let final = '';

    for (let row = 0; row < input; row++) {
        result = '';
        
        for (let col = 0; col < input; col++) {
            result += input + ' ';
        }

        final += result + '\n';
    }


console.log(final.trim());
}

solve(3)