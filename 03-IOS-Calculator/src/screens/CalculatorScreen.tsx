import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Button} from '../components/Button';
import {operators} from '../models';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    prevResult,
    result,
    clean,
    switchSign,
    del,
    initOperation,
    addNumber,
    equal,
    addZero,
    addPoint,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space} />
      <View>
        {!!prevResult && <Text style={styles.prevResult}>{prevResult}</Text>}
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
          {result}
        </Text>
      </View>
      <View style={styles.row}>
        <Button onPress={clean} bg="#9B9B9B" color="black">
          C
        </Button>
        <Button onPress={switchSign} bg="#9B9B9B" color="black">
          +/-
        </Button>
        <Button onPress={del} bg="#9B9B9B" color="black">
          del
        </Button>
        <Button onPress={() => initOperation(operators.division)} bg="#FF9427">
          /
        </Button>
      </View>

      <View style={styles.row}>
        {['7', '8', '9'].map(n => (
          <Button onPress={() => addNumber(n)} key={n}>
            {n}
          </Button>
        ))}
        <Button
          onPress={() => initOperation(operators.multiplication)}
          bg="#FF9427">
          X
        </Button>
      </View>

      <View style={styles.row}>
        {['4', '5', '6'].map(n => (
          <Button onPress={() => addNumber(n)} key={n}>
            {n}
          </Button>
        ))}
        <Button
          onPress={() => initOperation(operators.substraction)}
          bg="#FF9427">
          -
        </Button>
      </View>

      <View style={styles.row}>
        {['1', '2', '3'].map(n => (
          <Button onPress={() => addNumber(n)} key={n}>
            {n}
          </Button>
        ))}
        <Button onPress={() => initOperation(operators.sum)} bg="#FF9427">
          +
        </Button>
      </View>

      <View style={styles.row}>
        <Button onPress={addZero} size="large">
          0
        </Button>
        <Button onPress={addPoint}>.</Button>
        <Button onPress={equal} bg="#FF9427">
          =
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  space: {
    flex: 1,
  },
  prevResult: {
    textAlign: 'right',
    fontSize: 37,
    color: '#ffffff50',
    marginRight: 22,
  },
  result: {
    textAlign: 'right',
    fontSize: 60,
    color: 'white',
    marginRight: 22,
  },
  row: {
    flexDirection: 'row',
    marginTop: 18,
    height: 80,
    justifyContent: 'space-evenly',
  },
});
