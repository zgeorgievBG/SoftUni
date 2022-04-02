function focused() {
    const h1Elements = Array.from(document.querySelectorAll('input'));

    h1Elements.map(el => {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        })

        el.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused')
        })
    })

 
};