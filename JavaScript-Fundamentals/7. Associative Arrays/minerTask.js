function solve(input) {

    let mine = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (!mine.hasOwnProperty(resource)) {
            mine[resource] = qty;
        } else {
             let current = mine[resource];
             mine[resource] = current + qty;
        }

    }


    for (let key in mine) {
        console.log(`${key} -> ${mine[key]}`)
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );