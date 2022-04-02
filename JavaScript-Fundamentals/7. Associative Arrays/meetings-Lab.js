function solve(input) {

    let meetingBook = {};

    input.map(line => {
        let [day, personName] = line.split(' ');

        if(!meetingBook.hasOwnProperty(day)) {
            meetingBook[day] = personName;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    })

    for (const key in meetingBook) {
        console.log(`${key} -> ${meetingBook[key]}`)
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])