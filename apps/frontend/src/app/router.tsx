import { LandingPage } from "../pages/landing.page";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { _FULL_ROUTES } from "./routes";
import { GamesPage } from "../pages/user/games.page";
import { UserNavbarComponent } from "../pages/user/user.navbar.component";
import { UserFooterComponent } from "../pages/user/user.footer.component";
import { PlayerVsPlayerMode, TicTacToePage } from "@khel-haru/tic-tac-toe";
import { TetrisPage } from "@khel-haru/tetris";
import { SudokuPage } from "@khel-haru/sudoku";
import { MemoryGamePage } from "@khel-haru/memory-game";

const tetrisRouter: RouteObject[] = [
  {
    path: _FULL_ROUTES.TETRIS,
    element: <TetrisPage />,
  },
];

const sudokuRouter: RouteObject[] = [
  {
    path: _FULL_ROUTES.SUDOKU,
    element: <SudokuPage />,
  },
];

const memoryGameRouter: RouteObject[] = [
  {
    path: _FULL_ROUTES.MEMORYGAME,
    element: <MemoryGamePage />,
  },
];

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
      {
        path: _FULL_ROUTES.TICTACTOE,
        element: <TicTacToePage />,
      },
      {
        path: _FULL_ROUTES.PLAYER_VS_PLAYER_MODE,
        element: <PlayerVsPlayerMode />,
      },
      ...memoryGameRouter,
      ...tetrisRouter,
      ...sudokuRouter,
    ],
  },
]);
