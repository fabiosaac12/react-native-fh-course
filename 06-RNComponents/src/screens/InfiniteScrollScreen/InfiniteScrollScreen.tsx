import React from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import {FadeInImage} from '../../components/FadeInImage';
import {useTheme} from '../../context/Theme';

export const InfiniteScrollScreen = () => {
  const { theme: { colors }} = useTheme();

  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  const updateData = () =>
    setData(data => {
      const newData: number[] = [];

      for (let i = 0; i < 5; i++) {
        newData[i] = data.length + i;
      }

      return [...data, ...newData];
    });

  return (
    <ScreenContainer>
      <FlatList
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => (
          <FadeInImage
            style={{ width: '100%', height: 300 }}
            source={{ uri: `https://picsum.photos/id/${item}/200/300` }}
          />
        )}
        onEndReached={updateData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color={colors.text} />
          </View>
        }
      />
    </ScreenContainer>
  );
};
