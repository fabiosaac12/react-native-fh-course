import React, { FC, useState } from 'react';
import { GradientContext } from './GradientContext';
import { ImageColors } from '../../models/ImageColors';

export const GradientProvider: FC = ({ children }) => {
  const [currentColors, setCurrentColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const contextValue = {
    currentColors,
    previousColors,
    setCurrentColors,
    setPreviousColors
  };

  return (
    <GradientContext.Provider value={contextValue}>
      {children}
    </GradientContext.Provider>
  );
};
