import React, { useRef, useEffect } from 'react';
import MapView from 'react-native-maps';
import { useStyles } from './MapStyles';
import { useLocation } from '../../hooks/useLocation';
import { Text } from 'react-native';
import { Fab } from '../Fab';

export const Map = () => {
  const styles = useStyles();
  const mapRef = useRef<MapView>();
  const {
    location,
    watchPosition,
    stopWatchingPosition,
    watching,
  } = useLocation();

  useEffect(() => {
    watchPosition()
  }, []);

  useEffect(() => {
    location &&
      mapRef.current?.animateCamera({
        center: location,
      });
  }, [location]);

  if (!location) return <Text>Loading...</Text>;

  return (
    <>
      <MapView
        ref={el => {
          if (el) mapRef.current = el;
        }}
        style={styles.map}
        showsUserLocation
        minZoomLevel={16}
        zoomControlEnabled
        onTouchStart={stopWatchingPosition}
        initialRegion={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Fab
        onPress={watching ? stopWatchingPosition : watchPosition}
        iconName="Center"
      />
    </>
  );
};
