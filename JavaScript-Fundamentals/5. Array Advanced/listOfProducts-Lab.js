function sortProducts(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));
    
    for ( let index in sorted) {
        let count = Number(index) + 1
        console.log(`${count}.${sorted[index]}`)
    }

}

sortProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])