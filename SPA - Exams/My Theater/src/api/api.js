import { getUserToken } from "../utils.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if(data) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = getUserToken();

    if(token) {
        options.headers['X-Authorization'] = token;
    }

    try{
        const response = await fetch(host + url, options);

        if(!response.status != 200) {
        if(response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if(response.status == 204) {
            return response
        } else {
            return response.json();
        }
        }

        return response.json();

    }catch(err) {
        alert(err.message)
        throw err;
    }


}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
