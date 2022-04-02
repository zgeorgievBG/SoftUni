function solve(commands) {

    let count = 0;
    let result = []

    commands.map(command => {
        count++;
        if (command == 'add') {
            result.push(count);
        } else {
            result.splice(result.length - 1, 1);
        }
    })

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 
'add', 
'add', 
'add']);
solve(['add', 
'add', 
'remove', 
'add', 
'add'])
solve(['remove', 
'remove', 
'remove'])