function solve(arr) {

    let sortedNumber = arr.sort( (a, b) => { 
        return a - b;
     });

     let newArr = sortedNumber.slice(0, 2);

console.log(newArr.join(' '));


}

solve([30, 15, 50, 5]);