'use client';

import React, { useState } from 'react';
import useGameStore from '@/store/gameStore';
import { Question, prizeStructure } from '@/config/gameConfig';
import QuestionSection from './QuestionSection';
import ProgressSection from './ProgressSection';

interface GameProps {
  questions: Question[];
  onGameEnd: (prize: number, isWon: boolean) => void;
}

const Game: React.FC<GameProps> = ({ questions, onGameEnd }) => {
  const {
    currentQuestionIndex,
    selectedAnswer,
    isAnswerSubmitted,
    setCurrentQuestionIndex,
    setSelectedAnswer,
    setIsAnswerSubmitted,
  } = useGameStore();

  const [isPrizeSectionVisible, setIsPrizeSectionVisible] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(answerId);

    setTimeout(() => {
      setIsAnswerSubmitted(true);
      const selectedAnswerObj = currentQuestion.answers.find(a => a.id === answerId);
      const isCorrect = selectedAnswerObj?.isCorrect || false;

      if (!isCorrect) {
        const prizeIndex = Math.max(0, currentQuestionIndex - 1);
        setTimeout(() => {
          onGameEnd(prizeStructure[prizeIndex], false);
        }, 2000);

        return;
      }

      if (isLastQuestion) {
        setTimeout(() => {
          onGameEnd(prizeStructure[prizeStructure.length - 1], true);
        }, 2000);

        return;
      }
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="game-container">
      <QuestionSection
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        isAnswerSubmitted={isAnswerSubmitted}
        onAnswerSelect={handleAnswerSelect}
        isPrizeSectionVisible={isPrizeSectionVisible}
        onTogglePrizeSection={() => setIsPrizeSectionVisible(!isPrizeSectionVisible)}
      />
      <ProgressSection
        currentQuestionIndex={currentQuestionIndex}
        isVisible={isPrizeSectionVisible}
        onClose={() => setIsPrizeSectionVisible(false)}
      />
    </div>
  );
};

export default Game;
