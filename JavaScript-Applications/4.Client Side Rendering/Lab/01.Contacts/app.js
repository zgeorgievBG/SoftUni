import {
    render
} from '../node_modules/lit-html/lit-html.js';
import {
    contacts
} from './contacts.js';
import cardTemplate from './card.js';

const container = document.getElementById('contacts');
container.addEventListener('click', (event) => onClick(event));

const result = contacts.map(cardTemplate);


render(result, container);

function onClick(event) {

}