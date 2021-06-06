import { Theme as RNTheme } from '@react-navigation/native';
import {themes} from '../context/Theme/themes';

export interface Theme extends RNTheme {
  name: string;
}

export type ThemeName = keyof typeof themes;
