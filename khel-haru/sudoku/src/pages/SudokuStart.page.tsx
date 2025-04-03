import { useLocation, useNavigate } from "react-router-dom";
import { DifficultyEnum } from "./Sudoku.page";
import {
  Alert,
  AlertDescription,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@libs/components";
import { AlertCircle, ArrowLeft, CheckCircle, RotateCcw, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { addSeconds, format } from "date-fns";

export const SudokuStartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const searchParams = new URLSearchParams(location.search);

  const difficulty = searchParams.get("difficulty") as DifficultyEnum;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const onStartGameClicked = () => {
    setIsRunning(true);
  };

  const handleCheck = () => null;
  const handleSolve = () => null;

  const gameCompleted = false;

  return (
    <main className="h-screen w-full -mt-36 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="h-8 w-8 p-0">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to lobby</span>
              </Button>
              <CardTitle className="text-xl capitalize">{difficulty} Difficulty</CardTitle>
              <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                <Timer className="h-4 w-4" />
                <span className="font-mono">{format(addSeconds(new Date(0, 0), time), "mm:ss")}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">Sudoku Game here</CardContent>
          <CardFooter className="flex flex-col gap-4">
            {message && (
              <Alert variant={message.type === "success" ? "default" : "destructive"} className="w-full">
                {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1" onClick={onStartGameClicked}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Start Game
              </Button>
              <Button className="flex-1" onClick={handleCheck} disabled={gameCompleted}>
                Check Solution
              </Button>
            </div>

            {!gameCompleted && (
              <Button variant="secondary" className="w-full" onClick={handleSolve}>
                Solve Puzzle
              </Button>
            )}

            {gameCompleted && (
              <Button className="w-full" onClick={() => navigate(-1)}>
                Return to Lobby
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};
