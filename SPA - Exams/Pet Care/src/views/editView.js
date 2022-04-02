import { html } from "../../node_modules/lit-html/lit-html.js";
import * as utils from "../utils.js";
import * as petsService from "../api/petsService.js";

const editTemplate = (onSubmit, ctx) => html`<section id="editPage">
  <form @submit=${onSubmit} class="editForm">
    <img src="./images/editpage-dog.jpg" />
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" .value=${ctx.pet.name} />
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" .value=${ctx.pet.breed} />
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" .value=${ctx.pet.age} />
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input name="weight" id="weight" type="text" .value=${ctx.pet.weight} />
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input name="image" id="image" type="text" .value=${ctx.pet.image} />
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
  </form>
</section>`;

export const editView = (ctx) => {
  ctx.render(editTemplate(onSubmit.bind(null, ctx), ctx));
};

const onSubmit = async (ctx, event) => {
  event.preventDefault();
  const petId = ctx.pet._id;
  const formData = Object.fromEntries(new FormData(event.target));

  try {
    utils.checkInputFields(formData);
    await petsService.editPet(petId, formData);
    ctx.page.redirect(`/details/${petId}`);
  } catch (err) {
    return alert(err.message);
  }
};
