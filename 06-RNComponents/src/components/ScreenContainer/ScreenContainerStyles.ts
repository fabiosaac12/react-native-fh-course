import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top + 20,
      marginBottom: insets.bottom + 20,
      marginLeft: insets.left + 20,
      marginRight: insets.right + 20,
    },
  });
};
