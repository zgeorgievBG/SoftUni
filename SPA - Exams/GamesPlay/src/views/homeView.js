import { homeTemplate } from "../templates/homeTemplate.js";
import { getHomeGames } from "../api/games.js";

export async function homeView(ctx) {
  const games = await getHomeGames();
  ctx.render(homeTemplate(games));
}
