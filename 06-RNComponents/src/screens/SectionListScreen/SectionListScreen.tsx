import React from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionList, Text } from 'react-native';
import { casas } from './helpers';
import { Header } from '../../components/Header';
import { useTheme } from '../../context/Theme';

export const SectionListScreen = () => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <ScreenContainer>
      <Header text="Section List" />
      <SectionList
        sections={casas}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => <Header text={section.casa} />}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 30, marginVertical: 5, color: colors.text }}>
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </ScreenContainer>
  );
};
