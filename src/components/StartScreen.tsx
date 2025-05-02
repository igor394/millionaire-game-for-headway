'use client';

import { useRouter } from 'next/navigation';
import ContentDecorator from '@/components/ContentDecorator';
import { useCallback } from 'react';

const StartScreen = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/game');
  }, [router]);

  return (
    <ContentDecorator
      title={'Who wants to be a millionaire?'}
      buttonTitle={'Start'}
      callBack={handleClick}
    />
  );
};

export default StartScreen;
