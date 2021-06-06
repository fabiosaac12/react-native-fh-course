import React from 'react';
import { PermissionsContext } from './PermissionsContext';
import { FC, useState, useEffect } from 'react';
import { Permission } from '../../models/Permission';
import { getInitialLocationState } from './helpers';
import { AppState } from 'react-native';

export const PermissionsProvider: FC = ({ children }) => {
  const [location, setLocation] = useState<Permission>();

  useEffect(() => {
    setLocation(getInitialLocationState(setLocation));
  }, []);

  useEffect(() => {
    if (location?.status === 'unavailable') {
      location.check();

      AppState.addEventListener(
        'change',
        state => state === 'active' && location.check(),
      );
    }
  }, [location]);

  return (
    <PermissionsContext.Provider value={{ location }}>
      {children}
    </PermissionsContext.Provider>
  );
};
