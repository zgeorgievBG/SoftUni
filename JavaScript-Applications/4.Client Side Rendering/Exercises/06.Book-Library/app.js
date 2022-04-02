import {
    render
} from '../node_modules/lit-html/lit-html.js';
import {
    layoutTemplate
} from './templates.js';
import * as api from './data.js';

const main = document.querySelector('body');

const onSubmit = {
    'add-form': onCreateBook,
    'edit-form': onEditBook
};

const ctx = {
    list: [],
    async load() {
        ctx.list = await api.get();
        update();
    },
    onEdit(id) {
        const book = ctx.list.find(b => b._id == id);
        update(book);
    },
    async onDelete(id, confirmed) {
        if (confirmed) {
            await api.del(id); 
        }

    }
};

document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    onSubmit[event.target.id](formData, event.target);

});


async function start() {
    update();
}

function update(bookToEdit) {
    const result = layoutTemplate(ctx, bookToEdit);
    render(result, main);
}

start();

async function onCreateBook(formData, form) {

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.post(book);
    form.reset();
}

async function onEditBook(formData, form) {

    const id = formData.get('bookId');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.put(book, id);
    form.reset();
    update();
}