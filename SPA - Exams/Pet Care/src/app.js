import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authentication.js";
import { renderNavigation } from "./middlewares/navigation.js";
import { renderMiddleware } from "./middlewares/render.js";
import { preloadMiddleware } from "./middlewares/preload.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { editView } from "./views/editView.js";

page(authMiddleware);
page(renderNavigation);
page(renderMiddleware);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:id", preloadMiddleware, detailsView);
page("/edit/:id", preloadMiddleware, editView);
page.start();
