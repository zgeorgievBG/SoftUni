import { getOneGame } from "../api/games.js";
import { getUserData } from "../utils.js";

export const preloadMiddleware = async (ctx, next) => {
  const id = ctx.params.id;
  const game = await getOneGame(id);
  ctx.game = game;
  next();
};
