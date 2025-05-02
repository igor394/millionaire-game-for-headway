'use client';

import { useSearchParams } from 'next/navigation';
import EndScreen from '@/components/EndScreen';
import useGameStore from '@/store/gameStore';

const FinalPage = () => {
  const { currentQuestionIndex } = useGameStore();
  const searchParams = useSearchParams();
  const prize = Number(searchParams.get('prize'));
  const isWon = searchParams.get('won') === 'true';

  return (
    <main className="main-container">
      <EndScreen prize={currentQuestionIndex === 0 ? 0 : prize} isWon={isWon} />
    </main>
  );
};

export default FinalPage;
