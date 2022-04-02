
import {html} from '../../node_modules/lit-html/lit-html.js'
import * as theaterService from '../api/teatherAuth.js'
import {checkForEmptyFields} from '../utils.js'

const editTemplate = (onSubmit, data) => html`
 <!--Edit Page-->
 <section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${data.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${data.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        .value=${data.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        .placeholder="Description">${data.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        .value=${data.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`


export const editView = async (ctx) => {
    const id = ctx.params.id
    const data = await theaterService.getOne(id);
    ctx.render(editTemplate(onSubmit.bind(null, ctx),data));

};

const onSubmit = async (ctx, ev) => {
    ev.preventDefault()
    const id = ctx.params.id
    const formData = Object.fromEntries(new FormData(ev.target))

    try {
        checkForEmptyFields(formData);
        await theaterService.editOne(id, formData)
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }catch (err) {
        alert (err.message)
    }

}