import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authentication.js';
import {renderNavigation } from './middlewares/navigation.js';
import { preloadMiddleware } from './middlewares/preload.js';
import { renderMiddleware } from './middlewares/render.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { myBooksView } from './views/userBooksView.js';

page(authMiddleware);
page(renderNavigation);
page(renderMiddleware);

page('/', dashboardView);
page('/create', createView);
page('/details/:id',preloadMiddleware, detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/books', myBooksView);

page.start();