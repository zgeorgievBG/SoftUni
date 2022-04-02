import { showHome } from './home.js';


let main;
let section;


export function setupCreate(mainTarget, sectionTarget) {

    main = mainTarget;
    section = sectionTarget;

    section.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageUrl');

        const token = sessionStorage.getItem('userToken');
        const response = await fetch('http://localhost:3030/data/movies', {
        method: 'post',
        headers: {'Content-Type': 'application/json',
        'X-Authorization': token},
        body: JSON.stringify({title, description, img})

        });

        showHome();

    });
}

export function showCreate() {

    main.innerHTML = '';
    main.append(section);

}