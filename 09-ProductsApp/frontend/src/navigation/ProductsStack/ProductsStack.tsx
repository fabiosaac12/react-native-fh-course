import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../../screens/ProductsScreen';
import {ProductScreen} from '../../screens/ProductScreen';

export type ProductsStackParams = {
  products: undefined;
  product: {
    id?: string;
  };
};

const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="products" component={ProductsScreen} />
      <Stack.Screen name="product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
