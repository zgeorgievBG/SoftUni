import { html, render } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../api/userService.js";
import * as utils from "../utils.js";

const root = document.getElementById("nav-container");

const userButtons = (onLogout) => html` <li>
    <a href="/create">Create Postcard</a>
  </li>
  <li><a @click=${onLogout} href="#">Logout</a></li>`;

const guestButtons = () => html`
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>
`;

const navigationTemplate = (ctx, onLogout) => html`
  <nav>
    <section class="logo">
      <img src="./images/logo.png" alt="logo" />
    </section>
    <ul>
      <!--Users and Guest-->
      <li><a href="/">Home</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      <!--Only Guest-->
      ${ctx.user ? userButtons(onLogout) : guestButtons()}
      <!--Only Users-->
    </ul>
  </nav>
`;

export const renderNavigation = (ctx, next) => {
  render(navigationTemplate(ctx, onLogout.bind(null, ctx)), root);
  next();
};

const onLogout = async (ctx) => {
  await authService.logout();
  utils.clearUserData();
  ctx.page.redirect("/");
};
