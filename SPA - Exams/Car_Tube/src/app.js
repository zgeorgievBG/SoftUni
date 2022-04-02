import page from "../node_modules/page/page.mjs";
import { render } from '../node_modules/lit-html/lit-html.js';
import { logoutUser } from './api/data.js';

import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import { dashView } from './views/dashboard.js';
import { detailedView } from './views/details.js';
import { editView } from './views/edit.js';
import { myPostView } from './views/myCars.js';
import { searchView } from './views/search.js';
import { homeView } from './views/home.js';



const main = document.getElementById('site-content');

page('/',renderMiddleView, homeView);
page('/dashboard',renderMiddleView, dashView);
page('/login',renderMiddleView, loginView);
page('/register',renderMiddleView, registerView);
page('/create',renderMiddleView, createView);
page('/details/:id',renderMiddleView, detailedView);
page('/edit/:id',renderMiddleView, editView);
page('/myPosts',renderMiddleView, myPostView);
page('/search',renderMiddleView, searchView);



page.start();

setUserNav();
setActiveNav();



function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if(userId != null) {
        document.getElementById('welcomeUser').textContent = `Welcome ${sessionStorage.getItem('userName')}`;
        document.getElementById('profile').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('welcomeUser').textContent = 'Welcome user';
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

function setActiveNav() {
    
}

function renderMiddleView(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
    setUserNav();
}

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    await logoutUser();
    setUserNav();
});