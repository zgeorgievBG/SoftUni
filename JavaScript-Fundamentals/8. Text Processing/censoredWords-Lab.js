function solve(text, theWord) {

    let censored = text.replace(theWord, '*'.repeat(theWord.length));
    
    
    while ( censored.includes(theWord)) {
      censored = censored.replace(theWord, '*'.repeat(theWord.length));
    }
    
    console.log(censored);
    
    }

    solve("A small sentence with some words", "small")