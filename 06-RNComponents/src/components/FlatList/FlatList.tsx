import React from 'react';
import { FlatList as RNFlatList } from 'react-native';
import { MenuItem } from './MenuItem';
import { Header } from '../Header';
import { Separator } from './Separator';
import { DataItem } from '../../models/DataItem';

interface Props {
  headerText: string;
  data: DataItem[];
}

export const FlatList = ({ data, headerText }: Props) => (
  <RNFlatList
    data={data}
    renderItem={({ item }) => <MenuItem item={item} />}
    keyExtractor={item => item.title}
    ListHeaderComponent={() => <Header text={headerText} />}
    ItemSeparatorComponent={Separator}
  />
);
