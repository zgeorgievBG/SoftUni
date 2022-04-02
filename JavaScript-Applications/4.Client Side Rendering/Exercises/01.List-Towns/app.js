import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js';

const townsTemplate = (towns) => html `
    <ul>
        <li>${towns}</li>
    </ul>
</div>

`;

document.getElementById('btnLoadTowns').addEventListener('click', (event) => onClick(event));
const result = document.getElementById('root');

function onClick(event) {
    event.preventDefault();
    const form = event.target.parentNode;
    const formData = new FormData(form);
    const input = formData.get('towns').split(', ').map(t => t.trim());
    render(input.map(townsTemplate), result);
    form.reset();

}