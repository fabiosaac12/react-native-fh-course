import RNImageColors from 'react-native-image-colors';
import { ImageColors } from '../models/ImageColors';

export const extractImageColors = async (uri: string) => {
  const imageColors = await RNImageColors.getColors(uri);

  let colors: ImageColors = {
    primary: '#000',
    secondary: '#fff',
  };

  if (imageColors.platform === 'android') {
    colors = {
      primary: imageColors.dominant,
      secondary: imageColors.average,
    };
  } else {
    colors = {
      primary: imageColors.primary,
      secondary: imageColors.secondary,
    };
  }

  return colors;
};
