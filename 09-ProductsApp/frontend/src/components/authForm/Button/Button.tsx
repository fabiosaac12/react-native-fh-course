import React from 'react';
import {useStyles} from './ButtonStyles';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Size} from '../../../models/Size';

interface Props extends TouchableOpacityProps {
  text: string;
  size?: Size;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({style, size = 'normal', text, textStyle, ...props}: Props) => {
  const styles = useStyles(size);

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
