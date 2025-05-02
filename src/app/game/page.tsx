'use client';

import { useRouter } from 'next/navigation';
import Game from '@/components/Game';
import { gameConfig } from '@/config/gameConfig';

const GamePage = () => {
  const router = useRouter();

  const handleGameEnd = (prize: number, isWon: boolean) => {
    router.push(`/final?prize=${prize}&won=${isWon}`);
  };

  return (
    <main className="main-container">
      <Game questions={gameConfig} onGameEnd={handleGameEnd} />
    </main>
  );
};

export default GamePage;
