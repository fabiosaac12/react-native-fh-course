import { StyleSheet } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

export const useStyles = ({ width = 260, height = 380 }: Props) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height,
      width,
      marginHorizontal: 5,
      marginVertical: 8,
      borderRadius: 25,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    image: {
      flex: 1,
    },
  });
};
