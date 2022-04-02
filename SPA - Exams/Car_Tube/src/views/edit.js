import { html } from '../../node_modules/lit-html/lit-html.js';
import {getCarById, editCar} from '../api/data.js';

const editTemplate = (car, onSubmit) => html`<section id="edit-listing">
<div class="container">

    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>`;

export async function editView(ctx) {
    const id = ctx.params.id;
    const car = await getCarById(id);
    ctx.render(editTemplate(car, onSubmit));

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
            await editCar(id, data);
            ctx.page.redirect('/dashboard');
        }  
    }
}