function solve(input) {

    let modifiedArray = [];

    for (let i = 0; i < input.length; i++) {

        let currentNum = input[i];

        if (currentNum % 2 == 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }

        modifiedArray.push(currentNum);


    }

    console.log(modifiedArray);
    console.log(input.reduce((a, c) => a + c, 0));
    console.log(modifiedArray.reduce((a, c) => a + c, 0));

}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);