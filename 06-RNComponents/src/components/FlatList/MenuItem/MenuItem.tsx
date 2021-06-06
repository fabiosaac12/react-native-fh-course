import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DataItem } from '../../../models/DataItem';
import { useStyles } from './MenuItemStyles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  item: DataItem;
}

export const MenuItem = ({ item }: Props) => {
  const { navigate } = useNavigation();
  const styles = useStyles();

  console.log(styles);

  return (
    <TouchableOpacity
      onPress={() => navigate(item.path)}
      activeOpacity={0.6}
      style={styles.container}>
      <Icon style={styles.icon} name={item.icon} size={25} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={{ flex: 1 }} />
      <Icon style={styles.icon} name="chevron-forward-outline" size={25} />
    </TouchableOpacity>
  );
};
