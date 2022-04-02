function sum(num) {

    let result = [];

    for (let i = 1; result.length < num; i += 2) {
        console.log(i);
        result.push(i);
    }
    let total = result.reduce((c, a) => c + a, 0);
    console.log(`Sum: ${total}`)
}

sum(5)
sum(3)