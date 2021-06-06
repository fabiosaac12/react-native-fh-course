import React from 'react';
import {useStyles} from './BackgroundStyles';
import {View} from 'react-native';

export const Background = () => {
  const styles =  useStyles();

  return <View style={styles.background} />
};
