import React, { useState } from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { Header } from '../../components/Header';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScreenContainer scroll refreshControl={{ refreshing, onRefresh }}>
      <Header text="Pull To Refresh" />
      {!refreshing && <Header text="Data loaded" />}
    </ScreenContainer>
  );
};
