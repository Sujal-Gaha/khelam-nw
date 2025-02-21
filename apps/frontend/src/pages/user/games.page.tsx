import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Container } from "@libs/components";

const games = [
  { id: 1, title: "Tic Tac Toe", description: "Play a classic game of Tic Tac Toe!" },
  { id: 2, title: "Memory Game", description: "Challenge your memory with this fun game!" },
  { id: 3, title: "Chess", description: "Engage in a strategic game of chess!" },
];

export const GamesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <Container>
          <h1 className="text-3xl font-bold my-8">Choose Your Game</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id}>
                <CardHeader>
                  <CardTitle>{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{game.description}</p>
                </CardContent>
                <CardFooter>
                  <Button>Play Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
