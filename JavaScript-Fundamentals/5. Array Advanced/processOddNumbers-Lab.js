function solve(arr) {

    let oddNumbers = [];
    
    
    
        for (let i = 0; i <= arr.length - 1; i++) {
            currentNum = arr[i];
            if ( i % 2 != 0 ) {
                currentNum *= 2;
                oddNumbers.unshift(currentNum);
            }
    
        }
    
        console.log(oddNumbers.join(' '));
    
    }

    solve([10, 15, 20, 25])