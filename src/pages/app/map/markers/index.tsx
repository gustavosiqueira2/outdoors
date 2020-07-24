import React from 'react';

import useFetch from '../../../../hooks/useFetch';

import { Marker } from 'react-native-maps';

import event from '../../../../types/event';

const markers = () => {

  const { data, error }: { data: event[], error: any } = useFetch('events');

  const handleClick = (event: event) => {
    console.log(event)
  }

  if (!data)
    return <></>
  else
    return (
      <>
        {data.map((event: event, i: number) =>
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
