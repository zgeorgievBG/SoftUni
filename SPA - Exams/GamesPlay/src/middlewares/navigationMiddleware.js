import { navigationView } from "../views/navigationView.js";
import { render } from "../../node_modules/lit-html/lit-html.js";

const navContainer = document.getElementById("nav-header");

export const navigationMiddleware = (ctx, next) => {
  render(navigationView(ctx), navContainer);
  next();
};
