import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const eventTab = () => {

  const [containerHeight, setContainerHeight] = useState('36%');

  const selectedEvent = useSelector((state) => state.selectedEvent);

  const handleClick = () => containerHeight === '36%' ? setContainerHeight('98.5%') : setContainerHeight('36%');

  if (selectedEvent.title)
    return (
      <TouchableWithoutFeedback onPress={() => handleClick()}>
        <View style={{ ...styles.container, ...{ height: containerHeight } }}>
          <Text style={styles.title}>
            {selectedEvent.title}
          </Text>
          <Text style={styles.description}>
            bla
          </Text>
        </View>
      </TouchableWithoutFeedback >
    );
  else
    return <></>;

};

export default eventTab;
