function sumEvenNumbers(arrayOfNumbers) {

    let sum = arrayOfNumbers.map(Number).filter(n => n % 2 == 0).reduce((a, c)=> a + c, 0);
    console.log(sum)


}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['2','4','6','8','10'])