import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../context/AuthProvider';

export const SettingsPage = () => {
  const { authState } = useAuth();

  return (
    <View>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
