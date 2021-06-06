import React from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { StyleSheet, View, Button, Animated, Easing } from 'react-native';
import { Header } from '../../components/Header';
import { useAnimation } from '../../hooks/useAnimation';
import { useTheme } from '../../context/Theme';

export const FirstAnimationScreen = () => {
  const styles = useStyles();
  const [opacity, fade] = useAnimation(0);
  const [top, move] = useAnimation(-300);

  const fadeIn = () =>
    fade({ toValue: 1, duration: 400, useNativeDriver: true }).start(() =>
      move({
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start(),
    );

  const fadeOut = () =>
    fade({ toValue: 0, duration: 400, useNativeDriver: true }).start(() =>
      move({ toValue: -300, duration: 0, useNativeDriver: true }).start(),
    );

  return (
    <ScreenContainer scroll={false}>
      <Header text="First Animation" />
      <View style={styles.container}>
        <Animated.View
          style={{ ...styles.box, opacity, transform: [{ translateY: top }] }}
        />
      </View>
      <Button color={styles.button.color} title="Fade In" onPress={fadeIn} />
      <Button color={styles.button.color} title="Fade Out" onPress={fadeOut} />
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
    button: {
      color: colors.primary,
    },
  });
};
