import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/Theme';

export const useStyles = () => {
  const {
    theme: { colors },
  } = useTheme();

  return StyleSheet.create({
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colors.text,
      backgroundColor: colors.background,
    },
  });
};
