import React from 'react';
import { Button, Alert, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { ScreenContainer } from '../../components/ScreenContainer';
import { Header } from '../../components/Header';
import {useTheme} from '../../context/Theme';

export const AlertsScreen = () => {
  const { theme: { colors } } = useTheme();

  const handleOpenAlert = () => {
    Alert.alert(
      'Are you sure?',
      'Are you sure to delete the client Jose',
      [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => console.log('Yes pressed'),
        },
        {
          text: 'Cancel',
          style: 'default',
          onPress: () => console.log('Cancel pressed'),
        },
      ],
      { cancelable: true, onDismiss: () => console.log('dismissed') },
    );
  };

  const handleOpenPrompt = () => {
    prompt(
      'Are you sure to do that?',
      'You need to write your password to continue',
      [
        {
          text: 'Cancel',
          style: 'default',
          onPress: () => console.log('Canceling'),
        },
        {
          text: 'Continue',
          style: 'destructive',
          onPress: password => console.log(password),
        },
      ],
      {
        cancelable: true,
        type: 'secure-text',
      },
    );
  };

  return (
    <ScreenContainer>
      <Header text="Alerts" />
      <Button color={colors.primary} title="Open Alert" onPress={handleOpenAlert} />
      <View style={{ height: 20 }} />
      <Button color={colors.primary} title="Open Prompt" onPress={handleOpenPrompt} />
    </ScreenContainer>
  );
};
