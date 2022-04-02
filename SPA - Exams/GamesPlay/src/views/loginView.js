import { loginTemplate } from "../templates/loginTemplate.js";
import { login } from "../api/games.js";

export function loginView(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();
    const formData = Object.fromEntries(new FormData(ev.target));
    await login(formData);
    ctx.page.redirect("/");
  }
}
