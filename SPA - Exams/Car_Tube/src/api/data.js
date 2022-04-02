import * as api from './api.js';

export const logUser = api.login;
export const regUser = api.register;
export const logoutUser = api.logout;

const host = 'http://localhost:3030';
api.settings.host = host;

export async function getAllCars() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

export async function getCarById(id) {
    return await api.get(host + '/data/cars/' + id);
}

export async function createCar(data) {
    return await api.post(host + '/data/cars', data);
}

export async function editCar(id, data) {
    return await api.put(host + '/data/cars/' + id, data);
}

export async function deleteCar(id) {

    return await api.del(host + '/data/cars/' + id);
}

export async function myCars() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getCarsByYear(year) {
    console.log(year);
    return await api.get(host + `/data/cars?where=year%3D${year}`);
}


