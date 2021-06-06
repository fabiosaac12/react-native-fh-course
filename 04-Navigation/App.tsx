import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { AuthProvider } from './src/context/AuthProvider';

const App: FC = () => (
  <NavigationContainer>
    <AuthProvider>
      <DrawerNavigator />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
