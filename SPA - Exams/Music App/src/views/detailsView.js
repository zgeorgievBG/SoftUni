import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAlbum, deleteAlbum } from "../api/data.js";

const userButtons = html``;

const detailsTemplate = (onDelete, ctx, isOwner) => html` <!--Details Page-->
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${ctx.album.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${ctx.album.name}</h1>
          <h3>Artist: ${ctx.album.artist}</h3>
          <h4>Genre: ${ctx.album.genre}</h4>
          <h4>Price: ${ctx.album.price}</h4>
          <h4>Date: ${ctx.album.releaseDate}</h4>
          <p>${ctx.album.description}</p>
        </div>
        ${isOwner
          ? html`<div class="actionBtn">
              <a href="/edit/${ctx.album._id}" class="edit">Edit</a>
              <a @click=${onDelete} class="remove">Delete</a>
            </div>`
          : null}
      </div>
    </div>
  </section>`;

export const detailsView = async (ctx) => {
  const id = ctx.params.id;
  const album = await getAlbum(id);
  ctx.album = album;
  const isOwner = checkIfUserIsOwner(album._ownerId, ctx.userId);
  ctx.render(detailsTemplate(onDelete.bind(null, ctx), ctx, isOwner));
};

const checkIfUserIsOwner = (ownerId, userId) => {
  if (ownerId === userId) {
    return true;
  } else {
    return false;
  }
};

const onDelete = async (ctx, event) => {
  event.preventDefault();
  const confirmed = confirm("Are you sure you want to delete this album");
  if (confirmed) {
    await deleteAlbum(ctx.album._id);
    ctx.page.redirect("/catalog");
  }
};
