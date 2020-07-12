import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { View, Text} from 'react-native';

import Button from '../../components/button';

const preview = ({ navigation }) => {

  const dispatch = useDispatch()

  const event = useSelector((state) => state.event_creating);

  const handleClick = () => {
    dispatch({
      type: 'ADD_EVENT',
      event: event
    });
    navigation.dangerouslyGetParent().navigate('Map');
    navigation.popToTop();
  }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {event.name}
      </Text>
      <Text>
        {event.coords.latitude}
      </Text>
      <Text>
        {event.coords.longitude}
      </Text>

      <Button action={() => handleClick()} />
    </View>
  )

}

export default preview;
