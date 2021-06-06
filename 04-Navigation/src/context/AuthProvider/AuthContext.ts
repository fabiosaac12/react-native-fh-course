import { createContext } from 'react';

export interface AuthState {
  username?: string;
  favoriteIcon?: string;
  isLoggedIn: boolean;
}

export interface AuthContextValue {
  authState: AuthState;
  logIn: (username: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);
