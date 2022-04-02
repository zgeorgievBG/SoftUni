function guestTracking(array) {

    let checkedIn = [];

    for (let command of array) {
        let commands = command.split(' ');
        let name = commands[0];

        if (!(commands.includes('not'))) {

            if (checkedIn.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                checkedIn.push(name);
            }

        } else {
            if (checkedIn.includes(name)) {
                checkedIn = checkedIn.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(checkedIn.join('\n'));
}

guestTracking(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])