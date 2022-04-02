import { html } from "../../node_modules/lit-html/lit-html.js";
import * as utils from '../utils.js';
import * as authService from '../api/userService.js';

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
            <form @submit=${onSubmit} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export const registerView = (ctx) => {
    ctx.render(registerTemplate(onSubmit.bind(null, ctx)));
};

const onSubmit = async (ctx, event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    try {
        utils.checkInputFields(formData);
        await authService.register(formData);
        ctx.page.redirect('/');
    } catch(err) {
        alert(err.message);   
    }

};
