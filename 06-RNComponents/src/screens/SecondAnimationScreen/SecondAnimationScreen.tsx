import React, { useRef } from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { StyleSheet, View, PanResponder, Animated } from 'react-native';
import { Header } from '../../components/Header';
import { useTheme } from '../../context/Theme';

export const SecondAnimationScreen = () => {
  const styles = useStyles();

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <ScreenContainer scroll={false}>
      <Header text="Second Animation" />
      <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </View>
    </ScreenContainer>
  );
};

const useStyles = () => {
  const {
    theme: { colors },
  } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      borderRadius: 20,
      width: 150,
      height: 150,
      backgroundColor: colors.primary,
    },
  });
};
