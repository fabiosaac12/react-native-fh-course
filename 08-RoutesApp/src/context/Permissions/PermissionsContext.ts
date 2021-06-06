import { createContext } from 'react';
import { Permission } from '../../models/Permission';

interface ContextProps {
  location?: Permission;
}

export const PermissionsContext = createContext<ContextProps>({});
