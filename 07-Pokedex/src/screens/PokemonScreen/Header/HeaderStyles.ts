import { StyleSheet, useWindowDimensions } from 'react-native';

interface Props {
  backgroundColor: string;
}

export const useStyles = ({ backgroundColor }: Props) => {
  const window = useWindowDimensions();

  return StyleSheet.create({
    container: {
      backgroundColor,
      position: 'absolute',
      height: window.height * 0.4,
      width: window.width,
      borderBottomLeftRadius: 1000,
      borderBottomRightRadius: 1000,
      alignItems: 'center',
      zIndex: 1
    },
    textContainer: {
      padding: 20,
      alignSelf: 'flex-start'
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    pokeballContainer: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      opacity: 0.5
    },
    pokeball: {
      width: 220,
      height: 220,
    },
    pokemonContainer: {
      position: 'absolute',
      bottom: -25
    },
    pokemon: {
      width: 250,
      height: 250,
    },
  });
};
