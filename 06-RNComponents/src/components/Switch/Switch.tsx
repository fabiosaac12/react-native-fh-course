import React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native';
import { useTheme } from '../../context/Theme';

interface Props extends SwitchProps {
  onChange: (value: boolean) => void;
}

export const Switch = ({ value, onChange, ...props }: Props) => {
  const {
    theme: { colors },
  } = useTheme();

  const toggleSwitch = () => onChange(!value);

  return (
    <RNSwitch
      trackColor={{ false: '#ccc', true: '#ccc' }}
      thumbColor={value ? colors.primary : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={value}
      {...props}
    />
  );
};
