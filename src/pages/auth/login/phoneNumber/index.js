import React, { useState, useRef } from 'react';

import api from '../../../../services/api';

import { Ionicons } from '@expo/vector-icons';

import { Form } from '@unform/mobile';
import FormTextInput from '../../../../components/Inputs/Text';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const phoneNumber = ({ navigation }) => {

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formRef = useRef(null);

  const handleClick = async () => {
    setButtonDisabled(true);
    const res = await api.get('users?phonenumber=1234');

    setButtonDisabled(false);
    navigation.navigate('Confirmation', { registred: res.data.length });
  }

  return (
    <View style={styles.container}>
      <View style={styles.phone_input_container}>
        <Form ref={formRef} onSubmit={handleClick}>
          <FormTextInput name='phonenumber' placeholder='Phone: +55 (21) 99042-8831' />
        </Form>
      </View>
      <View style={styles.send_button_container}>
        <TouchableOpacity
          style={styles.send_button}
          disabled={buttonDisabled}
          onPress={() => formRef.current.submitForm()}
        >
          <Ionicons size={28} name='md-send' color='#1e1e1e' />
        </TouchableOpacity>
      </View>
    </View >
  )

}

export default phoneNumber;
