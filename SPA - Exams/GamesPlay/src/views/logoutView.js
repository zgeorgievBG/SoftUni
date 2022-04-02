import { logout } from "../api/games.js";

export async function logoutView(ctx) {
  await logout();
  ctx.page.redirect("/");
}
