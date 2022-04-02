function solve(input) {

    const obj = [];
    let count = 0;
    
    let commandObj = {
        add: (text) => {
            obj.push({[text]: text})
        },
        remove: (text) => {
            console.log(obj)
        },
        print: () => {
            console.log(obj);
        }
    }



    input.map(line => {
        let [command, text] = line.split(' ');
        commandObj[command](text);
    })


}

let result = solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
let result2 = solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])