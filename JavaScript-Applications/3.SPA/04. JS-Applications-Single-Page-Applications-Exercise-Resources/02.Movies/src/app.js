import { setupRegister, showRegister} from './register.js';
import { setupLogin, showLogin} from './login.js';
import { setupCreate, showCreate} from './create.js';
import { setupHome, showHome} from './home.js';
import { setupDetailed, showDetailed} from './detailed.js';
import { setupEdit} from './edit.js';


const links = {
    'loginLink': showLogin,
    'registerLink': showRegister,
    'addLink': showCreate,
    'homeLink': showHome
};

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const createMovie = document.getElementById('add-movie');
const registerForm = document.getElementById('form-sign-up');
const loginForm = document.getElementById('form-login');
const homePage = document.getElementById('home-page');
const editMovie = document.getElementById('edit-movie');
const detailedMovie = document.getElementById('movie-details');

setupHome(main, homePage);
setupLogin(main, loginForm);
setupCreate(main, createMovie);
setupRegister(main, registerForm);
setupDetailed(main, detailedMovie);
setupEdit(main, editMovie);

setupNavigation();
//Start application in home view;
showHome();

function setupNavigation() {
    
    const email = sessionStorage.getItem('userEmail');
    if(email === null) {
        document.querySelectorAll('.nav-item.user').forEach(b => b.style.display = 'none');
        document.querySelectorAll('.nav-item.guest').forEach(b => b.style.display = 'block');
    } else {
        document.getElementById('welcomeLink').textContent = `Welcome, ${email}`;
        document.querySelectorAll('.nav-item.user').forEach(b => b.style.display = 'block');
        document.querySelectorAll('.nav-item.guest').forEach(b => b.style.display = 'none');
    }
    


nav.addEventListener('click', (event) => {
    if(event.target.tagName == 'A') {
        const view = links[event.target.id];
        if(typeof view == 'function') {
            event.preventDefault();
            view();
        } else if( event.target.id == 'logoutLink') {
            document.getElementById('welcomeLink').textContent = `Welcome, email`;
            document.querySelectorAll('.nav-item.user').forEach(b => b.style.display = 'none');
            document.querySelectorAll('.nav-item.guest').forEach(b => b.style.display = 'block');
            sessionStorage.clear();
            setupNavigation();
            showHome();
        }
    }
});

document.querySelector('#addMovieBtn').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});



}


