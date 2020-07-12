import React from 'react';

import { View, Text } from 'react-native';
import styles from './style';

const locationHeader = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>SpacePoint</Text>
      <Text style={styles.subtitle}>where it will be started?</Text>
    </View>
  )

}

export default locationHeader;
