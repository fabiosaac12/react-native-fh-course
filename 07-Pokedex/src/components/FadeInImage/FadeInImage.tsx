import React from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import { View, Animated, ImageProps } from 'react-native';

interface Props extends ImageProps {}

export const FadeInImage = (props: Props) => {
  const [opacity, fade] = useAnimation(0);

  const fadeIn = () =>
    fade({ toValue: 1, duration: 300, useNativeDriver: true }).start();

  return (
    <View>
      <Animated.Image
        {...props}
        style={{ ...((props.style || {}) as object), opacity }}
        onLoadEnd={() => fadeIn()}
      />
    </View>
  );
};
