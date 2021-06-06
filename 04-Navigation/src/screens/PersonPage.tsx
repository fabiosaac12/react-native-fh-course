import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';
import {useAuth} from '../context/AuthProvider';

interface Props extends StackScreenProps<RootStackParamList, 'personPage'> {}

export const PersonPage = ({
  navigation,
  route: { params: person },
}: Props) => {
  const { logIn } = useAuth();

  useEffect(() => navigation.setOptions({ title: person.name }), []);

  useEffect(() => logIn(person.name),[])

  return (
    <View>
      <Text style={{ fontSize: 25 }}>{JSON.stringify(person, null, 2)}</Text>
    </View>
  );
};
