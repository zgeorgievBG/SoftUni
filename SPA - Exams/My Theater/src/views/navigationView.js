import {html} from '../../node_modules/lit-html/lit-html.js'

const userBtn = html`
<li><a href="/profile">Profile</a></li>
        <li><a href="/create">Create Event</a></li>
        <li><a href="/logout">Logout</a></li>`

const guestBtn = html`        <li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`

const navigationTemplate = (ctx) => html`
<nav>
    <a href="/">Theater</a>
    <ul>
   ${ctx.user ? userBtn : guestBtn}
    </ul>
</nav>`;


export const navigationView = (ctx) => {
    return navigationTemplate(ctx);
};