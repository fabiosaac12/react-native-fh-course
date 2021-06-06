import React, { FC, useReducer } from 'react';
import { AuthReducer, authInitialState } from './AuthReducer';
import { AuthContext } from './AuthContext';

export const AuthProvider: FC = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const logIn = (username: string) =>
    dispatch({ type: 'logIn', payload: username });

  const logOut = () => dispatch({ type: 'logOut' });

  const contextValue = {
    authState,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
