import {html} from '../../node_modules/lit-html/lit-html.js';
import * as theaterService from '../api/teatherAuth.js'
import { checkForEmptyFields} from '../utils.js';

const createTemplate = (onSubmit) => html`
<!--Create Page-->
<section id="createPage">
            <form @submit=${onSubmit} class="create-form">
                <h1>Create Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>`;


export const createView = (ctx) => {
    ctx.render(createTemplate(onSubmit.bind(null, ctx)));
}

const onSubmit = async(ctx,event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target))

    try {
        checkForEmptyFields(formData);
        await theaterService.createOne(formData);
        ctx.page.redirect('/')
    }catch (err) {
        alert(err.message)
    }
}