import { showHome } from './home.js';

let main;
let section;

async function login(options) {

    const response = await fetch('http://localhost:3030/users/login', {
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
    
    document.getElementById('welcomeLink').textContent = `Welcome, ${data.email}`;
    document.querySelectorAll('.nav-item.guest').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.nav-item.user').forEach(b => b.style.display = 'block');

    showHome();
}



export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const data = {email, password};
        login(data);
        event.target.reset();


    });

}

export function showLogin() {
    main.innerHTML = '';
    main.append(section);

}