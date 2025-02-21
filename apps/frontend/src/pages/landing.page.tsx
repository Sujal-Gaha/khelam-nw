import { Container, Button } from "@libs/components";
import { Link } from "react-router-dom";
import { _FULL_ROUTES } from "../app/routes";
import { motion } from "framer-motion";
import { Gamepad2, Users, Trophy, Sparkles, ArrowRight } from "lucide-react";

const getLandingPageFramerVariants = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return { containerVariants, itemVariants };
};

const MainSection = () => {
  const { containerVariants, itemVariants } = getLandingPageFramerVariants();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 pb-12">
      <Container>
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Khelam Nw
            </motion.h1>
            <motion.p className="text-xl mb-8 text-muted-foreground" variants={itemVariants}>
              Discover and play a variety of exciting mini-games in one place!
            </motion.p>
            <motion.div className="space-x-4" variants={itemVariants}>
              <Button asChild size="lg" className="animate-shimmer">
                <Link to={_FULL_ROUTES.BASE_GAMES}>
                  Start Playing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="hidden lg:block">
            <motion.img
              src="https://img.freepik.com/free-vector/gamers-using-different-devices-playing-mobile-phone-tablet-laptop-console-cartoon-illustration_74855-14380.jpg"
              alt="Gaming Illustration"
              className="rounded-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

const FeaturesSection = () => {
  const { containerVariants, itemVariants } = getLandingPageFramerVariants();

  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Multiple Games",
      description: "Access a wide variety of exciting mini-games all in one place",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multiplayer",
      description: "Challenge your friends and play together in real-time",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Leaderboards",
      description: "Compete globally and climb the rankings",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Daily Rewards",
      description: "Login daily to earn special rewards and bonuses",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Why Choose Us?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            Experience the best gaming features all in one platform
          </motion.p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-6 rounded-lg shadow-lg border cursor-pointer"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const PopularGamesSection = () => {
  const { containerVariants, itemVariants } = getLandingPageFramerVariants();

  const popularGames = [
    { title: "Puzzle Master", players: "10k+", image: "/placeholder.svg?height=200&width=300" },
    { title: "Speed Racing", players: "8k+", image: "/placeholder.svg?height=200&width=300" },
    { title: "Word Challenge", players: "5k+", image: "/placeholder.svg?height=200&width=300" },
  ];

  return (
    <section className="py-16">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
            Popular Games
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGames.map((game, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt={game.title}
                  className="w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-foreground/80 mb-2">{game.title}</h3>
                  <p className="text-foreground/80">{game.players} Active Players</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

const CTASection = () => {
  const { containerVariants, itemVariants } = getLandingPageFramerVariants();

  return (
    <section className="py-16 bg-primary">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Playing?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 text-primary-foreground/80">
            Join thousands of players and start your gaming journey today!
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
              <Link to={_FULL_ROUTES.BASE_GAMES} className="flex items-center">
                Explore Games <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <MainSection />
        <FeaturesSection />
        <PopularGamesSection />
        <CTASection />
      </main>
    </div>
  );
};
