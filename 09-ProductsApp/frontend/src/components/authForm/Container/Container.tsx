import React, {FC} from 'react';
import {useStyles} from './ContainerStyles';
import {
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native';

export const Container: FC<KeyboardAvoidingViewProps> = ({children, style}) => {
  const styles = useStyles();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, style]}>
      {children}
    </KeyboardAvoidingView>
  );
};
