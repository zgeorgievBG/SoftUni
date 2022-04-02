import { detailsTemplate } from "../templates/detailsTemplate.js";
import { checkIfUserIsOwner } from "../utils.js";
import { deleteGame, getComments, postComment } from "../api/games.js";

export async function detailsView(ctx) {
  ctx.isOwner = checkIfUserIsOwner(ctx);
  ctx.comments = await getAllComments(ctx.params.id);
  ctx.render(
    detailsTemplate(
      onDelete.bind(null, ctx),
      onCommentSubmit.bind(null, ctx),
      ctx
    )
  );
}

//Delete game
async function onDelete(ctx, event) {
  event.preventDefault();
  const confirmed = confirm("Are you sure you want to delete this gmae");
  if (confirmed) {
    await deleteGame(ctx.params.id);
    ctx.page.redirect("/dashboard");
  }
}

//Get all comments
async function getAllComments(id) {
  return await getComments(id);
}

//Post comment
async function onCommentSubmit(ctx, ev) {
  ev.preventDefault();
  const id = ctx.params.id;
  const formData = Object.fromEntries(new FormData(ev.target));
  await postComment({ gameId: id, comment: formData.comment });
  ctx.page.redirect(`/details/${id}`);
}
