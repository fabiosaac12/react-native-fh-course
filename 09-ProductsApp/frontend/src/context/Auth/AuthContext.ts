import {createContext} from 'react';
import {User} from '../../models/User';
import {LoginData} from '../../models/LoginData';
import {AuthStatus} from '../../models/AuthStatus';
import {SignupData} from '../../models/SignupData';

type ContextProps = {
  user?: User | null;
  signIn: ({}: LoginData) => void;
  signUp: ({}: SignupData) => void;
  signOut: () => void;
  setError: (error: string) => void;
  status: AuthStatus;
  error?: string | null;
};

export const AuthContext = createContext<ContextProps>({} as ContextProps);
