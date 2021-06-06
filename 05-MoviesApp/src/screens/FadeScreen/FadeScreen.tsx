import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../../hooks/useFade';

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Animated.View
        style={{
          height: 200,
          width: 200,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: 'red',
          opacity,
        }}
      />
      <Button onPress={fadeIn} title="FadeIn" />
      <Button onPress={fadeOut} title="FadeOut" />
    </View>
  );
};
