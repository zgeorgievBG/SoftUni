function solve(num) {

    for (let i = 1; i <= num; i++) {
        sum = i % 10;
        sum = sum / 10;
        console.log(parseInt(sum))
    }

}

solve(15);