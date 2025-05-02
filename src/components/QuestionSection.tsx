'use client';

import Logo from '@/assets/question.svg';
import React from 'react';
import { Question } from '@/config/gameConfig';
import Image from 'next/image';

interface QuestionSectionProps {
  currentQuestion: Question;
  selectedAnswer: string | null;
  isAnswerSubmitted: boolean;
  onAnswerSelect: (answerId: string) => void;
  isPrizeSectionVisible: boolean;
  onTogglePrizeSection: () => void;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  currentQuestion,
  selectedAnswer,
  isAnswerSubmitted,
  onAnswerSelect,
  isPrizeSectionVisible,
  onTogglePrizeSection,
}) => {
  return (
    <div className={`question-section ${isPrizeSectionVisible ? 'hidden' : ''}`}>
      <div className="question-header">
        <h2>{currentQuestion?.text}</h2>
        <button
          className="menu-button"
          onClick={onTogglePrizeSection}
          aria-label={isPrizeSectionVisible ? 'Close prize section' : 'Open prize section'}
        >
          {isPrizeSectionVisible ? (
            <Image src={'close.svg'} alt={'close.svg'} width={24} height={24} />
          ) : (
            <Image src={'burger.svg'} alt={'burger.svg'} width={24} height={24} />
          )}
        </button>
      </div>

      <div className="answers">
        {currentQuestion.answers.map(answer => (
          <div className={'answer-button-container'} key={answer.id}>
            <button
              className={`answer-button ${selectedAnswer === answer.id ? 'selected' : ''} ${
                isAnswerSubmitted
                  ? answer.isCorrect
                    ? 'correct'
                    : selectedAnswer === answer.id
                      ? 'incorrect'
                      : ''
                  : ''
              }`}
              onClick={() => onAnswerSelect(answer.id)}
              disabled={!!selectedAnswer}
            >
              <span className="answer-button-content">
                <p>{answer.id}</p>
                <p>{answer.text}</p>
              </span>
              <Logo />
            </button>

            <div
              className={`dash ${selectedAnswer === answer.id ? 'selected' : ''} ${
                isAnswerSubmitted
                  ? answer.isCorrect
                    ? 'correct'
                    : selectedAnswer === answer.id
                      ? 'incorrect'
                      : ''
                  : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
