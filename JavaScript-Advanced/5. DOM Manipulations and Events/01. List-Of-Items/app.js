function addItem() {
    let items = document.querySelector('#items');
    let text = document.querySelector('#newItemText');



    let liElement = document.createElement('li');
    liElement.textContent = text.value;
    items.appendChild(liElement);

    text.value = '';
}