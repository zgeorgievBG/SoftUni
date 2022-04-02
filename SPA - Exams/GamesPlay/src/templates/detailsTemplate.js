import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (onDelete, onCommentSubmit, ctx) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${ctx.game.imageUrl} />
        <h1>${ctx.game.title}</h1>
        <span class="levels">${ctx.game.maxLevel}</span>
        <p class="type">${ctx.game.category}</p>
      </div>
      <p class="text">${ctx.game.summary}</p>

      <div class="details-comments">
        <h2>Comments:</h2>
        ${ctx.comments.length > 0
          ? html`<ul>
              ${ctx.comments.map(commentTemplate)}
            </ul>`
          : html`<p class="no-comment">No comments.</p>`}
      </div>

      <!--Add edit and delete buttons only for the creator of the game-->
      ${buttonsTemplate(ctx, onDelete)}
    </div>
    <!--Add comment section if there is user and this user is not the creater of the game -->
    ${addCommentTemplate(ctx, onCommentSubmit)}
  </section>
`;

const addCommentTemplate = (ctx, onCommentSubmit) =>
  html` ${ctx.user && !ctx.isOwner
    ? html` <article class="create-comment hidden">
        <label>Add new comment:</label>
        <form @submit=${onCommentSubmit} class="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input class="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>`
    : null}`;

const buttonsTemplate = (ctx, onDelete) =>
  html` ${ctx.isOwner
    ? html` <div class="buttons">
        <a href="/edit/${ctx.game._id}" class="button">Edit</a>
        <a @click=${onDelete} class="button">Delete</a>
      </div>`
    : null}`;

const commentTemplate = (c) => html` <li class="comment">
  <p>Content: ${c.comment}.</p>
</li>`;
