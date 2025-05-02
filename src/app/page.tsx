// 'use client';

// import { useState } from 'react';
// import Game from '@/components/Game';
// import { gameConfig } from '@/config/gameConfig';
import styles from './page.module.css';
// import { useRouter } from 'next/navigation';
import StartScreen from '@/components/StartScreen';
// import GameOver from '@/components/GameOver';

const Home = () => {
  // const [gameStarted, setGameStarted] = useState(false);
  // const [gameEnded, setGameEnded] = useState(false);
  // const [finalPrize, setFinalPrize] = useState(0);
  // const router = useRouter();
  //
  // const handleGameEnd = (prize: number) => {
  //   setGameEnded(true);
  //   setFinalPrize(prize);
  // };

  // const handleStartGame = () => {
  //   setGameStarted(true);
  // };
  //
  // const handlePlayAgain = () => {
  //
  //   setGameEnded(false);
  //   setFinalPrize(0);
  //   setGameStarted(true);
  // };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/*{gameStarted ? (*/}
        {/*  <Game questions={gameConfig} onGameEnd={handleGameEnd} />*/}
        {/*) : (*/}
        {/*  //     gameEnded ? (*/}
        {/*  //   // <GameOver finalPrize={finalPrize} onPlayAgain={handlePlayAgain} />*/}
        {/*  // ) :*/}
        <StartScreen />
        {/*)}*/}
      </main>
    </div>
  );
};

export default Home;
