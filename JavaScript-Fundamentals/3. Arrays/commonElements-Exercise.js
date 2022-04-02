function solve(firstArray, secondArray) {

    for (let element of firstArray) {
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);