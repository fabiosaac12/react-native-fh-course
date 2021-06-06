import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import {ThemeProvider} from './src/context/Theme';

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};

export default App;
