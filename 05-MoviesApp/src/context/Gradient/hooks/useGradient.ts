import { useContext } from 'react';
import { GradientContext } from '../GradientContext';

export const useGradient = () => useContext(GradientContext);
