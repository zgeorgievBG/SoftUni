function sumFirstAndLast(array) {

    let firstElement = array.shift();
    let lastElement = array.pop();
    let sum = firstElement + lastElement;
    console.log(sum)

}

sumFirstAndLast([20,30,40]);