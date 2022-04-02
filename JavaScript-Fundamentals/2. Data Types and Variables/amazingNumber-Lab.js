function solve(input) {

    let result = input.toString().split('').map(Number).reduce((a, c) => a + c, 0).toString();
    
    if (result.includes(9)) {
        console.log(`${input} Amazing? True`);
    } else {
        console.log(`${input} Amazing? False`);
    }

}

 solve(1233);
 solve(999)