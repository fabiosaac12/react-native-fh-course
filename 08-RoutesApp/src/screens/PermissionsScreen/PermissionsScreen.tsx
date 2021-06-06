import React from 'react';
import { Text, View, Button } from 'react-native';
import { useStyles } from './PermissionsScreenStyles';
import { usePermissions } from '../../context/Permissions';
import { openSettings } from 'react-native-permissions';

export const PermissionsScreen = () => {
  const permissions = usePermissions();
  const styles = useStyles();

  console.log(permissions.location?.status);

  return (
    <View style={styles.container}>
      <Text>Permissions</Text>
      <Button
        title="PERMISSION"
        onPress={async () => {
          const status = await permissions.location?.request();
          status === 'blocked' && openSettings();
        }}
      />
    </View>
  );
};
