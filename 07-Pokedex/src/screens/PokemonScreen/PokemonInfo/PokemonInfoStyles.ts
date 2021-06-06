import { StyleSheet, useWindowDimensions } from 'react-native';

export const useStyles = () => {
  const window = useWindowDimensions();

  return StyleSheet.create({
    container: {
      marginTop: window.height * 0.45,
      flex: 1
    },
    statsContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
};
