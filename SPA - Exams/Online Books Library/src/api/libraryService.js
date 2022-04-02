import * as api from "./api.js";

const endpoints = {
  addBook: "/data/books",
  getBooks: "/data/books?sortBy=_createdOn%20desc",
  bookDetails: (id) => `/data/books/${id}`,
  deleteBook: (id) => `/data/books/${id}`,
  editBook: (id) => `/data/books/${id}`,
  myBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  addLike: '/data/likes',
  getLikesCount: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
  hasLiked: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  getLikeId: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&`,
  deleteLike: (bookId) => `/data/likes/${bookId}` 
};


export async function getRecent() {
  return await api.get(endpoints.recent);
}

export async function getAllBooks() {
  return await api.get(endpoints.getBooks);
}

export async function getBook(id) {
  return await api.get(endpoints.bookDetails(id));
}

export async function createBook(data) {
  return await api.post(endpoints.addBook, data);
}

export async function editBook(id, data) {
  return await api.put(endpoints.editBook(id), data);
}
export async function deleteBook(id) {
  return await api.del(endpoints.deleteBook(id));
}

export async function getUserBooks(userId) {
  return await api.get(endpoints.myBooks(userId));
}

export async function addLike(bookId) {
  return await api.post(endpoints.addLike, {bookId});
}

export async function getLikesCount(bookId) {
  return await api.get(endpoints.getLikesCount(bookId));
}

export async function hasLiked(bookId, userId) {
  return await api.get(endpoints.hasLiked(bookId, userId));
}

export async function deleteLike(bookId) {
  return await api.del(endpoints.deleteLike(bookId));
}

export async function getLikeId(bookId, userId) {
  return await api.get(endpoints.getLikeId(bookId, userId));
}