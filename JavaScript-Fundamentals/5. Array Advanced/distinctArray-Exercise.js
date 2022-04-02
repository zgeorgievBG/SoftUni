function removeElements(array) {

    let outputArray = [];

    for ( let element of array ) {
        if (!(outputArray.includes(element))) {
            outputArray.push(element);
        }
    }

    console.log(outputArray.join(' '));
    

}

removeElements([7, 8, 9, 7, 2, 3, 4, 1, 2])