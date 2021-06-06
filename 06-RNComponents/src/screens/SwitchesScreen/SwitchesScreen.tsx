import React, { useState } from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { Header } from '../../components/Header';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from '../../components/Switch';
import { useTheme } from '../../context/Theme';

interface State {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchesScreen = () => {
  const styles = useStyles();

  const [state, setState] = useState<State>({
    isActive: false,
    isHungry: true,
    isHappy: false,
  });

  const handleChange = (name: keyof State, value: boolean) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScreenContainer>
      <Header text="Switches" />
      <View style={styles.switchesContainer}>
        <View style={styles.switchGroup}>
          <Text style={styles.text}>Is Active</Text>
          <Switch
            onChange={value => handleChange('isActive', value)}
            value={state.isActive}
          />
        </View>
        <View style={styles.switchGroup}>
          <Text style={styles.text}>Is Hungry</Text>
          <Switch
            onChange={value => handleChange('isHungry', value)}
            value={state.isHungry}
          />
        </View>
        <View style={styles.switchGroup}>
          <Text style={styles.text}>Is Happy</Text>
          <Switch
            onChange={value => handleChange('isHappy', value)}
            value={state.isHappy}
          />
        </View>
      </View>

      <Text style={styles.text}>{JSON.stringify(state, null, 4)}</Text>
    </ScreenContainer>
  );
};

const useStyles = () => {
  const {
    theme: { colors },
  } = useTheme();

  return StyleSheet.create({
    switchesContainer: {
      flex: 1,
    },
    switchGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
    },
    text: {
      fontSize: 22,
      color: colors.text,
    },
  });
};
