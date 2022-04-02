import { showHome } from './home.js';

async function register(options) {

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(options)
    });

    if(!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('userEmail', data.email);
    
    document.querySelectorAll('.nav-item.guest').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.nav-item.user').forEach(b => b.style.display = 'block');

    showHome();
}


let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');

        console.log(1);
        if(email == '' || password == '') {
            return alert('All field are requared');
        } else if( password != rePass) {
            return alert('Passwords dont match');
        }

        const data = {email, password};
        register(data);
        event.target.reset();
    });


}

export function showRegister() {
    main.innerHTML = '';
    main.append(section);


}