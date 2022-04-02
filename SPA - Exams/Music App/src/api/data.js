import * as api from "../api/api.js";

const endpoints = {
  albums: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  create: "/data/albums",
  details: (id) => `/data/albums/${id}`,
  delete: (id) => `/data/albums/${id}`,
  edit: (id) => `/data/albums/${id}`,
  search: (albumName) => `/data/albums?where=name%20LIKE%20%22${albumName}%22`
};

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getRecent() {
  return await api.get(endpoints.recent);
}

export async function getAllAlbums() {
  return await api.get(endpoints.albums);
}

export async function getAlbum(id) {
  return await api.get(endpoints.details(id));
}

export async function createAlbum(data) {
  return await api.post(endpoints.create, data);
}

export async function editAlbum(id, data) {
  return await api.put(endpoints.edit(id), data);
}
export async function deleteAlbum(id) {
  return await api.del(endpoints.delete(id));
}

export async function searchAlbum(albumName) {
    return await api.get(endpoints.search(albumName));
}
