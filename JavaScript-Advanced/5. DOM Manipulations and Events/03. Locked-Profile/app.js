function lockedProfile() {
    const mainDiv = document.getElementById('main');
    mainDiv.addEventListener('click', onClick);


    function onClick(ev) {
        if(ev.target.tagName === 'BUTTON') {
            const profile = ev.target.parentNode;
            const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';
            
            if (isLocked) {
                return;
            }

            let hiddenDiv = profile.querySelector('div');
            let isVisible = hiddenDiv.style.display === 'block';
            hiddenDiv.style.display = isVisible ? 'none' : 'block';

            ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
        }
    }
} 
