import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as petsService from "../api/petsService.js";

const detailsTemplate = (ctx) => html`<section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${ctx.pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${ctx.pet.name}</h1>
        <h3>Breed: ${ctx.pet.breed}</h3>
        <h4>Age: ${ctx.pet.age}</h4>
        <h4>Weight: ${ctx.pet.weight}</h4>
        <h4 class="donation">Donation: ${ctx.donations * 100}$</h4>
      </div>
      <!-- if there is no registered user, do not display div-->
      <div class="actionBtn">
        <!-- Only for registered user and creator of the pets-->
        ${ctx.user && ctx.isOwner ? userButtons(ctx) : nothing}
        <!--(Bonus Part) Only for no creator and user-->
        ${ctx.user && !ctx.isOwner && !ctx.hasDonated
          ? donationBtn(ctx)
          : nothing}
      </div>
    </div>
  </div>
</section>`;

const donationBtn = (ctx) =>
  html`<a @click=${(event) => onDonation(event, ctx)} href="#" class="donate"
    >Donate</a
  >`;

const userButtons = (ctx) => html` <a href="/edit/${ctx.pet._id}" class="edit"
    >Edit</a
  >
  <a
    @click=${(event) => onDelete(event, ctx)}
    href="javascript:void(0)"
    class="remove"
    >Delete</a
  >`;

export const detailsView = async (ctx) => {
  ctx.render(detailsTemplate(ctx, onDonation.bind(null, ctx)));
};

const onDelete = async (event, ctx) => {
  event.preventDefault();
  const petId = ctx.pet._id;
  const confirmed = confirm("Are you sure you want to delete this post");

  if (confirmed) {
    await petsService.deletePet(petId);
    ctx.page.redirect("/");
  }
};

const onDonation = async (event, ctx) => {
  event.preventDefault();
  const petId = ctx.pet._id;
  await petsService.donate(petId);
  ctx.page.redirect(`/details/${petId}`);
};
