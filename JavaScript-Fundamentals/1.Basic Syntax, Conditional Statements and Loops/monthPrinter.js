function printMonth (input) {

    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    if (months.hasOwnProperty(input)) {
        console.log(months[input]);
    } else {
        console.log(`Error!`)
    }
}

printMonth(2);
printMonth(13);
