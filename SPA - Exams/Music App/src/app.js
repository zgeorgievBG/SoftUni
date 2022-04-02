import page from '../node_modules/page/page.mjs';
import { renderMiddleware } from './middlewares/render.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { editView } from './views/editView.js';
import { searchView } from './views/searchView.js';
import { detailsView } from './views/detailsView.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { logoutView } from './views/logoutView.js';


console.log(page);
//Middlewares
page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/catalog', catalogView);
page('/create', createView);
page('/search', searchView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page.start();