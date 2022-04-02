import * as authService from './api.js'


const endpoints = {
    home: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    details: (id) => `/data/theaters/${id}`,
    edit: (id) => `/data/theaters/${id}`,
    delete: (id) => `/data/theaters/${id}`,
    profile: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export const getAll = async () => {
    return await authService.get(endpoints.home);
}

export const getOne = async(id) => {
    return await authService.get(endpoints.details(id));
}

export const editOne = async(id, data) => {
    return await authService.put(endpoints.edit(id), data);
}

export const createOne = async(data) => {
    return await authService.post(endpoints.create, data)
}

export const deleteOne = async(id) => {
    return await authService.del(endpoints.delete(id));
}

export const createdByCurrentUser = async(userId) => {
        return await authService.get(endpoints.profile(userId))
}
