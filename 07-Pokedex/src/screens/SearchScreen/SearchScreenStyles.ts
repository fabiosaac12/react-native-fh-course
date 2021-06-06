import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    flatList: {
      marginTop: 75,
      alignItems: 'center',
    },
    searchInput: {
      position: 'absolute',
      zIndex: 1000,
      top: 20,
      right: '5%',
      left: '5%'
    }
  });
