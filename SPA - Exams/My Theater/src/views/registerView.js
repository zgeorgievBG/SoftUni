import {html} from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../api/userAuth.js'

const registerTemplate = (onSubmit) => html`
<!--Register Page-->
<section id="registerPage">
            <form @submit=${onSubmit} class="registerForm">
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>`;

export const registerView = (ctx) => {
    ctx.render(registerTemplate(onSubmit.bind(null, ctx)));
}

const onSubmit = async (ctx, event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));

    if(formData.password != formData.repeatPassword) {
        return alert('Passwords does\'t not match')
    }
    if(formData.email == '' || formData.password == '') {
        return alert('All field are required')
    }
    await authService.register(formData);
    ctx.page.redirect('/');
}