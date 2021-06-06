import { useRef } from 'react';
import { Animated } from 'react-native';

type Animate = (
  config: Animated.TimingAnimationConfig,
) => Animated.CompositeAnimation;

export const useAnimation = (
  initialValue: number,
): [Animated.Value, Animate] => {
  const value = useRef(new Animated.Value(initialValue)).current;

  const animate: Animate = config => Animated.timing(value, config);

  return [value, animate];
};
