async function request(url, options) {
    const response = await fetch(url, options);
    
    if(!response.ok) {
        const error = response.json();
        alert (error.mesasge);
    }

    return response.json();
}

const host = 'http://localhost:3030/jsonstore/collections/books';

async function get() {
  return  Object.entries(await request(host)).map(([k, v]) => Object.assign(v, { _id: k }));
    
}

async function getDataById(id) {
    return await request(host + '/' + id);
}

async function post(data) {
    return await request(host, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}

async function put(data, id) {
    console.log(data, id);
    return await request(host + '/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}

async function del(id) {
    return await request(host + '/' + id, {
        method: 'delete'
    });
}

export {
    get,
    getDataById,
    post,
    put,
    del
};