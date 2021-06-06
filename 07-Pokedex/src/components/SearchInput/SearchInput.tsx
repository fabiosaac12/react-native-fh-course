import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStyles } from './SearchInputStyles';

interface Props extends Partial<TextInputProps> {
  containerStyle?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ containerStyle = {}, ...props }: Props) => {
  const styles = useStyles();

  return (
    <View style={{ ...styles.container, ...(containerStyle as {}) }}>
      <TextInput
        placeholderTextColor="#00000040"
        style={{ ...styles.input }}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        placeholder="Search for a pokemon..."
        {...props}
      />
      <Icon name="search-outline" size={30} color="#00000070" />
    </View>
  );
};
