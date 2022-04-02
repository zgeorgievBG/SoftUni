function printASCII(el1, el2) {

    let elements = [];



    function findFirstAsciiChar(a, b) {
        if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return true;
        } else {
            return false;
        }
    }

    const result = findFirstAsciiChar(el1, el2);

    if (result) {
        for (let i = el1.charCodeAt(0) + 1; i < el2.charCodeAt(0); i++) {
            elements.push(String.fromCharCode(i));
        }
    } else {
        for (let i = el2.charCodeAt(0) + 1; i < el1.charCodeAt(0); i++) {
            elements.push(String.fromCharCode(i));
        }
    }

    print(elements);

    function print(arr) {
        console.log(arr.join(' '));
    }

}

printASCII('a',
'd')