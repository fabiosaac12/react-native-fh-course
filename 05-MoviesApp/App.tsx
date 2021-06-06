import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GradientProvider } from './src/context/Gradient';

const App = () => (
  <NavigationContainer>
    <GradientProvider>
      <StackNavigator />
    </GradientProvider>
  </NavigationContainer>
);

export default App;
