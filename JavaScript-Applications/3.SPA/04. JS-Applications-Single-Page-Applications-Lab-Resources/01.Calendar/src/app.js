const yearSelect = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

const monthsData = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
};

document.body.innerHTML = '';
document.body.append(yearSelect);


yearSelect.addEventListener('click', (event) => {

    if (event.target.classList.contains('day') || event.target.classList.contains('date') && event.currentTarget.id == 'years') {
        const selectedYear = event.target.textContent.trim();
        event.stopImmediatePropagation(); 
        document.body.innerHTML = '';
        document.body.append(years[`year-${selectedYear}`]);
    }
});



document.body.addEventListener('click', event => {
    if (event.target.tagName == 'CAPTION' && event.currentTarget.querySelector('section').id.includes('year-')) {
        document.body.innerHTML = '';
        document.body.append(yearSelect);
    }

    if (event.target.classList.contains('day') || event.target.classList.contains('date') && event.currentTarget.querySelector('section').id.includes('year-')) {
        const selectedMonth = event.target.textContent.trim();
        if (monthsData.hasOwnProperty(selectedMonth)) {
            const id = event.currentTarget.querySelector('section').id.split('-');
            document.body.innerHTML = '';
            document.body.append(months[`month-${id[1]}-${monthsData[selectedMonth]}`]);
        }
    }

    if (event.target.tagName == 'CAPTION' && event.currentTarget.querySelector('section').id.includes('month-')) {
        const year = event.currentTarget.querySelector('caption').textContent.trim().split(' ').slice(-4);
        document.body.innerHTML = '';
        document.body.append(years[`year-${year[1]}`]);

    }


});