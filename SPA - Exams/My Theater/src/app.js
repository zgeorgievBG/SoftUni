import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { preload } from './middlewares/preloadMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { profileView } from './views/profileView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware)
page(navigationMiddleware)
page(renderMiddleware);

page('/', homeView)
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/profile', profileView);
page('/details/:id',preload ,detailsView)
page('/edit/:id', editView)
page('/logout', logoutView)

page.start();