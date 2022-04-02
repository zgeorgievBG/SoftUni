import {html} from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../api/userAuth.js';


const loginTemplate = (onSubmit) => html`
 <!--Login Page-->
 <section id="loginaPage">
            <form class="loginForm" @submit=${onSubmit}>
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>`;

export const loginView = (ctx) => {
    ctx.render(loginTemplate(onSubmit.bind(null, ctx)));
};

const onSubmit = async(ctx, event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget))

    if(formData.email == '' || formData.password == '') {
        return alert('All fields are required')
    }
    await authService.login(formData);
    ctx.page.redirect('/')
}