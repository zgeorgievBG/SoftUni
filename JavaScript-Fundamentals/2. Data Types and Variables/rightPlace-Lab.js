function solve(wrongWord, replacer, correctWord){

    let replacedWord = wrongWord.replace('_', replacer);
    
    if ( replacedWord !== correctWord) {
        console.log('Not Matched')
    } else {
        console.log('Matched')
    }

}

solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')