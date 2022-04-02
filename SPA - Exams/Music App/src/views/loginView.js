import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from '../api/data.js';

//Login template
const loginTemplate = (onSubmit) => html`
  <section id="loginPage">
    <form @submit=${onSubmit}>
      <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input
          id="email"
          class="email"
          name="email"
          type="text"
          placeholder="Email"
        />

        <label for="password" class="vhide">Password</label>
        <input
          id="password"
          class="password"
          name="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit" class="login">Login</button>

        <p class="field">
          <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
      </fieldset>
    </form>
  </section>`;


export const loginView = (ctx) => {
    ctx.render(loginTemplate(onSubmit.bind(null, ctx)));
};

//This function is triggered by the user when clicking on "Login" button
const onSubmit = async (ctx, ev) => {
  ev.preventDefault();
  const formData = Object.fromEntries( new FormData(ev.currentTarget));
  if(formData.email == '' || formData.password == '') {
    return alert('All fields are required');
  }
  await authService.login(formData);
  ctx.page.redirect('/');
};
