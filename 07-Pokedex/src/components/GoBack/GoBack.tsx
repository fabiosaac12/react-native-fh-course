import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconProps } from 'react-native-vector-icons/Icon';

interface Props {
  touchableOpacityProps?: TouchableOpacityProps;
  iconProps?: Partial<IconProps>;
}

export const GoBack = ({ touchableOpacityProps, iconProps }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.goBack()}
      {...touchableOpacityProps}
    >
      <Icon name="arrow-back-outline" size={40} color="white" {...iconProps} />
    </TouchableOpacity>
  );
};
