import { StyleSheet } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { useState, useEffect, useRef } from 'react';

interface Props {
  imageUrl: string;
}

export const useStyles = ({ imageUrl }: Props) => {
  const isMounted = useRef(true);
  const [bg, setBg] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const colors = await ImageColors.getColors(imageUrl);

      if (isMounted.current) {
        colors.platform === 'android'
          ? setBg(colors.dominant)
          : setBg(colors.background);
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return StyleSheet.create({
    container: {
      backgroundColor: bg || '#f3f3f3',
      width: 180,
      height: 120,
      margin: 12,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    textContainer: {
      padding: 14,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    pokeballContainer: {
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: 0,
      right: 0,
      overflow: 'hidden',
    },
    pokeball: {
      position: 'absolute',
      bottom: -20,
      right: -20,
      width: 110,
      height: 110,
      opacity: 0.4,
    },
    pokemonContainer: {
      position: 'absolute',
      bottom: -10,
      right: -10,
    },
    pokemon: {
      width: 110,
      height: 110,
    },
  });
};
