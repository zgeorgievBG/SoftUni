function deleteByEmail() {
    let text = document.querySelector('input[name=email]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let result = document.getElementById('result');
    
    rows.map(row => {
        if (row.textContent.includes(text) && text !== '') {
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.'
        } else {
            result.textContent = 'Not found.'
        }
    })
}

