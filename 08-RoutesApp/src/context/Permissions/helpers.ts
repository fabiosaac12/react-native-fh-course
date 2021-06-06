import { Dispatch, SetStateAction } from 'react';
import { Permission } from '../../models/Permission';
import { Platform } from 'react-native';
import {
  PermissionStatus,
  request,
  PERMISSIONS,
  check,
} from 'react-native-permissions';

export const getInitialLocationState = (
  setLocation: Dispatch<SetStateAction<Permission | undefined>>,
): Permission => ({
  status: 'unavailable',
  check: async (): Promise<PermissionStatus> => {
    let status: PermissionStatus;

    if (Platform.OS === 'ios')
      status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    else status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    setLocation(location => (location ? { ...location, status } : undefined));

    return status;
  },
  request: async (): Promise<PermissionStatus> => {
    let status: PermissionStatus;

    if (Platform.OS === 'ios')
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    else status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    setLocation(location => (location ? { ...location, status } : undefined));

    return status;
  },
});
