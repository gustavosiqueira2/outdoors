import React from 'react';

import { Marker, LatLng } from 'react-native-maps';

const markers = () => {

  const events: { coords: LatLng}[] = []

  const handleClick = (event: {}) => {}

  return (
    <>
      {events.map((event, i) =>
        <Marker
          onPress={() => handleClick(event)}
          key={i}
          coordinate={event.coords}
          pinColor={'#' + Math.floor((Math.random() * 900) + 100)}
        />
      )}
    </>
  )

};

export default markers;
