function addItem() {

    const selectEl = document.getElementById('menu');

    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    const optionEl = document.createElement('option');
    optionEl.textContent = inputText.value;
    optionEl.value = inputValue.value;

    selectEl.appendChild(optionEl);

    inputText.value = '';
    inputValue.value = ''

}
