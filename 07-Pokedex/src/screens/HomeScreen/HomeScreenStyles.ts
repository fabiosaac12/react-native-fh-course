import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { top, left } = useSafeAreaInsets();

  return StyleSheet.create({
    pokeballImage: {
      width: 300,
      height: 300,
      position: 'absolute',
      top: -100,
      right: -100,
      opacity: 0.2
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      top: top + 20,
      marginLeft: left + 20,
    },
    flatList: {
      alignItems: 'center'
    }
  });
};
