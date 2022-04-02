import { render } from "../../node_modules/lit-html/lit-html.js";

const container = document.querySelector("#container");
const ctxRender = (template) => render(template, container);

export const renderMiddleware = (ctx, next) => {
  ctx.render = ctxRender;
  next();
};
