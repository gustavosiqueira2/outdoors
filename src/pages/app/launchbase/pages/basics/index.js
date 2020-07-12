import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { View, Text } from 'react-native';
import styles from './style';

import { Form } from '@unform/mobile';
import FormTextInput from '../../../../../components/Inputs/Text';

import Button from '../../components/button';

const basics = ({ navigation }) => {

  const formRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({
      type: 'ADD_EVENT_NAME',
      // SEND ALL FORM, ACTUALLY ONLY NAME
      event: { ...formRef.current.getData() },
    })
    navigation.navigate('Location');
    formRef.current.reset();
  }

  return (
    <View style={styles.container}>

      <View style={styles.title_container}>
        <Text style={styles.title}>Launch!</Text>
        <Text style={styles.subtitle}>but first, the Basics:</Text>
      </View>

      <View style={styles.input_container}>
        <Form ref={formRef} onSubmit={handleClick}>
          <FormTextInput name='name' placeholder='Name' customStyle={styles.input} />
        </Form>
      </View>

      <Button action={() => formRef.current.submitForm()} />

    </View>
  )

}

export default basics;
