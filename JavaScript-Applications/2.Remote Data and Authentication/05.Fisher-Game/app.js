import {
    setupLogin,
    viewLogin
} from './login.js';
import {
    setupRegister,
    viewRegister
} from './register.js';
import {
    setupHome,
    viewHome
} from './home.js';

start();

function start() {
    const main = document.getElementById('container');

    const nav = document.getElementById('navigation');
    const homeSection = document.querySelector('.catchSection');
    const registerSection = document.querySelector('.registerSection');
    const loginSection = document.querySelector('.loginSection');

    setupLogin(main, loginSection, setUserNav);
    setupRegister(main, registerSection, setUserNav);
    setupHome(main, homeSection);

    const links = {
        'loginBtn': viewLogin,
        'registerBtn': viewRegister,
        'homeBtn': viewHome,
    };

    setupNavigation();


    setUserNav();

    function setupNavigation() {

        nav.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'A') {
                const view = links[ev.target.id];
                if (typeof view == 'function') {
                    ev.preventDefault();
                    view();
                }
            }
        });

    }

}


function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline';
    } else {
        document.getElementById('guest').style.display = 'inline';
        document.getElementById('user').style.display = 'none';
    }
}