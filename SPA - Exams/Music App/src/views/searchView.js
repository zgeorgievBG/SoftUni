import {html} from '../../node_modules/lit-html/lit-html.js';
import { searchAlbum } from '../api/data.js';
import { getUserData } from '../utils.js';

const searchTemplate = (onSearch) => html`
<!--Search Page-->
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
`;

const layoutTemplate = (onSearch, albums = [], user) => html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

             <!--Show after click Search button-->
             <div class="search-result">
                ${albums.length > 0 ? albums.map((album) => resultTemplate(album, user)) : html`<p class="no-result">No result.</p>`}
            </div>
        </section>
`;

const resultTemplate = (album, user) => html`
                <div class="card-box">
                    <img src=${album.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${album.name}</p>
                            <p class="artist">Artist: ${album.artist}</p>
                            <p class="genre">Genre: ${album.genre}</p>
                            <p class="price">Price: $${album.price}</p>
                            <p class="date">Release Date: ${album.releaseDate}</p>
                        </div>
                        ${user ? html`                        
                            <div class="btn-group">
                            <a href="javascript:void(0)" id="details">Details</a>
                        </div>` : null}

                    </div>
                </div>
            </div>
        </section>`;

export const searchView = (ctx) => {
    ctx.render(searchTemplate(onSearch.bind(null, ctx)));
};

const onSearch = async(ctx, event) => {
    const albumName = event.target.parentNode.children[0].value;
    if(albumName == '') {
        return alert('Search field is requred');   
     }
    const user = getUserData();
    const albums = await searchAlbum(albumName);
    ctx.render(layoutTemplate(onSearch.bind(null, ctx) ,albums, user));

};