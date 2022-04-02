function solve(...params) {

    let number = Number(params.shift());


    const commands = {
        'chop': (num) => {
            console.log(num / 2)
            return num / 2;

        },
        'dice': (num) => {
            console.log(Math.sqrt(num));
            return Math.sqrt(num)
        },
        'spice': (num) => {
            console.log(num + 1)
            return num + 1;
        },
        'bake': (num) => {
            console.log(num * 3)
            return num * 3
        },
        'fillet': (num) => {
            console.log((num * 0.80).toFixed(2))
            return (num * 0.80).toFixed(2);
        }
    }

        
    params.map(el => {
        number = commands[el](number);
    })

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')