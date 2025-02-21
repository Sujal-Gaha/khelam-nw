import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Container,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useTheme,
} from "@libs/components";
import { Link } from "react-router-dom";
import { _FULL_ROUTES } from "../../app/routes";
import { LogIn, LogOut, Moon, Settings, Sun } from "lucide-react";
export const UserNavbarComponent = () => {
  const { theme, setTheme } = useTheme();
  const isLoggedIn = false;

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <Container>
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link to={_FULL_ROUTES.HOME} className="font-bold text-lg md:text-xl truncate">
            Khelam Nw
          </Link>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to={_FULL_ROUTES.BASE_GAMES}>Games</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">username</p>
                    <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                  {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  <span>{theme === "light" ? "Dark" : "Light"} mode</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {isLoggedIn ? (
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign in</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </Container>
    </header>
  );
};
