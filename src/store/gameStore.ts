import { create } from 'zustand';

interface GameState {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  isAnswerSubmitted: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  setSelectedAnswer: (answer: string | null) => void;
  setIsAnswerSubmitted: (submitted: boolean) => void;
  resetGame: () => void;
}

const useGameStore = create<GameState>(set => ({
  currentQuestionIndex: 0,
  selectedAnswer: null,
  isAnswerSubmitted: false,
  finalPrize: 0,
  setCurrentQuestionIndex: index => set({ currentQuestionIndex: index }),
  setSelectedAnswer: answer => set({ selectedAnswer: answer }),
  setIsAnswerSubmitted: submitted => set({ isAnswerSubmitted: submitted }),
  resetGame: () =>
    set({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswerSubmitted: false,
    }),
}));

export default useGameStore;
