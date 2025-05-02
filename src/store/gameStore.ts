import { create } from 'zustand';

interface GameState {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  isAnswerSubmitted: boolean;
  finalPrize: number;
  isGameWon: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  setSelectedAnswer: (answer: string | null) => void;
  setIsAnswerSubmitted: (submitted: boolean) => void;
  setFinalPrize: (prize: number) => void;
  setIsGameWon: (won: boolean) => void;
  resetGame: () => void;
}

const useGameStore = create<GameState>(set => ({
  currentQuestionIndex: 0,
  selectedAnswer: null,
  isAnswerSubmitted: false,
  finalPrize: 0,
  isGameWon: false,
  setCurrentQuestionIndex: index => set({ currentQuestionIndex: index }),
  setSelectedAnswer: answer => set({ selectedAnswer: answer }),
  setIsAnswerSubmitted: submitted => set({ isAnswerSubmitted: submitted }),
  setFinalPrize: prize => set({ finalPrize: prize }),
  setIsGameWon: won => set({ isGameWon: won }),
  resetGame: () =>
    set({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswerSubmitted: false,
      finalPrize: 0,
      isGameWon: false,
    }),
}));

export default useGameStore;
