import { registerTemplate } from "../templates/registerTemplate.js";
import * as authService from "../api/games.js";

export function registerView(ctx) {
  ctx.render(registerTemplate(onSubmit.bind(null, ctx)));
}

const onSubmit = async (ctx, event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));

  if (formData.email == "" || formData.password == "") {
    return alert("All fields are required");
  }
  await authService.register(formData);
  ctx.page.redirect("/");
};
