import { AuthState } from './AuthContext';

type action = { type: 'logIn'; payload: string } | { type: 'logOut' };

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export const AuthReducer = (state: AuthState, action: action): AuthState => {
  switch (action.type) {
    case 'logIn':
      return { ...state, username: action.payload, isLoggedIn: true };
    case 'logOut':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
