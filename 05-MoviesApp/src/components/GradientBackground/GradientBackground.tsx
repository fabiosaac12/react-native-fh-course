import React, { FC, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useStyles } from './GradientBackgroundStyles';
import { useGradient } from '../../context/Gradient';
import { useFade } from '../../hooks/useFade';

export const GradientBackground: FC = ({ children }) => {
  const styles = useStyles();

  const { currentColors, previousColors, setPreviousColors } = useGradient();
  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPreviousColors(currentColors);
      fadeOut();
    });
  }, [currentColors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[...Object.values(previousColors), 'white']}
        start={{ x: 0.2, y: 0.25 }}
        end={{ x: 0.7, y: 0.7 }}
      />

      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          style={styles.gradient}
          colors={[...Object.values(currentColors), 'white']}
          start={{ x: 0.2, y: 0.25 }}
          end={{ x: 0.7, y: 0.7 }}
        />
      </Animated.View>

      {children}
    </View>
  );
};
