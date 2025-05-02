import { Suspense } from 'react';
import GameOver from '@/components/GameOver';

export default function FinalPage() {
  return (
    <Suspense fallback={null}>
      <GameOver />
    </Suspense>
  );
}
