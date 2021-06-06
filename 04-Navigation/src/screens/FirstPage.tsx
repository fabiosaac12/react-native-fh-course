import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useAuth } from '../context/AuthProvider';

interface Props extends StackScreenProps<any, any> {}

export const FirstPage = ({ navigation }: Props) => {
  const {
    authState: { isLoggedIn },
    logOut,
  } = useAuth();

  return (
    <View>
      <Text>First Page</Text>
      <Button
        onPress={() => navigation.navigate('secondPage')}
        title="Second Page"
      />

      {!isLoggedIn && (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('personPage', {
                name: 'Fabio',
                lastName: 'Bermudez',
              })
            }>
            <Text>Fabio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('personPage', {
                name: 'Aracelys',
                lastName: 'Molina',
              })
            }>
            <Text>Aracelys</Text>
          </TouchableOpacity>
        </>
      )}

      {isLoggedIn && <Button onPress={logOut} title="Log out" />}
    </View>
  );
};
