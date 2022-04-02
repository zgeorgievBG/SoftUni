import {html, render} from '../node_modules/lit-html/lit-html.js';
 
start();


const rowTemplate = (data, match) => html`
<tr class=${match ? 'select' : ''}>
   <td>${data.firstName} ${data.lastName}</td>
   <td>${data.email}</td>
   <td>${data.course}</td>
</tr>`;

const input = document.getElementById('searchField');
const main = document.querySelector('tbody');

async function start() {

   document.getElementById('searchBtn').addEventListener('click', () => {
     update(list, input.value);
   });

   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await response.json();
   const list = Object.values(data);
   update(list);

}

function update(list, match = '') {
   const result = list.map(r => rowTemplate(r,compare(r, match)));
   render(result, main);
}

function compare(item, match) {
   return Object.values(item).some(v =>match && v.toLowerCase().includes(match));
}