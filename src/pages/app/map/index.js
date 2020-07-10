import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import * as Location from 'expo-location';

import MapView from 'react-native-maps';
import mapStyle from '../../../assets/mapStyle';

import { View } from 'react-native';

import Markers from './markers';
import EventTab from './eventTab';

const map = () => {

  const [location, setLocation] = useState({ coords: { latitude: 0, longitude: 0 } });

  const dispatch = useDispatch();

  const getLocation = async () => {

    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      alert('Need Location to go on!');
      setTimeout(() => getLocation(), 1000);
    }
    else {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleClick = () => dispatch({ type: 'SELECT_EVENT', event: {} })

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      <MapView
        style={{ position: 'absolute', height: '100%', width: '100%' }} customMapStyle={mapStyle} rotateEnabled={false} showsUserLocation={true}
        region={{ ...location.coords, ...{ latitudeDelta: 0.01, longitudeDelta: 0.01 } }}
        onPress={() => handleClick()}
      >
        <Markers />
      </MapView>

      <EventTab />

    </View >
  );

}

export default map;
