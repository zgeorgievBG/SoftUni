function toggle() {
    let buttonInfo = document.querySelector('.button');
    const text = document.getElementById('extra');

    if (buttonInfo.textContent == 'More') {
        buttonInfo.textContent = 'Less';
        text.style.display = 'block';
    } else if (buttonInfo.textContent == 'Less' ) {
        buttonInfo.textContent = 'More';
        text.style.display = 'none';
    }

}