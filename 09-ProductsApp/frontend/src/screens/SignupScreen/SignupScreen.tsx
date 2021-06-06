import React from 'react';
import {Logo} from '../../components/authForm/Logo';
import {Input} from '../../components/authForm/Input';
import {Button} from '../../components/authForm/Button';
import {Container} from '../../components/authForm/Container';
import {useForm} from '../../hooks/useForm';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/Auth';

export const SignupScreen = () => {
  const auth = useAuth();
  const {navigate} = useNavigation();
  const form = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleSubmit = () => {
    if (form.values.password === form.values.passwordConfirmation) {
      Keyboard.dismiss();
      auth.signUp(form.values);
    }
  };

  return (
    <Container style={{ backgroundColor: '#8624ff'}}>
      <Logo />
      <Input
        keyboardType="name-phone-pad"
        placeholder="Name"
        autoCapitalize="words"
        autoCorrect={false}
        value={form.values.name}
        onChangeText={form.handleChange.bind(null, 'name')}
      />
      <Input
        keyboardType="email-address"
        placeholder="E-mail"
        autoCapitalize="none"
        autoCorrect={false}
        value={form.values.email}
        onChangeText={form.handleChange.bind(null, 'email')}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        value={form.values.password}
        onChangeText={form.handleChange.bind(null, 'password')}
      />
      <Input
        secureTextEntry
        placeholder="Password Confirmation"
        value={form.values.passwordConfirmation}
        onChangeText={form.handleChange.bind(null, 'passwordConfirmation')}
      />
      <Button onPress={handleSubmit} text="Sign me up" />
      <Button
        size="small"
        onPress={() => navigate('login')}
        text="Do you already have an account?"
      />
    </Container>
  );
};
