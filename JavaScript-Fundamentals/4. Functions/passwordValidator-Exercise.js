function solve(password) {

    let isValid = true;

    function checkLenght(pass) {
        if(!(pass.length >= 6 && pass.length <= 10)) {
            isValid = false;
            console.log(`Password must be between 6 and 10 characters`);
        }
    }

    function checkSimbuls(pass) {
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt(0);
            if(!((char >= 48 && char <=57) || (char >= 65 && char <=90) || (char >=97 && char <= 122))) {
                isValid = false
                console.log(`Password must consist only of letters and digits`);
                break;
            }
        }
    }

    function checkForDigits(pass) {
        let count = 0;
        for (let i = 0; i < pass.length; i++) {
            let char = pass[i].charCodeAt(0);
            if(char >= 48 && char <=57) {
                count++;
            }
    }
    if ( count < 2) {
        isValid = false;
        console.log(`Password must have at least 2 digits`)
    }
}
checkLenght(password);
checkSimbuls(password);
checkForDigits(password);


if(isValid) {
    console.log(`Password is valid`);
}

}

solve('logIn')
solve('MyPass123')
solve('Pa$s$s')