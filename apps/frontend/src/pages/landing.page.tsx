import { Container, Button } from "@libs/components";
import { Link } from "react-router-dom";
import { _FULL_ROUTES } from "../app/routes";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to={_FULL_ROUTES.HOME} className="font-bold text-xl">
            Khelam Nw
          </Link>
          <nav>
            <Button asChild variant="ghost">
              <Link to={_FULL_ROUTES.BASE_GAMES}>Games</Link>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Khelam Nw. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Khelam Nw</h1>
            <p className="text-xl mb-8">Discover and play a variety of exciting mini-games!</p>
            <Button asChild size="lg">
              <Link to={_FULL_ROUTES.BASE_GAMES}>Explore Games</Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
