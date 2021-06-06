import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      marginTop: insets.top + 20,
      marginBottom: insets.bottom + 20,
    },
  });
};
