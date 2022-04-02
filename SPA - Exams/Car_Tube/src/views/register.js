import { html } from '../../node_modules/lit-html/lit-html.js';
import {regUser} from '../api/data.js';


const registerTemplate = (onSubmit) => html`
<section id="register">
            <div class="container">
                <form @submit=${onSubmit} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href=${'/login'}>Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`;

export async function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('repeatPass');

        await regUser(username, password);
        ctx.page.redirect('/');

    }
}