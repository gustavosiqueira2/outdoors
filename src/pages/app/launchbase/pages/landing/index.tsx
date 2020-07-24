import React from 'react';

import { LaunchBaseRouteParamList } from '../../../../../routes/launchbase.routes';

import { View, Text } from 'react-native';
import styles from './styles';

import Button from '../../components/button';

const landing = ({ navigation }: LaunchBaseRouteParamList) => {

  const handleClick = () => navigation.navigate('Basics');

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Are you ready?</Text>
      </View>
      <View style={styles.subtitle_container}>
        <Text style={styles.subtitle1}>Welcome to Launchase</Text>
        <Text style={styles.subtitle2}>Here we will setup everything you need, to start now your Event</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Lets launch the party over!!</Text>
      </View>

      <Button action={() => handleClick()}/>
    </View>
  )

}

export default landing;