import React, { useState, useRef } from 'react';

import api from '../../../../services/api';
import * as Yup from 'yup';

import { Ionicons } from '@expo/vector-icons';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import TextInput from '../../../../components/Inputs/Text/Masked';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const phoneNumber = ({ navigation }: any) => {

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleClick = async (data: { phonenumber: string }) => {
    try {

      setButtonDisabled(true);
      const schema = Yup.object().shape({ phonenumber: Yup.string().min(10).max(11).required('Please insert a Valid Phone number') });
      await schema.validate(data);

      const response = await api.get('users?phonenumber=' + data.phonenumber);

      navigation.navigate('Confirmation', { data, exist: response.data.length > 0 ? true : false });
      formRef.current?.reset();
      setButtonDisabled(false);
      
    } catch (err) {
      err instanceof Yup.ValidationError && formRef.current?.setErrors({ [err.path]: err.message });
      setButtonDisabled(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.phone_input_container}>
        <Form ref={formRef} onSubmit={handleClick}>
          <TextInput
            name='phonenumber'
            masks={['(99) 9999-9999', '(99) 99999-9999']}
            placeholder='Phone: (21) 99042-8831'
          />
        </Form>
      </View>
      <View style={styles.send_button_container}>
        <TouchableOpacity
          style={styles.send_button}
          disabled={buttonDisabled}
          onPress={() => formRef.current?.submitForm()}
        >
          <Ionicons size={28} name='md-send' color='#1e1e1e' />
        </TouchableOpacity>
      </View>
    </View >
  )

}

export default phoneNumber;
