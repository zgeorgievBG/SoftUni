function sortElements(array) {

    let newArray = []

    array.map(el => {
        if (el < 0) {
            newArray.unshift(el);
        } else {
            newArray.push(el);
        }
    })

    console.log(newArray.join('\n'));
}

sortElements([3, -2, 0, -1]);