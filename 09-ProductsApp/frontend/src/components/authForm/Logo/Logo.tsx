import React from 'react';
import {useStyles} from './LogoStyles';
import {Image, ImageProps} from 'react-native';

interface Props extends Partial<ImageProps> {}

export const Logo = ({style = {}, ...props}: Props) => {
  const styles = useStyles();

  return (
    <Image
      {...props}
      style={{...styles.image, ...(style as {})}}
      source={require('../../../assets/react-logo-white.png')}
    />
  );
};
