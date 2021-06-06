import React from 'react';
import {View, TouchableNativeFeedback, Text, StyleSheet} from 'react-native';

interface Props {
  title: String;
  position: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = (props: Props) => {
  const {position, title} = props;

  return (
    <View style={[styles.container, styles[position]]}>
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.Ripple('#ccc', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  br: {
    bottom: 25,
    right: 25,
  },
  bl: {
    bottom: 25,
    left: 25,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#545454',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
