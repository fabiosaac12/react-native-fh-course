import React, { FC } from 'react';
import {
  ScrollView,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
  RefreshControlProps,
} from 'react-native';
import { useStyles } from './ScreenContainerStyles';
import { useTheme } from '../../context/Theme';

interface Props {
  scroll?: boolean;
  refreshControl?: RefreshControlProps;
}

export const ScreenContainer: FC<Props> = ({
  children,
  refreshControl,
  scroll = false,
}) => {
  const {
    theme: { colors },
  } = useTheme();
  const styles = useStyles();

  return scroll ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          refreshControl={
            refreshControl && (
              <RefreshControl progressBackgroundColor={colors.card} colors={[colors.primary]} {...refreshControl} />
            )
          }>
          <View style={styles.container}>{children}</View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  ) : (
    <View style={styles.container}>{children}</View>
  );
};
