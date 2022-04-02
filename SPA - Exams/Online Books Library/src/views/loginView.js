import {html} from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../api/userService.js';
import * as utils from '../utils.js';

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>`;


export const loginView = (ctx) => {
    ctx.render(loginTemplate(onSubmit.bind(null, ctx)));
};

const onSubmit = async (ctx, event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    try {
        utils.checkInputFields(formData);
        await authService.login(formData);
        ctx.page.redirect('/');
    }catch(err) {
        return alert(err.message);
    }

};