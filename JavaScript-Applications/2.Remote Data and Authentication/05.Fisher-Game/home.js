let main;
let section;


export function setupHome(mainElement, sectionElement, setUserNav) {
    main = mainElement;
    section = sectionElement;
}

export async function viewHome() {
    main.innerHTML = '';
    main.appendChild(section);
}


function createCatch(inputData) {

    const fragment = document.createDocumentFragment();

    inputData.forEach(data => {

        const divContainer = document.createElement('div');
        divContainer.setAttribute('data-id', data._id);
        divContainer.classList.add('catch');
        divContainer.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="Paulo Amorim" />
            <hr />
            <label>Weight</label>
            <input type="number" class="weight" value=${data.weight} />
            <hr />
            <label>Species</label>
            <input type="text" class="species" value=${data.species} />
            <hr />
            <label>Location</label>
            <input type="text" class="location" value=${data.location} />
            <hr />
            <label>Bait</label>
            <input type="text" class="bait" value=${data.bait} />
            <hr />
            <label>Capture Time</label>
            <input type="number" class="captureTime" value=${data.captureTime} />
            <hr />
            <button disabled class="update">Update</button>
            <button disabled class="delete">Delete</button>
    `;

        fragment.appendChild(divContainer);

    });

    return fragment;


}

async function addCatch(ev) {

    const token = sessionStorage.getItem('accessToken');
    const url = `http://localhost:3030/data/catches`;
    const fieldSet = ev.target.parentNode;
    const angler = fieldSet.querySelector('.angler').value;
    const weight = fieldSet.querySelector('.weight').value;
    const species = fieldSet.querySelector('.species').value;
    const location = fieldSet.querySelector('.location').value;
    const bait = fieldSet.querySelector('.bait').value;
    const captureTime = fieldSet.querySelector('.captureTime').value;

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    };

    const response = await fetch(url, {
        method: 'post',
        header: {
            'Content-type': 'application-json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

}

async function getAllCatches() {
    const url = 'http://localhost:3030/data/catches';

    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (err) {
        return alert(error);
    }
}