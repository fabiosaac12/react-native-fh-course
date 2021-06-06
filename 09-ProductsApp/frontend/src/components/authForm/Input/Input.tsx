import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useStyles} from './InputStyles';

interface Props extends TextInputProps {}

export const Input = ({style, ...props}: Props) => {
  const styles = useStyles();

  return (
    <TextInput
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
      {...props}
      style={[styles.input, style]}
    />
  );
};
