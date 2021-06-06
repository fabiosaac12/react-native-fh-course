import React from 'react';
import { useForm } from '../../hooks/useForm';
import { ScreenContainer } from '../../components/ScreenContainer';
import { Header } from '../../components/Header';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Switch } from '../../components/Switch';
import { useTheme } from '../../context/Theme';

export const TextInputsScreen = () => {
  const styles = useStyles();

  const { values, handleChange } = useForm({
    name: '',
    email: '',
    phone: '',
    subscribe: false,
  });

  return (
    <ScreenContainer scroll>
      <Header text="Text Inputs" />
      <Text style={styles.json}>{JSON.stringify(values, null, 4)}</Text>
      <View>
        <TextInput
          keyboardType="name-phone-pad"
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="words"
          value={values.name}
          onChangeText={value => handleChange('name', value)}
          placeholder="name"
          style={styles.textInput}
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          value={values.email}
          onChangeText={value => handleChange('email', value)}
          placeholder="email"
          style={styles.textInput}
        />
        <TextInput
          keyboardType="phone-pad"
          value={values.phone}
          onChangeText={value => handleChange('phone', value)}
          placeholder="phone"
          style={styles.textInput}
        />
        <View style={styles.switchGroup}>
          <Text style={styles.text}>Is Active</Text>
          <Switch
            onChange={value => handleChange('subscribe', value)}
            value={values.subscribe}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const useStyles = () => {
  const {
    theme: { colors },
  } = useTheme();

  return StyleSheet.create({
    switchGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
    },
    text: {
      paddingHorizontal: 16,
      fontSize: 18,
      color: colors.text,
    },
    json: {
      fontSize: 20,
      marginTop: 80,
      marginBottom: 110,
      color: colors.text,
    },
    textInput: {
      height: 50,
      fontSize: 18,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      marginBottom: 10,
      color: colors.text,
    },
  });
};
