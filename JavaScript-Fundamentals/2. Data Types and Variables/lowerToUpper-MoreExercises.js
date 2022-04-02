function lowerToUpper(letter) {

    let index = letter.charCodeAt();
    if ( index >= 65 && index <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`)
    }
}

lowerToUpper('L');
lowerToUpper('f');