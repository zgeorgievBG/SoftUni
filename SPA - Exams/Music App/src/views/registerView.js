import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from '../api/data.js';

//Register template rendered with lit-html
const registerTemplate = (onSubmit) => html`
        <!--Registration-->
        <section id="registerPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;

//Exported registerView function used by the module page.mjs in app.js file
export const registerView = (ctx) => {
    ctx.render(registerTemplate(onSubmit.bind(null, ctx)));
};

//This function is triggered by the user when clicking on the "Register" button
const onSubmit = async (ctx, ev) => {
    ev.preventDefault();

    //Gettion input field from the form
    const formData = Object.fromEntries(new FormData(ev.currentTarget));

    if(formData.password != formData['conf-pass']) {
        return alert('Passwords doesn\'t match');
    }

    if(formData.email == '' || formData.password == '') {
        return alert('All fields are required');
      }
    await authService.register(formData);
    ctx.page.redirect('/');
};