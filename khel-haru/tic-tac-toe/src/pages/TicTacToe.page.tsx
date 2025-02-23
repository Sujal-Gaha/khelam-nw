import {
  Button,
  Container,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ToastDescription,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@libs/components";
import { motion } from "framer-motion";
import { Bot, Users, Copy, Share2, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

enum BotDifficultyEnum {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

type BotDifficulty = "easy" | "medium" | "hard";

const SinglePlayerCard = () => {
  const [botDifficulty, setBotDifficulty] = useState<BotDifficulty>("easy");

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          Play with Bot
        </CardTitle>
        <CardDescription>Challenge our AI in different difficulty levels</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Difficulty</label>
          <Select
            value={botDifficulty}
            onValueChange={(value) => {
              setBotDifficulty(value as BotDifficulty);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={BotDifficultyEnum.EASY}>Easy</SelectItem>
              <SelectItem value={BotDifficultyEnum.MEDIUM}>Medium</SelectItem>
              <SelectItem value={BotDifficultyEnum.HARD}>Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" size="lg">
          Start Game
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
      <div className="absolute top-0 right-0 p-3">
        <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Single Player</div>
      </div>
    </Card>
  );
};

const PlayerVsPlayerCard = () => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          Player vs Player
        </CardTitle>
        <CardDescription>Challenge your friend to a game</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" size="lg">
          Start Game
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
      <div className="absolute top-0 right-0 p-3">
        <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Player vs Player</div>
      </div>
    </Card>
  );
};

const MultiplayerCard = () => {
  const [inviteLink, setInviteLink] = useState("");

  const generateInviteLink = () => {
    const uniqueCode = Math.random().toString(36).substring(7);
    const link = `${window.location.origin}/tictactoe/room/${uniqueCode}`;
    setInviteLink(link);
    return link;
  };

  const copyInviteLink = async () => {
    const link = inviteLink || generateInviteLink();
    await navigator.clipboard.writeText(link);
    ToastDescription({ message: "Link Copied!", description: "Share this link with your friend to start playing." });
  };

  const shareInviteLink = async () => {
    const link = inviteLink || generateInviteLink();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join my TicTacToe game!",
          text: "Click this link to join my TicTacToe game:",
          url: link,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyInviteLink();
    }
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          Play with Friend
        </CardTitle>
        <CardDescription>Create a game and invite your friend to play</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Invite your friends</label>
          <div className="flex gap-2">
            <Input value={inviteLink} placeholder="Generate link to invite friend..." readOnly />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="icon" onClick={copyInviteLink} className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" size="icon" onClick={shareInviteLink} className="shrink-0">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={() => {
            if (!inviteLink) {
              generateInviteLink();
            }
          }}
        >
          Create Game
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
      <div className="absolute top-0 right-0 p-3">
        <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Multiplayer</div>
      </div>
    </Card>
  );
};

export const TicTacToePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container className="py-8 md:py-12 lg:py-16 xl:py-32 2xl:py-36">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-10">
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl font-bold mb-4">TicTacToe</h1>
          <p className="text-muted-foreground text-lg">Choose your game mode and start playing!</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SinglePlayerCard />
          <MultiplayerCard />
          <PlayerVsPlayerCard />
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-md mx-auto text-center space-y-4">
          <h2 className="text-lg font-semibold">Have an invite code?</h2>
          <div className="flex gap-2">
            <Input placeholder="Enter game code or paste invite link" />
            <Button>Join</Button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};
