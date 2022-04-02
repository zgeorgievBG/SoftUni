import {
    html,
    render
} from '../node_modules/lit-html/lit-html.js';

// async function addItem() {
//     const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
//     const data = await response.json();
//     const result = pageTemplate(Object.values(data));
//     update(result);
// }
// addItem();

// async function postData(event) {
//     event.preventDefault();
//     const text = event.target.parentNode.querySelector('#itemText').value;
//     const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             text
//         })
//     });

//     if (!response.ok) {
//         const error = await response.json();
//         alert(error.message);
//     }
//     const data = await response.json();
//     await addItem();
//     event.target.parentNode.querySelector('#itemText').value = '';
// }


// const pageTemplate = (data) => html `
//  <h1>Dropdown Menu</h1>
//     <article>
//         <div>
//             <select id="menu">${data.map(optionsTemplate)}</select>
//         </div>
//         <form>
//             <label for="itemText">
//                 Text:
//             </label>
//             <input type="text" id="itemText" />
//             <input type="submit" @click=${postData} value="Add">
//         </form>
//     </article>`;

// const optionsTemplate = (data) => html `<option value=${data._id}>${data.text}</option>`;

// const main = document.querySelector('body');

// function update(result) {
//     render(result, main);
// }



const selectTemplate = (list) => html `
 <select id="menu">
     ${list.map(l =>html`<option value=${l._id}>${l.text}</option>`)}
 </select>
`;


async function initialize() {
    document.querySelector('form').addEventListener('submit', (event) => addItem(event, list));

    const data = await (await fetch(endpoint)).json();
    const list = Object.values(data);
    update(list);
}

const main = document.querySelector('div');
const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
initialize();


async function addItem(ev, list) {
    ev.preventDefault();

    const text = ev.target.querySelector('#itemText').value;


    const response = await fetch(endpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text
        })
    });

    const result = await response.json();
    list.push(result);
    update(list);

}


function update(list) {
    const result = selectTemplate(list);
    render(result, main);
}