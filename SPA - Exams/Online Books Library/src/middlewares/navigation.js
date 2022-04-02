import { html, render } from "../../node_modules/lit-html/lit-html.js";
import * as authService from '../api/userService.js';

const root = document.getElementById('site-header');

const userButtons = (ctx, onLogout) =>html`
    <div id="user">
      <span>Welcome, ${ctx.user.email}</span>
      <a class="button" href="/books">My Books</a>
      <a class="button" href="/create">Add Book</a>
      <a @click=${onLogout} class="button" href="javascript:void(0)">Logout</a>
    </div>`;

const guestButtons = () => html`
    <div id="guest">
      <a class="button" href="/login">Login</a>
      <a class="button" href="/register">Register</a>
    </div>
`;

const navigationTemplate = (ctx, onLogout) => html` <nav class="navbar">
  <section class="navbar-dashboard">
    <a href="/">Dashboard</a>
    ${ctx.user ? userButtons(ctx, onLogout) : guestButtons()}
  </section>
</nav>`;

export const renderNavigation = (ctx, next) => {
  render(navigationTemplate(ctx, onLogout.bind(null, ctx)), root);
  next();
};

const onLogout = async(ctx) => {
    await authService.logout();
    ctx.page.redirect('/');
};
