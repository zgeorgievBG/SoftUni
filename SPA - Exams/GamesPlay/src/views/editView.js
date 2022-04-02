import { editTemplate } from "../templates/editTemplate.js";
import { checkForEmptyFields } from "../utils.js";
import { editGame, getOneGame } from "../api/games.js";

export async function editView(ctx) {
  const game = await getOneGame(ctx.params.id);
  ctx.render(editTemplate(onSubmit.bind(null, ctx), game));
}

async function onSubmit(ctx, event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));

  try {
    checkForEmptyFields(formData);
    await editGame(ctx.params.id, formData);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  } catch (err) {
    alert(err.message);
  }
}
