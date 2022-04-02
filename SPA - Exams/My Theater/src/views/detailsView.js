import {html} from '../../node_modules/lit-html/lit-html.js'
import * as theaterService from '../api/teatherAuth.js'
import { isOwner } from '../utils.js';

const detailsTemplate = (onDelete, ctx) => html`
<!--Details Page-->
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${ctx.theater.title}</h1>
            <div>
                <img src=${ctx.theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${ctx.theater.description}</p>
            <h4>Date: ${ctx.theater.date}</h4>
            <h4>Author: ${ctx.theater.author}</h4>
            <div class="buttons">
                ${ctx.isOwner ? html`                
                <a @click=${onDelete} class="btn-delete" >Delete</a>
                <a class="btn-edit" href="/edit/${ctx.theater._id}">Edit</a>` : null}
                <a class="btn-like" href="#">Like</a>
            </div>
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    ctx.isOwner = isOwner(ctx);
    ctx.render(detailsTemplate(onDelete.bind(null, ctx), ctx))

}

const onDelete = async(ctx, event) => {
    event.preventDefault();
    const confirmed = confirm('Are you sure you want to delete this post');
    if(confirmed) {
        await theaterService.deleteOne(ctx.params.id);
        ctx.page.redirect('/')
    }
}