import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return await api.get(host + "/data/games?sortBy=_createdOn%20desc");
}

export async function createGame(data) {
  return await api.post(host + "/data/games", data);
}

export async function editGame(id, data) {
  return await api.put(host + `/data/games/${id}`, data);
}

export async function getHomeGames() {
  return await api.get(
    host + "/data/games?sortBy=_createdOn%20desc&distinct=category"
  );
}

export async function getOneGame(id) {
  return await api.get(host + `/data/games/${id}`);
}

export async function deleteGame(id) {
  return await api.del(host + `/data/games/${id}`);
}

export async function getComments(gameId) {
  return await api.get(host + `/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function postComment(data) {
  console.log(data);
  return await api.post(host + `/data/comments`, data);
}
