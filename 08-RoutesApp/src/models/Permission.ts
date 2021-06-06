import { PermissionStatus } from 'react-native-permissions';

export interface Permission {
  status: PermissionStatus;
  check: () => void;
  request: () => void;
}
