import page from "../node_modules/page/page.mjs";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { loginView } from "../src/views/loginView.js";
import { createView } from "../src/views/createView.js";
import { detailsView } from "../src/views/detailsView.js";
import { registerView } from "../src/views/registerView.js";
import { dashboardView } from "../src/views/dashboardView.js";
import { homeView } from "../src/views/homeView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { editView } from "./views/editView.js";
import { logoutView } from "./views/logoutView.js";
import { preloadMiddleware } from "./middlewares/preloadMiddleware.js";

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page("/", homeView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/details/:id", preloadMiddleware, detailsView);
page("/edit/:id", editView);

page.start();
