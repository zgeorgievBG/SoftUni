import { html } from "../../node_modules/lit-html/lit-html.js";
import * as libraryService from "../api/libraryService.js";

const detailsTemplate = (onDelete, ctx, onLike, onDislike) => html` <section
  id="details-page"
  class="details"
>
  <div class="book-information">
    <h3>${ctx.book.title}</h3>
    <p class="type">Type: ${ctx.book.type}</p>
    <p class="img"><img src=${ctx.book.imageUrl} /></p>
    <div class="actions">
      <!-- Edit/Delete buttons ( Only for creator of this book )  -->
      ${ctx.isOwner ? userButtons(ctx, onDelete) : null}
      <!-- Bonus -->
      <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
      ${ctx.user && !ctx.isOwner && !ctx.hasLiked ? html`<a class="button" @click=${onLike} href="javascript:void(0)">Like</a>` : null}
      ${ctx.user && ctx.hasLiked && !ctx.isOwner ? html`<a class="button" @click=${onDislike} href="javascript:void(0)">Dislike</a>` : null}
    
      <!-- ( for Guests and Users )  -->
      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: ${ctx.totalLikes}</span>
      </div>
      <!-- Bonus -->
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${ctx.book.description}</p>
  </div>
</section>`;


const userButtons = (ctx, onDelete) => html`      
<a class="button" href="/edit/${ctx.book._id}">Edit</a>
<a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;

export const detailsView = async (ctx) => {
  ctx.render(detailsTemplate(onDelete.bind(null, ctx),ctx, onLike.bind(null, ctx), onDislike.bind(null, ctx)));
};

const onDelete = async(ctx) => {
    const id = ctx.params.id;
    const confirmed = confirm(`Are you sure you want to delete this book`);
    if(confirmed) {
        await libraryService.deleteBook(id);
        ctx.page.redirect('/');
    }
};

const onLike = async(ctx) => {
    await libraryService.addLike(ctx.book._id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
};

const onDislike = async(ctx) => {
    const likeId = await libraryService.getLikeId(ctx.book._id, ctx.user._id);
    await libraryService.deleteLike(likeId[0]._id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
};

