import React from 'react';
import {useStyles} from './LoadingScreenStyles';
import {View, ActivityIndicator} from 'react-native';

export const LoadingScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color="black" />
    </View>
  );
};
