import React from 'react';
import {Button, View, Text} from 'react-native';
import {useAuth} from '../../context/Auth';

export const ProtectedScreen = () => {
  const auth = useAuth();

  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text>{JSON.stringify(auth.user, null, 4)}</Text>
      <Button title="Log Out" onPress={auth.signOut} />
    </View>
  );
};
