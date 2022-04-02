function rotate(numbers) {
    newArr = [];
    let finalRotation = '';
    let rotations = Number(numbers[numbers.length - 1]);
 


    numbers.pop(numbers.length - 1);

    for (let i = 0; i < rotations; i++) {
        newArr = [];
        for (let j = 0; j < numbers.length - 1; j++) {
            newArr[0] = numbers[numbers.length - 1];
            newArr[j + 1] = numbers[j];

            if (numbers[j] == "remove") {
                numbers.pop(numbers[j]);
            }
        }
        numbers = newArr;
    }


    for ( let i = 0; i <= numbers.length - 1; i++) {
        finalRotation += numbers[i] + ' ';
    }
    console.log(finalRotation);
    
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotate(['1', '2', '3', '4', '2']);
rotate(['remove', 'remove', 'remove']);