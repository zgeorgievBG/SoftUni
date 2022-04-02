import {
    cats
} from './catSeeder.js';
import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js';
import {
    styleMap
} from '../node_modules/lit-html/directives/style-map.js';

const section = document.getElementById('allCats');

const mainTemplate = (cats) => html `
<ul @click=${(event) => onClick(event, cats)}>${cats.map(cat => catsTemplate(cat))}</ul>
`;


const catsTemplate = (cat) => html `
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
             <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                 <div class="status" style=${styleMap(cat.info ? {} : {display: 'none'})} id=${cat.id}>
                     <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p> 
                </div>
            </li>
`;

cats.map(cat => cat.info = false);
update();

function onClick(event, data) {

    if (event.target.classList.contains('showBtn')) {
        const catId = event.target.parentNode.querySelector('.status').id;
        const cat = data.find(c => c.id == catId);
        cat.info = !cat.info;
        update();
    }
}



function update() {
    render(mainTemplate(cats), section);
}