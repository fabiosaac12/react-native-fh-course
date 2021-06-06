import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  bg?: string;
  color?: string;
  size?: string;
  onPress: () => void;
  children: string;
}

export const Button = ({
  children,
  onPress,
  bg = '#2D2D2D',
  color = 'white',
  size = 'normal',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        ...styles.container,
        backgroundColor: bg,
        width: size === 'large' ? 180 : 80,
      }}>
      <Text style={{...styles.text, color}}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
  },
});
