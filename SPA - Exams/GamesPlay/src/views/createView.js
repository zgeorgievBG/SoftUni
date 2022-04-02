import { createTemplate } from "../templates/createTemplate.js";
import { checkForEmptyFields } from "../utils.js";
import { createGame } from "../api/games.js";

export function createView(ctx) {
  ctx.render(createTemplate(onSubmit.bind(null, ctx)));
}

const onSubmit = async (ctx, ev) => {
  ev.preventDefault();
  const formData = Object.fromEntries(new FormData(ev.target));
  try {
    checkForEmptyFields(formData);
    await createGame(formData);
    ctx.page.redirect("/dashboard");
  } catch (err) {
    alert(err.message);
  }
};
