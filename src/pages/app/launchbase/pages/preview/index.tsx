import React from 'react';

import { LaunchBaseRouteParamList } from '../../../../../routes/launchbase.routes';

import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

import Button from '../../components/button';

const preview = ({ navigation }: LaunchBaseRouteParamList) => {

  const event = {
    name: 'a',
    coords: {
      latitude: '',
      longitude: ''
    }
  }

  const handleClick = () => {
    navigation.dangerouslyGetParent()?.navigate('Map');
    navigation.popToTop();
  }

  return (
    <>
      <ScrollView style={{
        flex: 1,
        padding: 25
      }}>
        <View style={{
          marginBottom: 20
        }}>
          <Text style={{
            fontSize: 38,
            fontFamily: 'Montserrat_700Bold'
          }}>
            Preview
          </Text>
          <Text style={{
            fontSize: 24,
            fontFamily: 'Montserrat_400Regular',
          }}>
            Before your finish, lets check if evertinhg is correct.
          </Text>
        </View>
        <Text style={styles.label_title}>
          Name:
          {event.name}
        </Text>
        <Text style={styles.label_title}>
          Latitude:
          {event.coords.latitude}
        </Text>
        <Text style={styles.label_title}>
          longitude:
          {event.coords.longitude}
        </Text>

      </ScrollView>
      <Button action={() => handleClick()} />
    </>
  )

}

export default preview;
