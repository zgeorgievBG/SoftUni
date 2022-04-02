function reverseNumbers(timesToRevers, arrayToReverse) {

    const newArray = arrayToReverse.slice(0, timesToRevers).reverse();
    console.log(newArray.join(' '))

}

// function reverseNumbers(times, numbers) {
//     let newArr = [];
//     let revArr = [];
//     let result = ' ';
    
//     for ( let i = 0; i < times; i++) {
//         newArr[i] = Number(numbers[i]);
//     }
    
//     for ( let i = 0; i < newArr.length; i++) {
//         result += newArr[times - 1 - i ] + ' '; 
//     }
    
//     console.log(result);
    
//     }

reverseNumbers(3, [10, 20, 30, 40, 50]);
reverseNumbers(2, [66, 43, 75, 89, 47])
reverseNumbers(4, [-1, 20, 99, 5]);