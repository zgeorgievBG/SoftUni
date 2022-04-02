import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCar} from '../api/data.js';

const createTemplate = (onSubmit) => html`<section id="create-listing">
<div class="container">
    <form @submit=${onSubmit} id="create-form">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price">

        <hr>
        <input type="submit" class="registerbtn" value="Create Listing">
    </form>
</div>
</section>`;

export async function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});

        const isEmpty = Object.values(data).some(v => v == '');
        if(isEmpty) {
            alert('All fields are requared');
        } else {
            data.price = Number(data.price);
            data.year = Number(data.year);
            await createCar(data);
            ctx.page.redirect('/dashboard'); 
        }

    }
}