import React, { useRef } from 'react';

import { LaunchBaseRouteParamList } from '../../../../../routes/launchbase.routes';

import { View, Text } from 'react-native';
import styles from './style';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import FormTextInput from '../../../../../components/Inputs/Text';

import Button from '../../components/button';

const basics = ({ navigation }: LaunchBaseRouteParamList) => {

  const formRef = useRef<FormHandles>(null);

  const handleClick = async () => {
    navigation.navigate('Location');
    formRef.current?.reset();
  }

  return (
    <View style={styles.container}>

      <View style={styles.title_container}>
        <Text style={styles.title}>Lets launch!</Text>
        <Text style={styles.subtitle}>but first, the Basics:</Text>
      </View>

      <View style={styles.input_container}>
        <Form ref={formRef} onSubmit={handleClick}>
          <FormTextInput name='name' placeholder='Name' customStyle={styles.input} />
        </Form>
      </View>

      <Button action={() => formRef.current?.submitForm()} />

    </View>
  )

}

export default basics;
