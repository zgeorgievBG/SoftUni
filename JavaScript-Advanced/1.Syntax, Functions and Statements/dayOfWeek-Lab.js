function days(day) {

    let daysOfWeek = {
        'Monday': '1',
        'Tuesday': '2',
        'Wednesday': '3',
        'Thursday': '4',
        'Friday': '5',
        'Saturday': '6',
        'Sunday': '7'
    }

    if (daysOfWeek.hasOwnProperty(day)) {
        return `${daysOfWeek[day]}`
    } else {
        return `error`
    }

}

console.log(days('Monday'))