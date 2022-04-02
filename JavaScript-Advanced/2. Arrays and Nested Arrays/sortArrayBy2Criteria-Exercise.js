function solve(arrayForSorting) {

    let sorted = arrayForSorting.sort((a, b) => {
        let result = a.length - b.length;
        if (result == 0) {
            result = a.localeCompare(b);
        }

        return result;
    })

    console.log(sorted.join('\n'))
}
solve(['alpha', 
'beta', 
'gamma'])
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)