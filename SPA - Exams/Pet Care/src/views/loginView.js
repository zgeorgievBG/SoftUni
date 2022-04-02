import { html } from "../../node_modules/lit-html/lit-html.js";
import * as utils from "../utils.js";
import * as userService from "../api/userService.js";

const loginTemplate = (onSubmit) => html`<section id="loginPage">
  <form @submit=${onSubmit} class="loginForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Login</h2>

    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="steven@abv.bg"
        value=""
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <button class="btn" type="submit">Login</button>

    <p class="field">
      <span>If you don't have profile click <a href="/register">here</a></span>
    </p>
  </form>
</section>`;

export const loginView = async (ctx) => {
  ctx.render(loginTemplate(onSubmit.bind(null, ctx)));
};

const onSubmit = async (ctx, event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));

  try {
    utils.checkInputFields(formData);
    await userService.login(formData);
    ctx.page.redirect("/");
  } catch (err) {
    return alert(err);
  }
};
