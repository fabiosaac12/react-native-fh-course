import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import { PermissionsProvider } from './src/context/Permissions';

const App = () => (
  <PermissionsProvider>
    <StackNavigator />
  </PermissionsProvider>
);

export default App;
