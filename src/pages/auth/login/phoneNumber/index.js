import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import FormTextInput from '../../../../components/Inputs/Text';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const phoneNumber = ({ navigation }) => {

  const handleClick = () => {
    navigation.navigate('Confirmation');
  }

  return (
    <View style={styles.container}>
      <View style={styles.phone_input_container}>
        <FormTextInput placeholder='Phone: +55 (21) 99042-8831' />
      </View>
      <View style={styles.send_button_container}>
        <TouchableOpacity style={styles.send_button} onPress={() => handleClick()}>
          <Ionicons size={28} name='md-send' color='#1e1e1e' />
        </TouchableOpacity>
      </View>
    </View >
  )

}

export default phoneNumber;
