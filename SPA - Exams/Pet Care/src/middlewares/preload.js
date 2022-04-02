import * as petsService from "../api/petsService.js";

export const preloadMiddleware = async (ctx, next) => {
  const petId = ctx.params.id;
  const pet = await petsService.petDetails(petId);
  if (ctx.user) {
    ctx.isOwner = ctx.user._id == pet._ownerId;
    ctx.hasDonated = await petsService.hasDonated(pet._id, ctx.user._id);
  }

  ctx.donations = await petsService.donationCounts(petId);
  ctx.pet = pet;
  next();
};
