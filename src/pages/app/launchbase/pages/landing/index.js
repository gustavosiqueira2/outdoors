import React from 'react';

import { View, Text } from 'react-native';

import Button from '../../components/button';

const landing = ({ navigation }) => {

  const handleClick = () => navigation.navigate('Basics');

  return (
    <View style={{
      flex: 1,
      padding: 25
    }}>
      <View style={{
        flex: 1,
        marginBottom: 30
      }}>
        <Text style={{
          fontSize: 38,
          fontFamily: 'Montserrat_700Bold'
        }}>
          Are you ready?
        </Text>
      </View>
      <View style={{
        flex: 6
      }}>
        <Text style={{
          fontSize: 24,
          fontFamily: 'Montserrat_400Regular',
          marginBottom: 5
        }}>
          Welcome to Launchase
        </Text>
        <Text style={{
          fontSize: 20,
          fontFamily: 'Montserrat_400Regular'
        }}>
          Here we will setup everything you need, to start now your Event
        </Text>
      </View>
      <View style={{
        flex: 1,
        marginBottom: 50
      }}>
        <Text style={{
          fontSize: 24,
          fontFamily: 'Montserrat_400Regular',
        }}>
          Lets launch the party over!!
        </Text>
      </View>

      <Button action={() => handleClick()}/>
    </View>
  )

}

export default landing;