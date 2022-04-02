import { html } from "../../node_modules/lit-html/lit-html.js";
import * as libraryService from "../api/libraryService.js";
import * as utils from "../utils.js";

const myBooksTemplate = (books) => html` <section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
    ${books.length > 0 ? html`<ul class="my-books-list">${books.map(bookTemplate)}</ul>` : noBooks}
</section>`;

const noBooks = html` <p class="no-books">No books in database!</p>`;

const bookTemplate = (book) => html` 
<li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl} /></p>
  <a class="button" href="/details/${book._id}">Details</a>
</li>`;

export const myBooksView = async (ctx) => {
  const userId = utils.getUserId();
  const books = await libraryService.getUserBooks(userId);
  ctx.render(myBooksTemplate(books));
};
