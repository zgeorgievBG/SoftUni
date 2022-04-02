function solve(arrayOfWords) {

    let assocArray = {};
    let [...wordsToSearch] = arrayOfWords.shift().split(' ');
    
    wordsToSearch.map(word => {
        assocArray[word] = 0;
    })

    arrayOfWords.map(currentWord => {
        if(assocArray.hasOwnProperty(currentWord)) {
            assocArray[currentWord]++;
        }
    })

    Object.keys(assocArray).sort((a, b) => assocArray[b] - assocArray[a]).map(el => {
        console.log(`${el} - ${assocArray[el]}`);
    })
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);