function attachEventsListeners() {

    let mainElement = document.querySelector('main');
    mainElement.addEventListener('click', onClick);


    function onClick(ev) {
        if(ev.target.value == 'Convert') {
            let current = ev.target.parentNode.querySelector('input[type=text]');
            console.log(current.value)
        }
    }
}