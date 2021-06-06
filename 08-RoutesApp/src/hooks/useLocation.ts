import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Location } from '../models/Location';

export const useLocation = () => {
  const [location, setLocation] = useState<Location>();
  const [watchingId, setWatchingId] = useState<number>();

  const refreshLocation = () =>
    Geolocation.getCurrentPosition(
      position => setLocation(position.coords),
      error => console.log(error),
      { enableHighAccuracy: true },
    );

  const watchPosition = () =>
    setWatchingId(
      Geolocation.watchPosition(
        position => setLocation(position.coords),
        error => console.log(error),
        { enableHighAccuracy: true, distanceFilter: 100 },
      ),
    );

  const stopWatchingPosition = () => {

    watchingId && Geolocation.clearWatch(watchingId);
    setWatchingId(undefined);
  };

  return {
    location,
    refreshLocation,
    watchPosition,
    stopWatchingPosition,
    watching: typeof watchingId === 'number',
  };
};
