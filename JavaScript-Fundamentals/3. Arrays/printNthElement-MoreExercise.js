function printNElement(inputArr) {
    let incrementation = Number(inputArr[inputArr.length - 1]);
    let result = '';
    

    for ( let i = 0; i <= inputArr.length - 2; i += incrementation ){
        let currentNum = inputArr[i];
        result += currentNum + ' ';
   
    }
    console.log(result);
    
}

printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'test', '2']);