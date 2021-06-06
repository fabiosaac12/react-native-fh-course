import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const ThirdPage = ({ navigation }: Props) => (
  <View>
    <Text>Third Page</Text>
    <Button onPress={() => navigation.popToTop()} title="First Page" />
  </View>
);
