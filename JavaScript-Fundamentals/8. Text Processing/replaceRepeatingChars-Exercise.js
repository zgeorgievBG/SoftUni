function solve(text) {

    text = text.split('');
    let result = text.shift();

    text.map(el => {
        let lastIndex = result[result.length - 1];
        if (lastIndex != el) {
            result += el;
        }
    })

    console.log(result);

}

solve('aaaaabbbbbcdddeeeedssaa')
solve('qqqwerqwecccwd')