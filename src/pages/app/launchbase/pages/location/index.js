import React, { useState, useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import mapStyle from '../../../../../assets/mapStyle';
import markerIcon from '../../../../../assets/spacepoint_icon.png';

import { View, Image } from 'react-native';
import styles from './styles';

import LocationHeader from './locationHeader';
import Button from '../../components/button';

const map = ({ navigation }) => {

  const dispatch = useDispatch();

  const mapRef = useRef(null);

  const [location, setLocation] = useState({ coords: { latitude: 0, longitude: 0 } });

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

  useEffect(() => { getLocation() }, []);

  const handleClick = async () => {
    const camera = await mapRef.current.getCamera();
    dispatch({ type: 'ADD_EVENT_COORDS', coords: camera.center });
    navigation.navigate('Preview');
  }

  return (
    <View style={styles.container}>

      <LocationHeader />

      <View style={styles.map_container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          customMapStyle={mapStyle}
          rotateEnabled={false}
          showsUserLocation={true}
          showsMyLocationButton={true}
          region={{ ...location.coords, ...{ latitudeDelta: 0.002, longitudeDelta: 0.002 } }}
        />
      </View>
      <Image style={styles.marker_icon} source={markerIcon} />

      <Button action={() => handleClick()} />

    </View>
  )

}

export default map;
