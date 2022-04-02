import {
   towns
} from './towns.js';
import {
   html,
   render
} from '../node_modules/lit-html/lit-html.js';


const townsTemplate = (towns, match) => html `
   <article>
        <div id="towns">
<ul>${towns.map(t => townTemplate( t, match))}</ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${search}>Search</button>
        <div id="result"></div>
    </article>
`;

const townTemplate = (town, match) => html `<li class=${(match && town.toLowerCase().includes(match.toLowerCase())) ? 'active': ''}>${town}</li>`;
const main = document.querySelector('body');
update();

function update(match = '') {
   const result = townsTemplate(towns, match);
   render(result, main);
}


function search(event) {
   const match = event.target.parentNode.querySelector('input').value;
   update(match);
}