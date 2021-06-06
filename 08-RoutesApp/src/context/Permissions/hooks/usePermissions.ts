import { useContext } from 'react';
import { PermissionsContext } from '../PermissionsContext';

export const usePermissions = () => useContext(PermissionsContext);
