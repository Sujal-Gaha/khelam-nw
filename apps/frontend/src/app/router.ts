import { LandingPage } from "../pages/landing.page";
import { createBrowserRouter } from "react-router-dom";
import { _FULL_ROUTES } from "./routes";
import { GamesPage } from "../pages/user/games.page";

const router = createBrowserRouter([
  {
    path: _FULL_ROUTES.HOME,
    Component: LandingPage,
  },
  {
    path: _FULL_ROUTES.BASE_GAMES,
    Component: GamesPage,
  },
]);

export { router };
