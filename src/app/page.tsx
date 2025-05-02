import styles from './page.module.css';

import StartScreen from '@/components/StartScreen';

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StartScreen />
      </main>
    </div>
  );
};

export default Home;
