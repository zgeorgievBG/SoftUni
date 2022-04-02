function solve(array) {

    let currentBiggestNumber = '';
    let max = Number.MIN_SAFE_INTEGER;

    let filtered = array.filter((element, index) => {

        if (element >= max) {
            max = element;
            return max;
        }
        
    }) 
console.log(filtered.join(' '))
}

// array.filter cannot return 0, because is falsy value;


function solve(array) {

 let max = Number.MIN_SAFE_INTEGER;
 let newArray = []

    array.map(n => {
        if(n >= max) {
            max = n;
            newArray.push(max)
        }
    })

console.log(newArray.join(' '));

}
solve([ 0, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([ 1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 24]);