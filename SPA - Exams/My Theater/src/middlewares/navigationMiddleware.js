import { render} from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js';

const container = document.getElementById('nav-container');

export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), container)
    next()
};