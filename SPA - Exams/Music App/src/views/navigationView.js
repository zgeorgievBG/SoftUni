import { html } from "../../node_modules/lit-html/lit-html.js";

//User buttons to be showed
const user = html` 
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>`;

//Guest buttons to be showed
const guest = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

//Main navigation template
const navigationTemplate = (token) => html` <nav>
  <img src="./images/headphones.png" />
  <a href="/">Home</a>
  <ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    ${token != null ? user : guest }

  </ul>
</nav>`;


export const navigationView = (ctx) => {
  return navigationTemplate(ctx.accessToken);
};
