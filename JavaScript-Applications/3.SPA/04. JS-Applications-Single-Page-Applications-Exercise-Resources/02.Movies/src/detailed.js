import { e } from "./dom.js";
import { showHome } from './home.js';
import { showEdit } from './edit.js';


let main;
let section;

async function addLike(id) {
    const response = await fetch(`http://localhost:3030/data/likes`, {
        method:'post',
        headers: {'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('userToken')},
        body: JSON.stringify({movieId: id})
    });


    return response;
}

async function getLikes(id) {
    const resposne = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct_ownerId&count`);    
    return resposne.json();
}


async function getOwnLikes(id) {
    const userId = sessionStorage.getItem('userId');
    const resposne = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);    
    return resposne.json();
}

async function deleteMovie(ownerId, id) {

    const token = sessionStorage.getItem('userToken');
    const userId = sessionStorage.getItem('userId');
    if(userId == ownerId) {
        const response = await fetch('http://localhost:3030/data/movies/' +id, {
            method: 'delete',
            headers: {'Content-Type': 'application/json',
        'X-Authorization': token}
        });

        if(response.ok) {
            showHome();
        }
    }
    

}



async function getDataById(id) {

const response = await fetch('http://localhost:3030/data/movies/' +id);

    if(!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    return response.json();

}

function createMovieCard(movie, likes, ownLikes) {

const controls = [];
const userId = sessionStorage.getItem('userId');

if(userId != null) {
    if(userId == movie._ownerId) {
        controls.push('<a class="btn btn-danger" href="#">Delete</a>');
        controls.push('<a class="btn btn-warning" href="#">Edit</a>');
    } else if(ownLikes.length == 0){
        controls.push('<a class="btn btn-primary" href="#">Like</a>');
    }
}


controls.push(`<span class="enrolled-span">Liked 1</span>`);

const div = e('div', {className: 'container', id: movie._id}, '');
div.innerHTML = `
<div class="row bg-light text-dark">
<h1>Movie title: ${movie.title}</h1>

<div class="col-md-8">
    <img class="img-thumbnail" src="${movie.img}"
         alt="Movie">
</div>
<div class="col-md-4 text-center">
    <h3 class="my-3 ">Movie Description</h3>
    <p>${movie.description}</p>
    ${controls.join('')}
</div>
</div>
`;


div.addEventListener('click', async(event) => {
    if(event.target.textContent == 'Like') {
        const response = await addLike(movie._id);
        if(response.ok) {
            event.target.remove();
        }
    } else if(event.target.textContent == 'Delete') {
        deleteMovie(movie._ownerId, movie._id);
    } else if(event.target.textContent == 'Edit') {
        showEdit(movie._id);
    }
});

return div;

}

export function setupDetailed(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

}

export async function showDetailed(id) {

    main.innerHTML = '';

    const [movie, likes, ownLikes] = await Promise.all([
        getDataById(id),
        getLikes(id),
        getOwnLikes(id)
    ]);
    const result = createMovieCard(movie, likes, ownLikes);
    
    section.innerHTML = '';
    section.append(result);
    main.append(section);

}