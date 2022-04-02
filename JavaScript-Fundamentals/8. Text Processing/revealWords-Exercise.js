function solve(replacer,textToReplace) {

    replacer = replacer.split(', ');
    replacer.map(word => {
        let currentWord = '*'.repeat(word.length);
        textToReplace = textToReplace.replace(currentWord, word);
    })

console.log(textToReplace);

}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');

solve('great',
'softuni is ***** place for learning new programming languages')