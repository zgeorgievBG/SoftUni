import {render} from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('site-content');
const ctxRender = (templateResult) => render(templateResult, root);

export const renderMiddleware = ( ctx, next) => {
    ctx.render = ctxRender;
    next();
};