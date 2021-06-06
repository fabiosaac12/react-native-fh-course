import React from 'react';
import { useStyles } from './StatStyles';
import { View, Text } from 'react-native';

interface Props {
  name: string;
  stat: number;
}

export const Stat = ({ name, stat }: Props) => {
  const styles = useStyles({ name });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.stat}>{stat}</Text>
    </View>
  );
};
