import { html } from "../../node_modules/lit-html/lit-html.js";
import * as libraryService from '../api/libraryService.js';
import * as utils from '../utils.js';

const editTemplate = (onSubmit, book) => html`
  <section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
      <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input type="text" name="title" id="title" .value=${book.title} />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea name="description" id="description">${book.description}</textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input
              type="text"
              name="imageUrl"
              id="image"
              .value=${book.imageUrl}
            />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type" .value=${book.type}>
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Save" />
      </fieldset>
    </form>
  </section>
`;

export const editView = async(ctx) => {
    const id =ctx.params.id;
    const book = await libraryService.getBook(id);
  ctx.render(editTemplate(onSubmit.bind(null, ctx), book));
};

const onSubmit = async(ctx, event) => {
    event.preventDefault();
    const id = ctx.params.id;
    const formData = Object.fromEntries(new FormData(event.target));

    try {
        utils.checkInputFields(formData);
        await libraryService.editBook(id, formData);
        ctx.page.redirect(`/details/${id}`);
    }catch (err) {
        return alert(err.message);
    }


};
