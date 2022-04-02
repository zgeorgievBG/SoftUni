function correctPassword(array) {

    let correctPassword = array.shift();
    let loginCounter = 0;
    
    for (let i = 0; i < array.length; i++ ) {
        let reversedPass = array[i].split('').reverse().join('');
        if (correctPassword == reversedPass) {
            console.log(`User ${correctPassword} logged in.`);
            break;
        } else if ( loginCounter < 3) {
            console.log(`Incorrect password. Try again.`)
            loginCounter++;
        } else {
            console.log(`User ${correctPassword} blocked!`)
        }
    }

}

correctPassword(['Acer','login','go','let me in','recA']);
correctPassword(['sunny','rainy','cloudy','sunny','not sunny']);