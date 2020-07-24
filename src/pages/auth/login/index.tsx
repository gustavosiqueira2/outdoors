import React from 'react';

import { AuthRouteParamList } from '../../../routes/auth.routes';

import { View, Text } from 'react-native';
import styles from './styles';

import PhoneNumber from './phoneNumber';
import RegisterButton from './registerButton';

const login = ({ navigation }: AuthRouteParamList) => {

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>
          OutDoors
        </Text>
      </View>
      <View style={styles.subtitle_container}>
        <Text style={styles.subtitle}>
          Lets Join in the Club!
        </Text>
      </View>
      <View style={styles.login_container}>

        <PhoneNumber navigation={navigation} />

        <RegisterButton icon='logo-facebook' text='Join with Facebook' color='#00f' />
        <RegisterButton icon='logo-google' text='Join with Google' color='#f00' />

      </View>
    </View>
  )

}

export default login;
