import ContentDecorator from '@/components/ContentDecorator';

interface GameOverProps {
  finalPrize: number;
  onPlayAgain: () => void;
}

const GameOver = ({ finalPrize = 0, onPlayAgain }: GameOverProps) => {
  return (
    <div className="screen-wrapper">
      <ContentDecorator
        title={`$${finalPrize?.toLocaleString() ?? '0'}`}
        buttonTitle={'Try again'}
        description={'Total score:'}
        callBack={onPlayAgain}
      />
    </div>
    // <div className="end-screen">
    //   <div className="final-prize">
    //     <h3>Total score:</h3>
    //     <p className="progress-amount">${finalPrize?.toLocaleString() ?? '0'}</p>
    //   </div>
    //   <button className="restart-button" onClick={onPlayAgain}>
    //
    //   </button>
    // </div>
  );
};

export default GameOver;
