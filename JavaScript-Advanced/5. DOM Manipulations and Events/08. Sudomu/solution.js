function solve() {

    const button = document.querySelectorAll('button');
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let isValid = true;
    const resultDiv = document.getElementById('check').children;
    const tableEl = document.querySelector('table');

    button[0].addEventListener('click', (ev) => {

        let result = [];
        tableRows.map(row => {
            let current = [];
            const rows = Array.from(row.children).map(curRow => {
                current.push(curRow.children[0].value);
            });
            result.push(current);
        });


        for (let i = 0; i < result.length; i++) {
            currentRow = result[i];

            for (let y = 0; y < currentRow.length; y++) {
                let currentNum = currentRow[y];
                if (currentNum == currentRow[y + 1]) {
                    isValid = false;
                    break;
                }
            }
        }

        let secondArr = [];
        for (let i = 0; i < result.length; i++) {
            let newRow = [];
            for (let y = 0; y < result.length; y++) {
                let index = result.length - 1 - y;
                newRow.push(result[index][i]);
            }
            secondArr.push(newRow);
        }

        for (let i = 0; i < secondArr.length; i++) {
            currentRow = secondArr[i];

            for (let y = 0; y < currentRow.length; y++) {
                let currentNum = currentRow[y];
                if (currentNum == currentRow[y + 1]) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            tableEl.style.border = '2px solid green';
            resultDiv[0].style.color = 'green';
            resultDiv[0].textContent = `You solve it! Congratulations!`;
        } else {
            tableEl.style.border = '2px solid red';
            resultDiv[0].style.color = 'red';
            resultDiv[0].textContent = `NOP! You are not done yet...`;
        }
    });

button[1].addEventListener('click', (ev) => {
    tableEl.style.border = '';
    resultDiv[0].style.color = '';
    resultDiv[0].textContent = '';

    tableRows.map(row => {
        Array.from(row.children).map(curRow => {
            console.log(curRow.childNodes[1].value = '');
        });
        
    });


});



}