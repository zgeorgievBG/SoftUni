function solve([text]) {

    let pattern = /\+359([\s-])2{1}\1[0-9]{3}\1[0-9]{4}\b/g
    let result = text.match(pattern);

    console.log(result.join(', '))
}

solve(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"])