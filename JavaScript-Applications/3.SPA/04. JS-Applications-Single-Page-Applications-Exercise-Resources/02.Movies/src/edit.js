import { showDetailed} from './detailed.js';
let main;
let section;


async function getMovieInfo(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id, {});
    return response.json();
}



export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

}

export async function showEdit(id) {

    const movie = await getMovieInfo(id);

    const titleElement = section.querySelector('form div input[name="title"]');
    titleElement.value = movie.title;
    const descElement = section.querySelector('form div textarea[name="description"]');
    descElement.value = movie.description;
    section.querySelector('form div input[name="imageUrl"]').value = movie.img;


    section.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageUrl');

        const token = sessionStorage.getItem('userToken');
        const response = await fetch('http://localhost:3030/data/movies/' +id, {
        method: 'put',
        headers: {'Content-Type': 'application/json',
        'X-Authorization': token},
        body: JSON.stringify({title, description, img})
        });

        if(response.ok) {
            showDetailed(id);
        }


    });
    console.log(movie);
    main.innerHTML = '';
    main.append(section);

}