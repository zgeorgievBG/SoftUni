function solve(array) {

    let words = array.pop();
    let text = array[0].toString();
    let result = text.match(/_+/g);

    for (let i = 0; i < result.length; i++) {
        let currentElement = result[i];

        for (let j = 0; j < words.length; j++) {
            if (words[j].length == currentElement.length) {
                currentElement = words[j];
                break;
            }
        }
        result[i] = currentElement;
    }

    
    result.map(word => {
        wordToReplace = ('_').repeat(word.length);
        text = text.replace(wordToReplace, word);
    });

    console.log(text);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);