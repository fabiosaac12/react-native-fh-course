import React from 'react';
import {StackNavigator} from './src/navigation/StackNavigator';
import {AuthProvider} from './src/context/Auth';
import {ProductsProvider} from './src/context/Products';

const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <StackNavigator />
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
