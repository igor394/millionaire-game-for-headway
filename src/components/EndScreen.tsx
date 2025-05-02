'use client';

import { useRouter } from 'next/navigation';
import useGameStore from '@/store/gameStore';
import ContentDecorator from '@/components/ContentDecorator';

interface EndScreenProps {
  prize: number;
  isWon: boolean;
}

const EndScreen = ({ prize, isWon }: EndScreenProps) => {
  const router = useRouter();
  const resetGame = useGameStore(state => state.resetGame);

  const handlePlayAgain = () => {
    resetGame();
    router.push('/');
  };

  return (
    <ContentDecorator
      title={`$${prize?.toLocaleString('en-US') ?? '0'} earned`}
      buttonTitle={'Try again'}
      description={isWon ? 'You`ve won the grand prize of $1,000,000!' : 'Total score:'}
      callBack={handlePlayAgain}
    />
  );
};

export default EndScreen;
