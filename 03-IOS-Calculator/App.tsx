import React from 'react';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <CalculatorScreen />
    </>
  );
};

export default App;
