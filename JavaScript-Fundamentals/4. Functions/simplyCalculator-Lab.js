function calculator(firstNum, secondNum, operator) {

    let operators = {
        'multiply': (a, b) => {
            return a * b;
        },
        'divide': (a, b) => {
            return a / b;
        },
        'add': (a, b) => {
            return a + b
        },
        'subtract': (a, b) => {
            return a - b;
        }
    }

    let result = operators[operator](firstNum, secondNum);
    console.log(result)

}

calculator(5,5,'multiply')
calculator(40,8,'divide')


