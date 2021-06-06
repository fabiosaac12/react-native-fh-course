import React from 'react';
import {Background} from '../../components/Background';
import {Logo} from '../../components/authForm/Logo';
import {Input} from '../../components/authForm/Input';
import {Button} from '../../components/authForm/Button';
import {Container} from '../../components/authForm/Container';
import {useForm} from '../../hooks/useForm';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/Auth';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const form = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    auth.signIn(form.values);
  };

  return (
    <Container>
      <Background />
      <Logo />
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
      <Button onPress={handleSubmit} text="Log me in" />
      <Button
        size="small"
        onPress={() => navigation.navigate('signup')}
        text="Don't you have an account?"
      />
    </Container>
  );
};
