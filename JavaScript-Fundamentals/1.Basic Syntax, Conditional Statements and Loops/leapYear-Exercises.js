function leapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log('yes');
    } else {
        console.log('no');
    }

}

leapYear(1984)