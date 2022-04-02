import { welcomePageTemplate } from "../templates/welcome-template.js";
let render;

export function renderWelcomePage(ctx) {
    render = ctx.render;
    ctx.render(welcomePageTemplate());
}
