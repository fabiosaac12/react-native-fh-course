import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../../context/Auth';
import {LoadingScreen} from '../../screens/LoadingScreen';
import {ProductsStack} from '../ProductsStack';
import {AuthStack} from '../AuthStack';

export const StackNavigator = () => {
  const auth = useAuth();

  if (auth.status === 'unavailable') return <LoadingScreen />;

  return (
    <NavigationContainer>
      {auth.status === 'authenticated' ? <ProductsStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
