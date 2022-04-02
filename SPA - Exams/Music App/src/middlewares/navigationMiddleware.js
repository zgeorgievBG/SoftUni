import { render} from '../../node_modules/lit-html/lit-html.js';
import {navigationView} from '../views/navigationView.js';

const headerElement = document.getElementById('header-navigation');

//Render navigation
//Logic for guest/user is in views/navigationView
export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
};