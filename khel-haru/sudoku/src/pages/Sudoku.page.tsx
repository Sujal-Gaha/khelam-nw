import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@libs/components";

export enum DifficultyEnum {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export const SudokuPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyEnum>(DifficultyEnum.MEDIUM);

  const difficulties = [DifficultyEnum.EASY, DifficultyEnum.MEDIUM, DifficultyEnum.HARD] as const;

  return (
    <main className="w-full h-screen flex items-center justify-center -mt-[140px]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to Sudoku</CardTitle>
          <CardDescription className="text-center">Select a difficulty level to start playing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <RadioGroup
              value={selectedDifficulty}
              onValueChange={(value: DifficultyEnum) => setSelectedDifficulty(value)}
              className="grid gap-4"
            >
              {difficulties.map((level) => (
                <div key={level} className="flex items-center">
                  <RadioGroupItem value={level} id={level} className="peer sr-only" />
                  <Label
                    htmlFor={level}
                    className="flex flex-1 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-MEDIUM capitalize">{level}</span>
                      <span className="text-sm text-muted-foreground">
                        {level === "EASY"
                          ? "For beginners, fewer empty cells"
                          : level === "MEDIUM"
                          ? "Balanced challenge"
                          : "For experts, many empty cells"}
                      </span>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" onClick={() => null}>
            Start Game
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};
