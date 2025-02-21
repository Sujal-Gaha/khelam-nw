import { LandingPage } from "../pages/landing.page";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { _FULL_ROUTES } from "./routes";
import { GamesPage } from "../pages/user/games.page";
import { UserNavbarComponent } from "../pages/user/user.navbar.component";
import { UserFooterComponent } from "../pages/user/user.footer.component";

export const router = createBrowserRouter([
  {
    path: _FULL_ROUTES.HOME,
    element: (
      <>
        <UserNavbarComponent />
        <Outlet />
        <UserFooterComponent />
      </>
    ),
    children: [
      {
        path: _FULL_ROUTES.HOME,
        element: <LandingPage />,
      },
      {
        path: _FULL_ROUTES.BASE_GAMES,
        element: <GamesPage />,
      },
    ],
  },
]);
