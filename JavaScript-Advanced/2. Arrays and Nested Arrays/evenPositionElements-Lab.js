function solve(array) {

    let filtered = array.filter((el, index) => index % 2 == 0);
    console.log(filtered.join(' '))

}

solve(['20', '30', '40', '50', '60'])