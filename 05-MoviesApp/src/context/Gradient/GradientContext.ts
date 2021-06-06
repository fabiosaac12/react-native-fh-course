import { createContext } from 'react';
import { ImageColors } from '../../models/ImageColors';

interface ContextProps {
  currentColors: ImageColors;
  previousColors: ImageColors;
  setCurrentColors: (colors: ImageColors) => void;
  setPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);
