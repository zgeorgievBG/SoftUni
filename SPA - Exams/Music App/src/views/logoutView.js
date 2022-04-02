
import {logout} from '../api/data.js';

export const logoutView = async (ctx) => {
    await logout();
    ctx.page.redirect('/');
};