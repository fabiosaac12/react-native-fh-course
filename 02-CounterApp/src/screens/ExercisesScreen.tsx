import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ExercisesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purple} />
      <View style={styles.orange} />
      <View style={styles.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 200,
  },
  purple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  orange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0B23B',
  },
  blue: {
    position: 'relative',
    top: 100,
    left: -200,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
