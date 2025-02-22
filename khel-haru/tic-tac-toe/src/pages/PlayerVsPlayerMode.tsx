import { Button } from "@libs/components";
import { PlayerScoreCount } from "../components/player-count-score";
import { useBoardFeatures } from "../hooks/useBoardFeatures";
import { useDrawModal } from "../hooks/useDrawModal";
import { Board } from "../modules/board";

export const PlayerVsPlayerMode = () => {
  const { tiles, playAgainFn, resetBoardFn, handleTileClickedFn, players, isDraw, PlayerWonModalComponent } =
    useBoardFeatures();

  const { openDrawModal, DrawModalComponent } = useDrawModal({ playAgainFn });

  if (isDraw) {
    setTimeout(() => {
      console.log("Draw vayo");
      openDrawModal();
    }, 500);
  }

  return (
    <main className="flex items-center justify-center mt-60">
      <section className="w-[448px] h-[496px] rounded-lg p-6 shadow-2xl shadow-[#E11D48] flex flex-col gap-6">
        <PlayerScoreCount players={players} />
        <Board tiles={tiles} handleTileClickedFn={handleTileClickedFn} />
        <div className="flex items-center justify-between w-full">
          <Button variant="default" size="lg">
            Edit Players
          </Button>
          <Button variant="outline" size="lg" onClick={playAgainFn}>
            Play again
          </Button>
          <Button variant="default" size="lg" onClick={resetBoardFn}>
            Reset
          </Button>
        </div>
      </section>
      {PlayerWonModalComponent}
      {DrawModalComponent}
    </main>
  );
};
