function repeatString(string, count) {

    let result = '';

    for ( let i = 0; i < count; i++) {
        result += string;
    }

    return result;
}

let result = repeatString('abc', 3);
let resultOne = repeatString('String',2);
console.log(result);
console.log(resultOne)