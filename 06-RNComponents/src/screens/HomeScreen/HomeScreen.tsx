import React from 'react';
import { FlatList } from '../../components/FlatList';
import { menuOptions } from './helpers';
import { ScreenContainer } from '../../components/ScreenContainer';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../context/Theme';

export const HomeScreen = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ScreenContainer scroll={false}>
      <FlatList headerText="Menu Options" data={menuOptions} />
      <TouchableOpacity
        onPress={() => setTheme(theme.name === 'dark' ? 'light' : 'dark')}
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 8,
          paddingHorizontal: 10,
          width: '50%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 6,
            textAlign: 'center',
          }}>
          Switch Theme
        </Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
