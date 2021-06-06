import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { useStyles } from './FabStyles';

interface Props extends TouchableOpacityProps {
  iconName: string;
}

export const Fab = ({ iconName, style = {}, ...props }: Props) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.container, ...(style as {}) }}
    >
      <Text>Center</Text>
    </TouchableOpacity>
  );
};
