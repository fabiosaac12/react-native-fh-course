import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Fab title="+1" position="bl" onPress={() => setCounter(counter + 1)} />
      <Fab title="-1" position="br" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
