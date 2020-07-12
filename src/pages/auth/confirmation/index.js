import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import FormTextInput from '../../../components/Inputs/Text';

const confirmation = () => {

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>
          Hey!
        </Text>
        <Text style={styles.subtitle}>
          A sms was sended to your phone, use the code to confirm your registration.
        </Text>
      </View>
      <View style={styles.input_container}>
        <View style={styles.input}>
          {/* <FormTextInput placeholder='Ex: XB3KW7' /> */}
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button}>
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