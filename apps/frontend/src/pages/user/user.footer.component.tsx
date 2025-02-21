import { Container } from "@libs/components";

export const UserFooterComponent = () => {
  return (
    <footer className="bg-background border-t py-4 md:py-6">
      <Container>
        <div className="text-center text-sm md:text-base text-muted-foreground">
          © {new Date().getFullYear()} Khelam Nw. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
