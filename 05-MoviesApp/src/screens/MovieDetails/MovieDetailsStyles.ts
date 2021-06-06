import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();

  return StyleSheet.create({
    container: {
      marginBottom: insets.bottom + 20,
    },
    imageContainer: {
      width: dimensions.width,
      height: dimensions.height * 0.7,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      marginBottom: 10,
    },
    image: {
      flex: 1,
    },
    infoContainer: {
      paddingHorizontal: 15
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 17,
      opacity: 0.7,
      marginRight: 7
    },
    extraInfoContainer: {
      paddingHorizontal: 15
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    marginTop: {
      marginTop: 10
    },
    castContainer: {
      marginHorizontal: -15,
      marginTop: 10
    },
    goBackButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 999,
      elevation: 9
    }
  });
};
