function factoriel(num1, num2) {

    let secondFactoriel = factorielOfSecondNum(num2);

    function factorielOfSecondNum(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let firstFactoriel = factorielOfFirstNum(num1);

    function factorielOfFirstNum(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
 
    let finalResult = (a, b) => a / b;
    console.log((finalResult(firstFactoriel, secondFactoriel)).toFixed(2));
}

factoriel(5, 2)