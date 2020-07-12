import React from 'react';

import { Marker } from 'react-native-maps';

import { useSelector, useDispatch } from 'react-redux';

const markers = () => {

  const events = useSelector(state => state.events);
  const dispatch = useDispatch();

  const handleClick = (event) =>{
    console.log(event)
    dispatch({ type: 'SELECT_EVENT', event });
  }

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
