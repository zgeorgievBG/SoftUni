import * as api from '../api/api.js'
import * as utils from '../utils.js'

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export const login = async(data) => {
    const user = await api.post(endpoints.login, data)
    utils.createUserData(user);
}

export const register = async(data) => {
    const user = await api.post(endpoints.register, data);
    utils.createUserData(user);
}

export const logout = async() => {
    await api.get(endpoints.logout);
    utils.clearUserData();
    return
}