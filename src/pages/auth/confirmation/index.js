import React, { useState, useRef } from 'react';

import { Form } from '@unform/mobile';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import FormTextInput from '../../../components/Inputs/Text';

const confirmation = ({ route }) => {

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formRef = useRef(null);

  const handleClick = () => {
    setButtonDisabled(!buttonDisabled);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>
          Hey!
        </Text>
        <Text style={styles.subtitle}>
          {route.params.registred === 0 ? "A sms was sended to your phone, use the code to confirm your registration." : "We sended a code to your phone! know you just need to check it and login :)"}
        </Text>
      </View>
      <View style={styles.input_container}>
        <View style={styles.input}>
          <Form ref={formRef} onSubmit={handleClick}>
            <FormTextInput name="code" placeholder='Ex: XB3KW7' />
          </Form>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            disabled={buttonDisabled}
            onPress={() => formRef.current.submitForm()}
          >
            <Text style={styles.button_text}>
              check
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

export default confirmation;