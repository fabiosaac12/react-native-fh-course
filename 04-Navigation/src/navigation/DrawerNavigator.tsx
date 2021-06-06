import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useWindowDimensions, Button } from 'react-native';
import { SettingsPage } from '../screens/SettingsPage';
import { BottomTabs } from './BottomTabs';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      drawerType={width > 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="Tabs" component={BottomTabs} />
      <Drawer.Screen name="settingsPage" component={SettingsPage} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => (
  <DrawerContentScrollView>
    <Button
      title="Stack Navigator"
      onPress={() => navigation.navigate('stackNavigator')}
    />
    <Button
      title="Settings"
      onPress={() => navigation.navigate('settingsPage')}
    />
  </DrawerContentScrollView>
);
