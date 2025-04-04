import { Tile } from "../constants/tile";
import { useEffect, useState } from "react";
import { tiles as tilesData } from "../constants/tile";
import { winningConditions } from "../constants/winningConditions";
import { playersData, Player } from "../constants/player";
import { usePlayerWonModal } from "./usePlayerWonModal";

export type TTurn = "player_one" | "player_two";

export const useBoardFeatures = () => {
  const [turn, setTurn] = useState<TTurn>("player_one");
  const [tiles, setTiles] = useState<Tile[]>(tilesData);
  const [isPlayable, setIsPlayable] = useState(true);

  const [selectedTileP1, setSelectedTileP1] = useState<number[]>([]);
  const [selectedTileP2, setSelectedTileP2] = useState<number[]>([]);

  const [players, setPlayers] = useState<Player[]>(playersData);

  const [hasAPlayerWon, setHasAPlayerWon] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const isPlayerOneTurn = turn === "player_one";
  const isPlayerTwoTurn = turn === "player_two";

  const isAllTilesSelected = tiles.every((tile) => tile.isSelected);

  const playAgainFn = () => {
    setIsDraw(false);
    setTurn("player_one");

    const resetTiles = [...tiles];
    resetTiles.forEach((tile) => {
      tile.isSelected = false;
      tile.selectedBy = "";
    });
    setTiles(resetTiles);

    setIsPlayable(true);

    setSelectedTileP1([]);
    setSelectedTileP2([]);

    setHasAPlayerWon(false);
  };

  const { PlayerWonModalComponent, openPlayerWonModal, setPlayer } = usePlayerWonModal({ playAgainFn });

  const resetBoardFn = () => {
    playAgainFn();

    const resetPlayers = [...players];
    resetPlayers.forEach((player) => (player.score = 0));
    setPlayers(resetPlayers);
  };

  const toggleTurnFn = () => setTurn(isPlayerOneTurn ? "player_two" : "player_one");

  const setTileSelectedBy = (id: number) => {
    const updatedTiles = [...tiles];

    updatedTiles.forEach((tile, index) => {
      if (tile.id === id) {
        updatedTiles[index].selectedBy = turn;
        updatedTiles[index].isSelected = true;
      }
    });

    setTiles(updatedTiles);
  };

  const setSelectedTile = (id: number) => {
    if (isPlayerOneTurn) {
      const updatedSelectedTileP1 = [...selectedTileP1];
      updatedSelectedTileP1.push(id);
      setSelectedTileP1(updatedSelectedTileP1);

      checkWinningCondition(updatedSelectedTileP1, "player_one");
    }

    if (isPlayerTwoTurn) {
      const updatedSelectedTileP2 = [...selectedTileP2];
      updatedSelectedTileP2.push(id);
      setSelectedTileP2(updatedSelectedTileP2);

      checkWinningCondition(updatedSelectedTileP2, "player_two");
    }
  };

  const checkWinningCondition = (selectedTiles: number[], player: TTurn) => {
    winningConditions.forEach((condition) => {
      const isWinning = condition.every((tile) => selectedTiles.includes(tile) && selectedTiles.length > 2);

      if (isWinning) {
        setIsPlayable(false);
        setHasAPlayerWon(true);
        setTimeout(() => {
          const updatedPlayers = [...players];

          if (player === "player_one") {
            updatedPlayers[0].score++;
            setPlayers(updatedPlayers);
            setPlayer(players[0].name);
            openPlayerWonModal();
          }

          if (player === "player_two") {
            updatedPlayers[1].score++;
            setPlayers(updatedPlayers);
            setPlayer(players[1].name);
            openPlayerWonModal();
          }
        }, 500);
      }
    });
  };

  const handleTileClickedFn = (id: number) => {
    if (isPlayable) {
      toggleTurnFn();
      setTileSelectedBy(id);
      setSelectedTile(id);
    }
  };

  useEffect(() => {
    if (isAllTilesSelected && !hasAPlayerWon) {
      setIsDraw(true);
      setIsPlayable(false);
    }
  }, [isAllTilesSelected, hasAPlayerWon]);

  return {
    players,
    tiles,
    isDraw,
    playAgainFn,
    resetBoardFn,
    handleTileClickedFn,
    PlayerWonModalComponent,
  };
};
