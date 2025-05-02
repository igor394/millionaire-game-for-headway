'use client';

import Logo from '@/assets/progress.svg';
import { prizeStructure } from '@/config/gameConfig';
import Image from 'next/image';
import React from 'react';

interface ProgressSectionProps {
  currentQuestionIndex: number;
  isVisible: boolean;
  onClose: () => void;
}

const ProgressSection = ({ currentQuestionIndex, isVisible, onClose }: ProgressSectionProps) => {
  const formatPrize = (prize: number) => {
    return prize?.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className={`progress-section ${isVisible ? 'visible' : ''}`}>
      <button className="close-button" onClick={onClose}>
        <Image src={'close.svg'} alt={'close.svg'} width={24} height={24} />
      </button>
      <div className="progress-ladder">
        {prizeStructure.map((prize, index) => (
          <div key={prize} className={'progress-level-wrapper'}>
            <div
              className={`progress-level ${
                index === currentQuestionIndex ? 'current' : ''
              } ${index < currentQuestionIndex ? 'passed' : ''}`}
            >
              <span className="progress-level-content">${formatPrize(prize)}</span>
              <Logo />
            </div>
            <div
              className={`dash ${index === currentQuestionIndex ? 'current' : ''} ${index < currentQuestionIndex ? 'passed' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
