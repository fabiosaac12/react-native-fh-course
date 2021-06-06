import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderItems, SliderItem } from './helpers';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { ScreenContainer } from '../../components/ScreenContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import {useTheme} from '../../context/Theme';

const { width } = Dimensions.get('window');

export const SlideShowScreen = () => {
  const { theme: { colors }} = useTheme();

  const { navigate } = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, fade] = useAnimation(0);

  const fadeIn = () =>
    fade({ toValue: 1, duration: 300, useNativeDriver: true }).start();

  return (
    <ScreenContainer>
      <Carousel
        data={sliderItems}
        itemWidth={width - 40}
        sliderWidth={width - 40}
        onSnapToItem={index => {
          setActiveIndex(index);
          index === sliderItems.length - 1 && fadeIn();
        }}
        renderItem={({ item, index }: { item: SliderItem; index: number }) => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
            key={`${index}CarouselView`}>
            <Text style={{ fontSize: 28, textAlign: 'center', color: colors.text }}>
              {item.title}
            </Text>
            <Image
              style={{ width: 350, height: 400, resizeMode: 'center' }}
              source={item.img}
            />
            <Text style={{ fontSize: 23, textAlign: 'center', color: colors.text }}>
              {item.desc}
            </Text>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={sliderItems.length}
          dotStyle={{ width: 15, backgroundColor: colors.primary }}
          inactiveDotStyle={{ backgroundColor: colors.border }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            onPress={() => opacity && navigate('home')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              height: 35,
              paddingLeft: 10,
              paddingRight: 5,
              borderRadius: 7,
            }}>
            <Text style={{ color: 'white' }}>Move on</Text>
            <Icon size={25} color="white" name="chevron-forward-outline" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScreenContainer>
  );
};
