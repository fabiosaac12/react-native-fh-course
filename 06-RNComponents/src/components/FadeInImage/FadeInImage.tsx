import React, {useState} from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import { View, Animated, ImageProps, ActivityIndicator } from 'react-native';
import {useTheme} from '../../context/Theme';

interface Props extends ImageProps {}

export const FadeInImage = (props: Props) => {
  const { theme: { colors } } = useTheme();

  const [opacity, fade] = useAnimation(0);
  const [loading, setLoading] = useState(true);

  const fadeIn = () =>
    fade({ toValue: 1, duration: 900, useNativeDriver: true }).start();

  return (
    <View>
      {loading && <ActivityIndicator size={30} color={colors.border} />}
      <Animated.Image
        {...props}
        style={{ ...((props.style || {}) as object), opacity }}
        onLoadEnd={() => {
          fadeIn();
          setLoading(false);
        }}
      />
    </View>
  );
};
