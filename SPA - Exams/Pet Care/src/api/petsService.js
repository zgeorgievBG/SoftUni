import * as api from "./api.js";

const endpoints = {
  getAll: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  petDetails: (id) => `/data/pets/${id}`,
  deletePet: (id) => `/data/pets/${id}`,
  createPet: "/data/pets",
  editPet: (id) => `/data/pets/${id}`,
  hasDonated: (petId, userId) =>
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  donate: "/data/donation",
};

export async function getAll() {
  return await api.get(endpoints.getAll);
}

export async function petDetails(id) {
  return await api.get(endpoints.petDetails(id));
}

export async function createPet(data) {
  return await api.post(endpoints.createPet, data);
}

export async function editPet(id, data) {
  return await api.put(endpoints.editPet(id), data);
}

export async function deletePet(id) {
  return await api.del(endpoints.deletePet(id));
}

export async function hasDonated(petId, userId) {
  return await api.get(endpoints.hasDonated(petId, userId));
}

export async function donate(petId) {
  return await api.post(endpoints.donate, { petId });
}
