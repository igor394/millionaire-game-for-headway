'use client';

import { useRouter } from 'next/navigation';
import Game from '@/components/Game';
import { gameConfig, Question } from '@/config/gameConfig';
import { useEffect, useState } from 'react';
import getShuffled from '@/utils/getShuffled';

const GamePage = () => {
  const router = useRouter();

  const [questionsSet, setQuestionsSet] = useState<Question[]>([]);

  const handleGameEnd = (prize: number, isWon: boolean) => {
    router.push(`/final?prize=${prize}&won=${isWon}`);
  };

  useEffect(() => {
    setQuestionsSet(getShuffled(gameConfig));
  }, []);

  return (
    <main className="main-container">
      {questionsSet.length && <Game questions={questionsSet} onGameEnd={handleGameEnd} />}
    </main>
  );
};

export default GamePage;
