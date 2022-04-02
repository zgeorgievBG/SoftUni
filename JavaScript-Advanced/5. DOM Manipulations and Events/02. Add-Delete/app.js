function addItem() {
    
    let ulElement = document.getElementById('items');
    let text = document.getElementById('newItemText');
    let liElement = createElement('li', text.value);
    let deleteBtn = createElement('a', '[Delete]');

    deleteBtn.href = '#';

    deleteBtn.addEventListener('click', (e) => {
        deleteBtn.parentNode.remove();
    })
    liElement.appendChild(deleteBtn);
    ulElement.appendChild(liElement);

    function createElement(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }

    text.value = '';

}