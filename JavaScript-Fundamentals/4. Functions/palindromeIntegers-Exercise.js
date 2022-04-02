function isPalindrome(array) {

    array.map(number => {
        let reversedNum = reverseNumber(number);
        if ( number == reversedNum) {
            console.log(true)
        } else {
            console.log(false)
        }

    })


    function reverseNumber(num) {
        return  num.toString().split('').reverse().join('');

    }
}

isPalindrome([123,323,421,121])