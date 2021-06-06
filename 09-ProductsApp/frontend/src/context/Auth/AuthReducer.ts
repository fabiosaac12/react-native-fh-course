import {Reducer} from 'react';
import {User} from '../../models/User';
import {LoginResponse} from '../../models/LoginResponse';
import {AuthStatus} from '../../models/AuthStatus';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
  user?: User | null;
  token?: string | null;
  status: AuthStatus;
  error?: string | null;
};

type Action =
  | {type: 'login'; payload: LoginResponse}
  | {type: 'logout'}
  | {type: 'error'; payload: string | null};

export const initialState: State = {
  user: null,
  token: null,
  status: 'unavailable',
  error: null,
};

export const AuthReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.usuario,
        status: 'authenticated',
        error: null,
      };
    case 'logout':
      AsyncStorage.removeItem('token');

      return {
        ...state,
        user: null,
        token: null,
        status: 'not-authenticated',
      };
    case 'error':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
