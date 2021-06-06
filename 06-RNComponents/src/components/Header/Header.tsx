import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './HeaderStyles';

interface Props {
  text: string;
}

export const Header = ({ text }: Props) => {
  const styles = useStyles();

  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
