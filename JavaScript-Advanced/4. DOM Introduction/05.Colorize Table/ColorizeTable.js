function colorize() {
    let rows = document.querySelectorAll('tr');
    Array.from(rows).map((currentRow, index) => {
        if(index % 2 !== 0 ) {
            currentRow.style.backgroundColor = 'Teal';
        }
    })
}