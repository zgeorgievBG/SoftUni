function sortArrays(array) {

    let sorted = array.sort((a,b) => {
        let result = a.length - b.length;

        if(result == 0) {
            result = a.localeCompare(b);
        }

        return result;
    })

console.log(sorted.join('\n'));
}

sortArrays(["alpha", "beta", "gamma"]);