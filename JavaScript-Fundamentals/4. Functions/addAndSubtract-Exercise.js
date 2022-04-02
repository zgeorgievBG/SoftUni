function solve(firstNum,secondNum,thirdNum) {

    function add (a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    let result = add(firstNum, secondNum);
    result = subtract(result, thirdNum);
    
console.log(result)

}

solve(23,6,10)