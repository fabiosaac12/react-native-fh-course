import { StyleSheet } from 'react-native';
import { useTheme } from '../../../context/Theme';

export const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    icon: {
      marginRight: 10,
      color: theme.colors.primary
    },
    title: {
      fontSize: 20,
      color: theme.colors.text,
    },
  });
};
