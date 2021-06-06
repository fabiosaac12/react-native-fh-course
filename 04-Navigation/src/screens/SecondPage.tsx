import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const SecondPage = ({ navigation }: Props) => (
  <View>
    <Text>Second Page</Text>
    <Button
      onPress={() => navigation.navigate('thirdPage')}
      title="Third Page"
    />
  </View>
);
