function sumElements(array) {

    let firstNum = Number(array.shift());
    let secondNum = Number(array.pop());

    let sum =  firstNum + secondNum;
    console.log(sum);


}

sumElements(['20', '30', '40'])