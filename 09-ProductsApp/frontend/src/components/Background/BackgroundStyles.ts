import {StyleSheet, useWindowDimensions} from "react-native";

export const useStyles = () => {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    background: {
      position: 'absolute',
      backgroundColor: '#8624ff',
      top: -550,
      height: height * 1.9,
      width: width * 1.9,
      transform: [
        { rotate: '-70deg' }
      ]
    }
  })
};
