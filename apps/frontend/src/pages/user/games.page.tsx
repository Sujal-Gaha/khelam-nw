import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@libs/components";
import { _FULL_ROUTES } from "../../app/routes";
import { Link } from "react-router-dom";

type Game = {
  id: number;
  title: string;
  description: string;
  url: string;
  isDisabled: boolean;
};

const games: Game[] = [
  {
    id: 1,
    title: "Tic Tac Toe",
    description: "Play a classic game of Tic Tac Toe!",
    url: _FULL_ROUTES.TICTACTOE,
    isDisabled: false,
  },
  {
    id: 2,
    title: "Memory Game",
    description: "Challenge your memory with this fun game!",
    url: _FULL_ROUTES.MEMORYGAME,
    isDisabled: false,
  },
  {
    id: 3,
    title: "Chess",
    description: "Engage in a strategic game of chess!",
    url: _FULL_ROUTES.CHESS,
    isDisabled: true,
  },
  {
    id: 4,
    title: "Tetris",
    description: "Play a fun game of falling blocks",
    url: _FULL_ROUTES.TETRIS,
    isDisabled: false,
  },
  {
    id: 5,
    title: "Sudoku",
    description: "Test your brain with numbers in grid",
    url: _FULL_ROUTES.SUDOKU,
    isDisabled: false,
  },
];

const GameCard = (game: Game) => {
  if (game.isDisabled) {
    return (
      <Card key={game.id}>
        <CardHeader>
          <CardTitle>{game.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{game.description}</p>
        </CardContent>
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger disabled>
                <Button disabled>Play Now</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This game is currently under maintenance.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card key={game.id}>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{game.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={game.url}>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const GamesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Container>
          <h1 className="text-3xl font-bold my-8">Choose Your Game</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard
                id={game.id}
                description={game.description}
                isDisabled={game.isDisabled}
                title={game.title}
                url={game.url}
              />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
};
