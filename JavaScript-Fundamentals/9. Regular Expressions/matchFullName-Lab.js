function solve([text]) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = text.match(pattern);
    console.log(result.join(' '))

}

solve(['ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov, Georgi Petkov'])