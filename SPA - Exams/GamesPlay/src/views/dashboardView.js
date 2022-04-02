import { dashboardTemplate } from "../templates/dashboardTemplate.js";
import * as gamesService from "../api/games.js";

export async function dashboardView(ctx) {
  const gamesData = await gamesService.getAll();
  ctx.render(dashboardTemplate(gamesData));
}
