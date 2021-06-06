import React, {useReducer, FC, useEffect} from 'react';
import {AuthContext} from './AuthContext';
import {AuthReducer, initialState} from './AuthReducer';
import {login, signup, refreshToken} from '../../api/cafe/requests';
import {LoginData} from '../../models/LoginData';
import {SignupData} from '../../models/SignupData';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setError = (error: string) => dispatch({type: 'error', payload: error});

  const signIn = async (data: LoginData) => {
    try {
      const response = await login(data);
      dispatch({type: 'login', payload: response});
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.response.data.msg || 'Informacion incorrecta',
      });
    }
  };

  const signUp = async (data: SignupData) => {
    try {
      const response = await signup(data);
      dispatch({type: 'login', payload: response});
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.response.data.msg || 'Informacion incorrecta',
      });
    }
  };

  const signOut = () => dispatch({type: 'logout'});

  useEffect(() => {
    (async () => {
      try {
        const response = await refreshToken();

        dispatch({type: 'login', payload: response});
      } catch (error) {
        dispatch({type: 'logout'});
      }
    })();
  }, []);

  useEffect(() => {
    state.token && AsyncStorage.setItem('token', state.token);
  }, [state.token]);

  useEffect(() => {
    state.error &&
      Alert.alert(state.error, undefined, undefined, {
        onDismiss: () => dispatch({type: 'error', payload: null}),
      });
  }, [state.error]);

  const contextValue = {
    signIn,
    signUp,
    signOut,
    setError,
    user: state.user,
    status: state.status,
    error: state.error,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
