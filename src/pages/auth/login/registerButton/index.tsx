import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type ButtonProps = {
  icon: string,
  text: string,
  color: string
}

const registerButton = ({ icon, text, color }: ButtonProps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>

        <Ionicons
          name={icon}
          size={28}
          color={color}
          style={styles.icon}
        />

        <Text style={styles.text}>{text}</Text>

      </TouchableOpacity>
    </View>
  )

}

export default registerButton;
