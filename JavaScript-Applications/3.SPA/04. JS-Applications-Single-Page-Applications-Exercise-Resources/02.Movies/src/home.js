import { showDetailed } from "./detailed.js";
import { e } from "./dom.js";

let main;
let section;
let container;

async function getData() {
  const response = await fetch("http://localhost:3030/data/movies");

  if (!response.ok) {
    const error = await response.json();
    return alert(error.message);
  }

  return await response.json();
}

function createMovie(data) {
  const result = e("div", { className: "card mb-4" }, "");
  result.innerHTML = `
    <img class="card-img-top" src="${data.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
    <h4 class="card-title">${data.title}</h4>
    </div>
    <div class="card-footer">
    <button type="button" id=${data._id} class="btn btn-info MovieDetailsLink">Details</button>
    </div>
    </div>
    `;

    return result;
}

export function setupHome(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
  container = section.querySelector('.card-deck.d-flex.justify-content-center');
}

export async function showHome() {
    container.innerHTML = `Loading...`;
    main.innerHTML = "";
  main.append(section);

    const response = await getData();
    const movies = response.map(createMovie);

    const fragment = document.createDocumentFragment();
    movies.map(m => fragment.append(m));
    container.innerHTML = '';
    container.append(fragment);

    container.addEventListener('click', (event) => {
        if(event.target.classList.contains('MovieDetailsLink')) {
            showDetailed(event.target.id);
        }
    });

}
