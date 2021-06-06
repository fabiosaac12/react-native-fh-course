import { StyleSheet } from 'react-native';
import { colors } from './helpers';

interface Props {
  name: string;
}

export const useStyles = ({ name }: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors[name] || '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 6,
      margin: 3,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    name: {
      fontSize: 18,
      color: 'white',
      marginRight: 7,
    },
    stat: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
  });
