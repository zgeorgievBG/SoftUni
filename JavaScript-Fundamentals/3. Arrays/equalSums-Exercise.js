function equalSums(numbers) {
    let sumAfter = 0;
    let sumBefore = 0;
    let result = ' ';
    
    for ( let index = 0; index <= numbers.length - 1; index++) {
        sumBefore = 0;
        sumAfter = 0;
        for ( let i = 0; i < index; i++) {
            sumBefore += numbers[i];
        }

        for (let i = index + 1; i <= numbers.length - 1; i++) {
            sumAfter += numbers[i];
        }

        if ( sumBefore == sumAfter) {
            result = index;
            break;
        } else {
            result = 'no';
            
        }
    }
    console.log(result); 
}
equalSums([1, 2, 3, 3]);
equalSums([1]);
equalSums([1, 2]);