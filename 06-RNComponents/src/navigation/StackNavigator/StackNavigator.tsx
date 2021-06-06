import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/HomeScreen';
import { FirstAnimationScreen } from '../../screens/FirstAnimationScreen';
import { SecondAnimationScreen } from '../../screens/SecondAnimationScreen';
import { SwitchesScreen } from '../../screens/SwitchesScreen';
import { AlertsScreen } from '../../screens/AlertsScreen/AlertsScreen';
import { TextInputsScreen } from '../../screens/TextInputsScreen/TextInputsScreen';
import { PullToRefreshScreen } from '../../screens/PullToRefreshScreen/PullToRefreshScreen';
import { SectionListScreen } from '../../screens/SectionListScreen';
import { ModalScreen } from '../../screens/ModalScreen/ModalScreen';
import { InfiniteScrollScreen } from '../../screens/InfiniteScrollScreen/InfiniteScrollScreen';
import { SlideShowScreen } from '../../screens/SlideShowScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../../context/Theme';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.colors.background },
          }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen
            name="firstAnimation"
            component={FirstAnimationScreen}
          />
          <Stack.Screen
            name="secondAnimation"
            component={SecondAnimationScreen}
          />
          <Stack.Screen name="switches" component={SwitchesScreen} />
          <Stack.Screen name="alerts" component={AlertsScreen} />
          <Stack.Screen name="textInputs" component={TextInputsScreen} />
          <Stack.Screen name="pullToRefresh" component={PullToRefreshScreen} />
          <Stack.Screen name="sectionList" component={SectionListScreen} />
          <Stack.Screen name="modal" component={ModalScreen} />
          <Stack.Screen
            name="infiniteScroll"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="slideShow" component={SlideShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
