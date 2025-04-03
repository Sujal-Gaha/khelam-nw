const AUTH_PATHS = {
  BASE: "/auth",
  LOGIN: "login",
  SIGNUP: "signup",
  VERIFY_EMAIL: "verify-email",
  FORGOT_PASSWORD: "forgot-password",
};

const ADMIN_PATHS = {
  BASE: "/admin",
  DASHBOARD: "dashboard",
  GAME: "game",
  USER: "user",
};

const GAME_PATHS = {
  BASE: "/games",
  TICTACTOE: "tictactoe",
  MEMORYGAME: "memorygame",
  CHESS: "chess",
  SUDOKU: "sudoku",
  TETRIS: "tetris",
};

const TICTACTOE_PATHS = {
  PLAYER_VS_PLAYER_MODE: "player-vs-player",
  PLAYER_VS_AI_MODE: "player-vs-ai",
  ROOM: "room",
};

export const _ROUTER_NESTED_PATHS = {
  AUTH: {
    BASE: AUTH_PATHS.BASE,
    LOGIN: AUTH_PATHS.LOGIN,
    SIGNUP: AUTH_PATHS.SIGNUP,
    VERIFY_EMAIL: AUTH_PATHS.VERIFY_EMAIL,
    FORGOT_PASSWORD: AUTH_PATHS.FORGOT_PASSWORD,
  },
  ADMIN: {
    BASE: ADMIN_PATHS.BASE,
    DASHBOARD: ADMIN_PATHS.DASHBOARD,
    GAME: ADMIN_PATHS.GAME,
    USER: ADMIN_PATHS.USER,
  },
  GAMES: {
    BASE: GAME_PATHS.BASE,
    TICTACTOE: GAME_PATHS.TICTACTOE,
    MEMORYGAME: GAME_PATHS.MEMORYGAME,
    CHESS: GAME_PATHS.CHESS,
    SUDOKU: GAME_PATHS.SUDOKU,
    TETRIS: GAME_PATHS.TETRIS,
  },
};

const createFullRoutes = () => {
  return {
    HOME: "/",
    DASHBOARD: "/dashboard",
    // Auth
    BASE_AUTH: AUTH_PATHS.BASE,
    LOGIN: `${AUTH_PATHS.BASE}/${AUTH_PATHS.LOGIN}`,
    SIGNUP: `${AUTH_PATHS.BASE}/${AUTH_PATHS.SIGNUP}`,
    VERIFY_EMAIL: `${AUTH_PATHS.BASE}/${AUTH_PATHS.VERIFY_EMAIL}`,
    FORGOT_PASSWORD: `${AUTH_PATHS.BASE}/${AUTH_PATHS.FORGOT_PASSWORD}`,
    RESET_PASSWORD: "/reset-password",
    // Games
    BASE_GAMES: GAME_PATHS.BASE,
    TICTACTOE: `${GAME_PATHS.BASE}/${GAME_PATHS.TICTACTOE}`,
    PLAYER_VS_PLAYER_MODE: `${GAME_PATHS.BASE}/${GAME_PATHS.TICTACTOE}/${TICTACTOE_PATHS.PLAYER_VS_PLAYER_MODE}`,
    PLAYER_VS_AI_MODE: `${GAME_PATHS.BASE}/${GAME_PATHS.TICTACTOE}/${TICTACTOE_PATHS.PLAYER_VS_AI_MODE}`,
    ROOM: `${GAME_PATHS.BASE}/${GAME_PATHS.TICTACTOE}/${TICTACTOE_PATHS.ROOM}/:roomId`,

    MEMORYGAME: `${GAME_PATHS.BASE}/${GAME_PATHS.MEMORYGAME}`,
    CHESS: `${GAME_PATHS.BASE}/${GAME_PATHS.CHESS}`,
    SUDOKU: `${GAME_PATHS.BASE}/${GAME_PATHS.SUDOKU}`,
    TETRIS: `${GAME_PATHS.BASE}/${GAME_PATHS.TETRIS}`,
    // Admin
    BASE_ADMIN: ADMIN_PATHS.BASE,
    ADMIN_DASHBOARD: `${ADMIN_PATHS.BASE}/${ADMIN_PATHS.DASHBOARD}`,
    ADMIN_GAME: `${ADMIN_PATHS.BASE}/${ADMIN_PATHS.GAME}`,
    ADMIN_USER: `${ADMIN_PATHS.BASE}/${ADMIN_PATHS.USER}`,
  };
};

export const _FULL_ROUTES = createFullRoutes();
